import user from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import jsonwebtoken from "jsonwebtoken";



const addAdmin = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password)
        {
            return res.status(204).json({message:"incomplete content"});
        }else {

            const new_user = await user.findOne({ username, email });
            console.log(new_user)
            if (!new_user) {
              const hashed_password = await bcryptjs.hash(password, 8);
              await user.create({
                username: username,
                email: email,
                password: hashed_password,
                role:'Admin',
                activated:true
              });
              return res.status(200).json({ message: "Admin created" });
            } else {
              return res.status(409).json({ message: "Admin already exist" });
            }
          }
    } catch (error) {
        
    }
}

// get admin by userID
const getAdminByUserId = async (req, res) => {
    try {
        
      const admin = await user.findOne({ _id: req.params.id });
      res.json(admin);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  // const updateAdmin = async (req, res) => {
  //   console.log(req.body);
  //   let newUser = req.body;
  //   let userValidStatus = isAdminValid(newUser);
  //   if (!userValidStatus.status) {
  //     res.status(400).json({
  //       message: "error",
  //       errors: userValidStatus.errors,
  //     });
  //   } else {
  //     try {
  //       const updateduser = await user.updateOne(
  //         { _id: req.params.id },
  //         { $set: req.body }
  //       );
  //       res.status(200).json({ message: "success", updateduser });
  //     } catch (error) {
  //       res.status(400).json({ message: "error", errors: [error.message] });
  //     }
  //   }
  // };
  
export default {addAdmin,getAdminByUserId }