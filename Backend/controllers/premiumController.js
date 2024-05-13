import PremiumPlans from "../models/premiummodel.js";
import { body, validationResult } from "express-validator";

const createPromotion = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const { title, description, duration, price , discount } = req.body;
        
        const existingPromotion = await PremiumPlans.findOne({ title });
        if (existingPromotion) {
          return res.status(400).json({ error: 'Promotion already exists' },{success : false});
        }
        const newPromotion = await PremiumPlans.create({
          title,
          description,
          duration,
          price,
          discount
        });
        if (!newPromotion) {
          return res.json("Promotion Failed");
        }

        return res.json(newPromotion);

    } catch (error) {
        const errorMessage = "ERROR!"
        return res.status(400).json(errorMessage);
    }
}

const updatePromotion = async (req, res) => { 
    const { title } = req.params;
    const updateFields = req.body;
  
    try {
      // Find the promotion by title
      const promotionToUpdate = await PremiumPlans.findOne({ title });
  
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
const displayPromotion = async (req, res) => {
    try {
      const promotions = await PremiumPlans.find({});
      return res.json(promotions);
    } catch (error) {
      const errorMessage = "ERROR!"
      return res.status(400).json(errorMessage);
    }
}
export default {createPromotion , updatePromotion , displayPromotion}