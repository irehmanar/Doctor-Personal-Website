import jwt from "jsonwebtoken";
import user from "../models/userModel";
import mongoose from "mongoose";

const SECRET_KEY = "uH7XGk98uT5bmHCAhyuNTke7XmAJwfSuPFr"
async function userAuth(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const payload = jwt.verify(token, SECRET_KEY);
  
      req.sender = {
        id: payload.auth_user._id,
        role: payload.auth_user.role,
      };
  
      switch (payload.auth_user.role) {
        case "Admin":
          break;
        case "Doctor":
          const doctor = await user.findOne({
            userId: mongoose.Types.ObjectId(req.sender.id),
          });
          req.sender.doctorId = doctor._id;
          break;
        case "Patient":
          const patient = await user.findOne({
            userId: mongoose.Types.ObjectId(req.sender.id),
          });
          req.sender.patientId = patient._id;
          break;
        default:
          return res.status(401).json({ message: "Unauthorized" });
      }
  
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
  
  module.exports = userAuth;