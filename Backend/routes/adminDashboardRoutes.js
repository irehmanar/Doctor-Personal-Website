import express from "express";
import adminDashboardController from "../controllers/adminDashboardController.js";
const adminDashboardRoute = express.Router();

adminDashboardRoute.get('/dashboard',adminDashboardController.dashboard)
adminDashboardController.get('/viewAppointment',adminDashboardController.viewappointment);
adminDashboardController.get('/acceptAppointment',adminDashboardController.acceptAppointment);
export default adminDashboardRoute