import jwt from "jsonwebtoken";
import user from "../models/userModel";
import mongoose from "mongoose";


async function userAuth(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
  
      req.sender = {
        id: payload.id,
        userType: payload.userType,
      };
  
      switch (payload.userType) {
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