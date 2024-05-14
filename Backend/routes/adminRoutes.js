import express from "express";
import adminController from "../controllers/adminController";
const adminRoute = express.Router();
adminRoute.post("/addAdmin",adminController.addAdmin);
adminRoute.get("/getAdmin",adminController.getAdminByUserId);
export default adminRoute;