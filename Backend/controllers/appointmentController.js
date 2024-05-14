import appointment from "../models/appointment.js";
import promotion from "../models/promotionModel.js";
import PremiumPlans from "../models/premiummodel.js";
import TherapeuticPlan from "../models/therapeuticModel.js";
import user from "../models/userModel.js";
import { validationResult } from "express-validator";

const createAppointment = async (req, res) => {
    try {
        // Extract data from the request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { patientCNIC, appointmentType } = req.body;
        const { paymentReciept } = req.body;
        const { promotiontype } = req.body;
        const { planChosen } = req.body;
        const today = new Date();
        const appointmentdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        let selectedPromotion;
         /*const finduser = await user.findOne({ cnic: patientCNIC });
        if (!finduser) {
            res.status(400).json({ error: 'Please Sign-Up to book an appointment ',success:false });
        }*/
        // Check if appointmentType is "New" or "Follow-Up"
        // Check if appointmentType is "New" or "Follow-Up"
        if (appointmentType === 'New') {

            // Check if paymentReceipt or appointmentType is present in the request body
            if (!paymentReciept || !promotiontype ) {
                res.status(400).json({ error: 'Invalid request. For a new appointment must add Receipt or Diet Plan' ,success:false});
                return;
            }
            // Check if there is already a new appointment registered with the same CNIC
            const existingAppointment = await appointment.findOne({
                patientCNIC,
                appointmentType: 'New'
            });
            // Check if there is already a new appointment registered with the same CNIC
            if (existingAppointment) {
                // Check if the end date of the existing appointment is less than today's date
                if (existingAppointment.endDate > appointmentdate) {
                    res.status(400).json({ error: 'Diet plan already exists. Please select Follow-Up' ,success:false});
                    return;
                }
            }
            // For new appointments, require a promotion type and payment receipt
            // Find the promotion in the promotion model that matches the selected promotion
            if (planChosen === 'Basic') {
               selectedPromotion = await promotion.findOne({ title: promotiontype });
            }
            else if (planChosen === 'Premium') {
                selectedPromotion = await PremiumPlans.findOne({ title: promotiontype });
            }
            else if (planChosen === 'Therapeutic Plan') {
                selectedPromotion = await TherapeuticPlan.findOne({ title: promotiontype });}
            else{
                res.status(400).json({ error: 'Invalid Plan Chosen',success:false });
                return;
            }
            // Check if the promotion is found
            if (!selectedPromotion) {
                res.status(400).json({ error: 'Invalid promotion',success:false });
                return;
            }
            // Get the duration from the selected promotion
            const { duration } = selectedPromotion;
            const { price } = selectedPromotion;
            const promotionIncome = price;
            // Calculate the end date by adding the duration to today's date
            const endDate = new Date(appointmentdate.getTime() + duration * 24 * 60 * 60 * 1000);
            // Check if promotion and payment receipt are present in the request body
            if (!promotiontype || !paymentReciept) {
                res.status(400).json({ error: 'Promotion or payment receipt is missing',success:false });
            } else {
                // Create a new appointment object with the provided data
                const newAppointment = new appointment({
                    patientCNIC,
                    appointmentType,
                    planChosen,
                    appointmentdate,
                    promotiontype,
                    endDate,
                    promotionIncome,
                    paymentReciept
                });
                // add 1 appointment to the appointment counter
                await user.findOneAndUpdate({ cnic: patientCNIC }, { $inc: { appointmentCounter: 1 } });
                // Save the new appointment to the database
                await newAppointment.save();

                // Send a success response
                res.status(201).json({ message: 'Appointment created successfully',success:true });
            }
        } else if (appointmentType === 'Follow-Up') {

            // Check if paymentReceipt or appointmentType is present in the request body
            if (paymentReciept) {
                res.status(400).json({ error: 'Invalid request. For a follow-up appointment reciept or diet plan is not required',success:false });
                return;
            }

            // For follow-up appointments, search for the user by CNIC and find the previous new appointment
            const previousAppointment = await appointment.findOne({
                patientCNIC,
                appointmentType: 'New'
            }).sort({ appointmentdate: -1 }); // Sort by appointment date in descending order to get the latest new appointment
            if (!previousAppointment) {
                // If no previous new appointment found, send an error response
                res.status(400).json({ error: 'No previous new appointment found for this CNIC' ,success:false});
                return;
            }
            if (previousAppointment.endDate < new Date()) {
                res.status(400).json({ error: 'Your diet plan has expired. Please buy a new plan.',success:false });
                return;
            }
            // Use the promotion from the previous new appointment for the follow-up appointment
            const { promotiontype } = previousAppointment;
            const { endDate } = previousAppointment;
            const promotionIncome = 0;
            // Create a new follow-up appointment object with the provided data
            const newAppointment = new appointment({
                patientCNIC,
                appointmentdate,
                appointmentType,
                planChosen,
                promotiontype,
                endDate,
                promotionIncome,
                paymentReciept: null
            });
            await user.findOneAndUpdate({ cnic: patientCNIC }, { $inc: { appointmentCounter: 1 } });
            // Save the new follow-up appointment to the database
            await newAppointment.save();

            // Send a success response
            res.status(201).json({ message: 'Follow-Up appointment created successfully',success:true });
        } else {
            // If appointmentType is neither "New" nor "Follow-Up", send an error response
            res.status(400).json({ error: 'Invalid appointment type' ,success:false});
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error creating appointment:', error);
        res.status(500).json({ error: 'Internal server error' ,success:false});
    }
};

// get all appointments of user by Patientcnic
const getApppointmentsbyPatientCnic = async (req, res) => {
    try {
        const User = req.User
        const appointments = await appointment.find({ patientCNIC: User.cnic});
        res.json(appointments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export default { createAppointment,getApppointmentsbyPatientCnic};
