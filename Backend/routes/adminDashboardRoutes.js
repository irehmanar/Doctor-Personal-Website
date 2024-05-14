import express from "express";
import adminDashboardController from "../controllers/adminDashboardController.js";
const adminDashboardRoute = express.Router();

adminDashboardRoute.get('/dashboard',adminDashboardController.dashboard)
adminDashboardRoute.get('/viewAppointment',adminDashboardController.viewappointment);
adminDashboardRoute.get('/acceptAppointment',adminDashboardController.acceptAppointment);
export default adminDashboardRoute