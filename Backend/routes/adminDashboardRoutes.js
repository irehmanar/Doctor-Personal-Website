import express from "express";
import adminDashboardController from "../controllers/adminDashboardController.js";
const adminDashboardRoute = express.Router();

adminDashboardRoute.get('/dashboard',adminDashboardController.dashboard) //DONE
adminDashboardRoute.get('/viewAppointment',adminDashboardController.viewappointment); //DONE 
adminDashboardRoute.put('/acceptAppointment',adminDashboardController.acceptAppointment);  //CONNECT LOGICAL ERROR
export default adminDashboardRoute