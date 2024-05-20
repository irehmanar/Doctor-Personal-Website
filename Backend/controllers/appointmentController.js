import appointment from "../models/appointment.js";
import promotion from "../models/promotionModel.js";
import prescription from "../models/prescriptionModel.js";
import user from "../models/userModel.js";
import { validationResult } from "express-validator";

const createAppointment = async (req, res) => {
    try {
        // Extract data from the request body
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        const data = req.body;
        let appointmentData = {};
        data.forEach(item => {
            const key = Object.keys(item)[0];
            appointmentData[key] = item[key];
        });
        console.log(appointmentData);
        // Now you can use appointmentData instead of req.body
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
        } = appointmentData;
        
            // Find the promotion based on the selected promotion type
            console.log(subPlanchosen, typeof subPlanchosen);
            let selectedPromotion = await promotion.findOne();
            let selectedPlan = selectedPromotion.Plans.find((plan) => plan.NameofPlan === planChosen);
            let selectedSubPlan = selectedPlan.SubPlans[subPlanchosen - 1];
            console.log(selectedSubPlan);
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
            await user.findOneAndUpdate({ cnic: patientCNIC }, { $inc: { appointmentCounter: 1 } });
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


    const getAllAppointments = async (req, res) => {
        try {
            const { patientCNIC } = req.User.cnic; // Extract patientCNIC from PAYLOAD
    
            const appointments = await appointment.find({ patientCNIC: patientCNIC });
    
            if (appointments.length === 0) {
                throw new Error('No appointments found for the given CNIC');
            }
    
            // Projecting data to the required format
            const projectedData = appointments.map(appointment => ({
                id: appointment._id,
                Appointment: appointment.appointmentdate.toISOString().split('T')[0], // Format date as 'dd-mm-yyyy'
                planner: appointment.planChosen,
                month: appointment.month,
                files: appointment.prescription[0]?.files || [], // Assuming you want the images from the first prescription
            }));
    
            console.log("Projected Data:", projectedData);
            res.json({projectedData}); // Send the projected data as the response
        } catch (err) {
            console.error("Error fetching appointments:", err);
            res.status(500).json({ error: err.message,success:false }); // Send an error response
        }
    };
    

    
export default { createAppointment, getPlans , getSubplans,getAllAppointments};
