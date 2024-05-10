import express from "express";
import userController from "../controllers/userController.js";
const userRoutes = express.Router();

userRoutes.post("/signup",userController.signup );
userRoutes.post("/signin", userController.signin);
userRoutes.put("/verifyUser/:token", userController.verifyUser);
userRoutes.post("/updatePatient/:id",userController.updatePatient);
export default userRoutes;