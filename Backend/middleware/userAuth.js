import jwt from "jsonwebtoken";
import user from "../models/userModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function userAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    // const token = req.cookie.authorization;
    // if (!token) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }
    try {
      const payload = jwt.verify(token, "uH7XGk98uT5bmHCAhyuNTke7XmAJwfSuPFr");
      req.User = payload.auth_user;
      console.log(req.User);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
export default userAuth;