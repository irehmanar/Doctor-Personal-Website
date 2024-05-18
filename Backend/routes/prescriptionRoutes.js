import express from "express";
import addPrescription from "../controllers/prescriptionController.js";
import prescriptionController from "../controllers/prescriptionController.js";
const prescriptionRoutes = express.Router();

prescriptionRoutes.post("/addPrescription",prescriptionController.addPrescription); //DONE IMAGES SHOULD BE ARRAY

export default prescriptionRoutes;