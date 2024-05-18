import express from "express";
import adminDashboardController from "../controllers/adminDashboardController.js";
const adminDashboardRoute = express.Router();

adminDashboardRoute.get('/dashboard',adminDashboardController.dashboard) //done
adminDashboardRoute.get('/viewAppointment',adminDashboardController.viewappointment); //done
adminDashboardRoute.put('/acceptAppointment/:Id',adminDashboardController.acceptAppointment); //need changes
adminDashboardRoute.get('/patientPage',adminDashboardController.patientPage); //done
adminDashboardRoute.get('/packagePage',adminDashboardController.packagePage); //done
adminDashboardRoute.get('/patientData',adminDashboardController.getLatestAppointments);
export default adminDashboardRoute
