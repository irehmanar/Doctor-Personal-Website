import ContactUs from "../controllers/contactUsController.js";
import express from "express";
const contactUsRoutes = express.Router();

contactUsRoutes.post("/contactUs", ContactUs.addContactUs);  //Done 

export default contactUsRoutes;