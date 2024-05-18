import user from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import jsonwebtoken from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
// import {validationResult ,body} from "express-validator";

// saveVerificationToken
const saveVerificationToken = async (userId, verificationToken) => {
  await user.findOneAndUpdate(
    { _id: userId },
    { verificationToken: verificationToken }
  );
};


// generateVerifcationToken
const generateVerificationToken = () => {
  const token = crypto.randomBytes(64).toString("hex");
  const expires = Date.now() + 3 * 60 * 60 * 1000;
  return {
    token: token,
    expires: expires,
  };

};

// sendVerificationMail
const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
      user: "abrehman.bscs22seecs@seecs.edu.pk",
      pass: "STUDEnt@1235"
    },
  });

  const mailOptions = {
    from: "abrehman.bscs22seecs@seecs.edu.pk",
    to: email,
    subject: "Verify your email address",
    text: `Please click the following link to verify your email address: http://localhost:3000/hospital/verifyUser/${token}`,
    html: `<p>Please click this link to verify your account:</p> <a href="http://localhost:3333/hospital/verifyUser/${token}">Verify</a><br>Regards<br>Team Hospital Management System`,
  };

  return await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return false;
    } else {
      console.log("Email sent:", info.response);
      return true;
    }
  });
};

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const alreadyExistUsername = await user.findOne({ username });
  const alreadyExistEmail = await user.findOne({ email });
  if (alreadyExistUsername || alreadyExistEmail) {
    return res.status(400).json({ message: "username or email already exists", success: false });
  } else {
    try {
      const hashed_password = await bcryptjs.hash(password, 10);
      const userDetails = await user.create({
        email: email,
        username: username,
        password: hashed_password,
        role: 'Patient',
        appointmentCounter: 0
      });
      const verificationToken = generateVerificationToken();
      await saveVerificationToken(userDetails._id, verificationToken);
      await sendVerificationEmail(userDetails.email, verificationToken.token);
      return res.status(200).json({ message: "success .user added. mail sent", success: true });
    } catch (error) {
      return res.status(500).json({ message: "error", errors: [error.message], success: false });
    }
  }
};



const verifyUser = async (req, res) => {
  const token = req.params.token;

  try {
    // Find and update the user if the verification token is valid and not expired
    const verifiedUser = await user.findOneAndUpdate(
      {
        "verificationToken.token": token,
        "verificationToken.expires": { $gt: Date.now() },
      },
      {
        activated: true,
        "verificationToken.token": null,
      },
    );

    // Check if user was found and updated
    if (verifiedUser) {
      return res.status(200).json({ message: "Account verified", success: true });
    } else {
      // If no user was found or token is invalid/expired
      return res.status(401).json({ message: "Invalid or expired verification token", success: false });
    }
  } catch (error) {
    console.error("Error verifying account:", error);
    return res.status(500).json({ message: "Error verifying account", success: false });
  }
};


// signin path => "/Hospital/signin"
const signin = async (req, res) => {
  try {
    console.log(req.body)
    const { username, password } = req.body;
    if (!username | !password) {
      return res.status(202).json({ message: "Incomplete content" });
    } else {
      const auth_user = await user.findOne({ username });
      console.log(auth_user);
      console.log("hey....")
      if (!auth_user) {
        const success = false;
        return res
          .status(401)
          .json({ message: `User with ${username} not found`, success });
      } else if (auth_user.activated === false) {
        const success = false;
        return res
          .status(401)
          .json({ message: `user with ${username} is not activated`, success });
      } else {
        const verify = await bcryptjs.compare(password, auth_user.password);
        if (!verify) {
          const success = false;
          return res
            .status(401)
            .json({ message: "Username or Password incorrect", success });
        } else {
          auth_user.password = undefined;
          const success = true;
          const token = jsonwebtoken.sign({ auth_user }, process.env.SECRET_KEY, { expiresIn: "5h" });
          res.cookie("authorization", `Bearer ${token}`);
          return res.status(200).json({ token: `Bearer ${token}`, message: "login successfully", success, role: auth_user.role });
        }

      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



//update Patient
const updatePatient = async (req, res) => {
  const { firstName, lastName, cnic, dob, gender, bloodType, phone, location, weight, height, temperature, symptoms } = req.body;
  const User = req.body.user;
  let success;
  if (!firstName || !lastName || !dob || !gender || !cnic || !bloodType || !location) {
    success = false;
    return res.status(400).json({ message: "error", errors: "incomplete content", success });
  } else {
    try {
      const bmi = weight / (height * height);
      await user.updateOne(
        { _id: User._id },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dob: dob,
            cnic: cnic,
            bloodType: bloodType,
            phone: phone,
            location: location,
            weight: weight,
            height: height,
            bmi: bmi,
          },
        }
      );
      success = true;
      return res.status(200).json({ message: "success", success });
    } catch (error) {
      success = false;
      return res.status(400).json({ message: "error", errors: [error.message], success });
      console.log(error.message);
    }
  }
};

// get patient by userId
const getPatientByUserId = async (req, res) => {
  try {
    const patient = await user.findOne({ userId: req.params.id }).populate(
      "userId"
    );
    return res.json(patient);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
//update password
const updatePassword = async (req, res) => {
  const User = req.User;
  console.log(User);
  const { oldPassword, newPassword } = req.body;
  let success;
  if (!oldPassword || !newPassword) {
    success = false;
    return res.status(400).json({ message: "error", errors: "incomplete content", success });
  } else {
    try {
      const findUser = await user.findOne({ _id: User._id });
      const verify = await bcryptjs.compare(oldPassword, findUser.password);
      if (!verify) {
        success = false;
        return res.status(401).json({ message: "old password is incorrect", success });
      } else {
        const hashed_password = await bcryptjs.hash(newPassword, 10);
        await user.updateOne({ _id: User._id }, {
          $set: {
            password: hashed_password
          }
        });
        success = true;
        return res.status(200).json({ message: "success", success });
      }
    } catch (error) {
      success = false;
      return res.status(400).json({ message: "error", errors: [error.message], success });
    }
  }
};
const updateUsername = async (req, res) => {
  const User = req.User;
  const { username } = req.body;
  let success;
  if (!username) {
    success = false;
    return res.status(400).json({ message: "error", errors: "incomplete content", success });
  } else {
    try {
      const existUser = await user.findOne({ _id: User._id });
      if (existUser) {
        success = false;
        return res.status(400).json({ message: "username already exist", success });
      }
      const updatedUser = await user.updateOne({ _id: User._id }, {
        $set: {
          username: username
        }
      });
      success = true;
      return res.status(200).json({ message: "username updated successfully", updatedUser, success });
    } catch (error) {
      success = false;
      return res.status(400).json({ message: "Couldn't update username", errors: [error.message], success });
    }
  }

}

//get User by ID
const getUserById = async (req, res) => {
  const User = req.User;
  try {
    const existUser = await user.findOne({ _id: User._id });
    return res.json(existUser);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}
export default { signup, signin, updatePatient, getPatientByUserId, verifyUser, updatePassword, updateUsername };