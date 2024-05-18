import express from "express";
import appointmentController from "../controllers/appointmentController.js";
import userAuth from "../middleware/userAuth.js";
import { body } from "express-validator";
const appointmentRoutes = express.Router();
appointmentRoutes.post("/createAppointment",
[
    body('patientCNIC').isLength({ min: 13, max: 13 }).withMessage('Invalid CNIC'),
    body('patientContactNumber').isLength({ min: 11, max: 11 }).withMessage('Phone number must be 11 digits'),
    body('patientFullName').isLength({ min: 1 }).withMessage('Full name is required'),
    body('patientAge').isInt({ min: 1 }).withMessage('Age is required'),
    body('patientGender').isIn(['Male', 'Female']).withMessage('Invalid gender'),
    body('patientEmail').isEmail().withMessage('Invalid email'),
    body('patientCurrentWeight').isFloat({ min: 1 }).withMessage('Current weight is required'),
    body('patientOccupation').isLength({ min: 1 }).withMessage('Occupation is required'),
    body('patientFoodChoices').isLength({ min: 1 }).withMessage('Food choices are required'),
    body('patientFoodAvoid').isLength({ min: 1 }).withMessage('Food avoidances are required'),
    body('patientHomeCook').isLength({ min: 1 }).withMessage('Home cook preference is required'),
    body('patientWristCircumference').isFloat({ min: 1 }).withMessage('Wrist circumference is required'),
    body('patientHeight').isFloat({ min: 1 }).withMessage('Height is required'),
    body('patientDeitarySupplements').isIn(['Yes', 'No']).withMessage('Dietary supplements preference is required'),
    body('patientRequirements').isIn(['Weight Management', 'Disease Management', 'Other']).withMessage('Patient requirements are required'),
    body('planChosen').isLength({ min: 1 }).withMessage('Plan chosen is required'),
    body('subPlanchosen').isInt({ min: 1 }).withMessage('Sub plan chosen is required'),
    body('paymentType').isIn(['HBL', 'Easy Paisa', 'IBAN']).withMessage('Payment type is required'),
], 
appointmentController.createAppointment); // Done
appointmentRoutes.get("/getPlans", appointmentController.getPlans); //Done DESCRIPTION NEED TO BE ADDED
appointmentRoutes.get("/getSubPlans/:planName", appointmentController.getSubplans); //Done



appointmentRoutes.get("/getAppointment",userAuth, appointmentController.getApppointmentsbyPatientCnic);




export default appointmentRoutes;