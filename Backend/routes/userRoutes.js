import express from "express";
import userController from "../controllers/userController.js";
import userAuth from "../middleware/userAuth.js"
const userRoutes = express.Router();

userRoutes.post("/signup",userController.signup );
userRoutes.post("/signin", userController.signin); 
userRoutes.put("/verifyUser/:token", userController.verifyUser);
userRoutes.put("/updatePatient",userAuth,userController.updatePatient);
userRoutes.put("/changePassword",userAuth,userController.updatePassword);
userRoutes.put("/changeUsername",userAuth,userController.updateUsername);
userRoutes.get("/getUserinfo",userAuth,userController.getUserinfoByToken);
userRoutes.get("/getUsername",userAuth,userController.getUsername);
export default userRoutes;