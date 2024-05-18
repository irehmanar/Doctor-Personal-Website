import express from "express";
import adminDashboardController from "../controllers/adminDashboardController.js";
const adminDashboardRoute = express.Router();

adminDashboardRoute.get('/dashboard',adminDashboardController.dashboard)
adminDashboardRoute.get('/viewAppointment',adminDashboardController.viewappointment);
adminDashboardRoute.put('/acceptAppointment/:Id',adminDashboardController.acceptAppointment);
adminDashboardRoute.get('/patientPage',adminDashboardController.patientPage);
adminDashboardRoute.get('/packagePage',adminDashboardController.packagePage);
export default adminDashboardRoute