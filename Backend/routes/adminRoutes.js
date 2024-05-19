import express from "express";
import adminController from "../controllers/adminController.js";
import doctorAuth from "../middleware/doctorAuth.js";
const adminRoute = express.Router();
adminRoute.post("/addAdmin",adminController.addAdmin); //SETTINGS API BY ISMAIL
adminRoute.get("/getAdmin",adminController.getAdminByUserId); //SETTINGS API BY ISMAIL NEED TO EXPLAIN
export default adminRoute;