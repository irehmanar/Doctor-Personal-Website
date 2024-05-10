import express from "express";
import adminController from "../controllers/adminController";
const adminRoute = express.Router();
adminRoute.post("/adminSignup",adminController.adminSignup);
adminRoute.post("/adminSignup",adminController.adminSignup);
export default adminRoute;