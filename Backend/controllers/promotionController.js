import promotion from "../models/promotionModel.js";
import { body, validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";
import jsonwebtoken from "jsonwebtoken";

const createPromotion = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, duration, discountPercent, price } = req.body;

        const newPromotion = await promotion.create({
            title,
            description,
            duration,
            discountPercent,
            price,
        });
        if (!newPromotion) {
            return res.json("Promotion Failed");
        }

        return res.json(newPromotion);

    } catch (error) {
        const errorMessage = { error: "Cannot POST two promotions with the same title" };
        return res.status(400).json(errorMessage);
    }
}

const updatePromotion = async (req, res) => { 
    const { title } = req.params;
    const updateFields = req.body;
  
    try {
      // Find the promotion by title
      const promotionToUpdate = await promotion.findOne({ title });
  
      if (!promotionToUpdate) {
        return res.status(404).json({ error: 'Promotion not found' });
      }
  
      // Update the promotion with the fields provided in the request body
      for (const key in updateFields) {
        if (updateFields.hasOwnProperty(key)) {
          promotionToUpdate[key] = updateFields[key];
        }
      }
  
      // Save the updated promotion
      await promotionToUpdate.save();
  
      // Return the updated promotion as JSON response
      res.json(promotionToUpdate);
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default {createPromotion , updatePromotion}