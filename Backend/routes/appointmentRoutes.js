import express from "express";
import appointmentController from "../controllers/appointmentController.js";
import { body } from "express-validator";
const appointmentRoutes = express.Router();

appointmentRoutes.post("/createAppointment",
[
    body('patientCNIC').isLength({ min: 13, max: 13 }).withMessage('Invalid CNIC'),
    body('appointmentType').isIn(['Follow-Up', 'New']).withMessage('Invalid appointment type'),
],appointmentController.createAppointment);

export default appointmentRoutes;