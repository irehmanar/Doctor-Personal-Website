import appointment from "../models/appointment.js";
import promotion from "../models/promotionModel.js";
import user from "../models/userModel.js";
import { validationResult } from "express-validator";

const createAppointment = async (req, res) => {
    try {
        // Extract data from the request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            patientFullName,
            patientCNIC,
            patientAge,
            patientGender,
            patientContactNumber,
            patientEmail,
            patientCurrentWeight,
            patientOccupation,
            patientFoodChoices,
            patientFoodAvoid,
            patientHomeCook,
            patientWristCircumference,
            patientHeight,
            patientDeitarySupplements,
            pateintNameOfSupplements,
            patientMedicalComplications,
            patientFoodAllergy,
            patientPhysicalActivity,
            patientBloodTestImage,
            patientRequirements,
            planChosen,
            subPlanchosen,
            paymentType,
            paymentReciept,
        } = req.body;
        
            // Find the promotion based on the selected promotion type
            let selectedPromotion = await promotion.findOne();
            let selectedPlan = selectedPromotion.Plans.find((plan) => plan.NameofPlan === planChosen);
            let selectedSubPlan = selectedPlan.SubPlans[subPlanchosen - 1];
            // Check if the promotion is found
            if (!selectedPromotion) {
                res.status(400).json({ error: 'Invalid promotion', success: false });
                return;
            }

            // Get the duration and price from the selected promotion
            const { month, price } = selectedSubPlan;
            const promotionIncome = price;
            const todayDate = new Date();
            const appointmentdate = todayDate.toISOString().split('T')[0];
            // Create a new appointment object with the provided data
            const newAppointment = new appointment({
                patientFullName,
                patientCNIC,
                appointmentdate,
                patientAge,
                patientGender,
                patientContactNumber,
                patientEmail,
                patientCurrentWeight,
                patientOccupation,
                patientFoodChoices,
                patientFoodAvoid,
                patientHomeCook,
                patientWristCircumference,
                patientHeight,
                patientDeitarySupplements,
                pateintNameOfSupplements,
                patientMedicalComplications,
                patientFoodAllergy,
                patientPhysicalActivity,
                patientBloodTestImage,
                patientRequirements,
                planChosen,
                subPlanchosen,
                paymentType,
                month,
                promotionIncome,
                paymentReciept,
                appointmentStatus: 'Pending' // Default status for new appointments
            });

            // Update user's appointment counter
            // Save the new appointment to the database
            await newAppointment.save();

            // Send a success response
            res.status(201).json({ message: 'Appointment created successfully', success: true });
         } catch (error) {
                console.error('Error creating appointment:', error);
                res.status(500).json({ error: 'Internal server error', success: false });
            }
       };
    const getPlans = async (req, res) => {
        try {
            // Find all promotions
            const allPromotions = await promotion.find();
            const planNames = allPromotions.map(promotion => promotion.Plans.map(plan => plan.NameofPlan));
            const allPlanNames = [].concat(...planNames);
            res.status(200).json({ planNames: allPlanNames, success: true });
            // Send a success response with the found promotions
        } catch (error) {
            console.error('Error getting all promotions:', error);
            res.status(500).json({ error: 'Internal server error', success: false });
        }
    }
    const getSubplans = async (req,res) => {
        const planName  = req.params.planName;
        let selectedPromotion = await promotion.findOne();
        let selectedPlan = selectedPromotion.Plans.find((plan) => plan.NameofPlan === planName);
        if (!selectedPlan) {
            res.status(400).json({ error: 'Invalid plan name', success: false });
            return;
        }
        const subPlans = selectedPlan.SubPlans;
        res.status(200).json({ subPlans, success: true });

    }
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
export default { createAppointment, getPlans , getSubplans,getApppointmentsbyPatientCnic};
