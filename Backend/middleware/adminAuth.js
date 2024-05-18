import jwt from "jsonwebtoken";
import user from "../models/userModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function userAuth(req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token);
    // const token = req.cookie.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      console.log(payload);
      req.User = payload.auth_user;
      if(req.User.role === 'Patient' || req.User.role === 'Doctor'){
        return res.status(401).json({ message: "Unauthorized" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
export default userAuth;