import express from 'express';
import { validationResult } from 'express-validator';
import promotion from '../models/promotionModel.js'; // Import your promotion model

const router = express.Router();

// Create a plan
const createPromotion = async (req, res) => {
  try {
    /*const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success: false });
    }*/

    const { NumberofPlans, Plans } = req.body;

    // Check if the size of Plans array matches NumberofPlans
    if (Plans.length !== NumberofPlans) {
      return res.status(400).json({ error: 'Number of Plans does not match the size of Plans array', success: false });
    }

    // Check if each SubPlans array size matches NumberofSubPlans
    for (const plan of Plans) {
      if (plan.SubPlans.length !== plan.NumberofSubPlans) {
        return res.status(400).json({ error: 'Number of SubPlans does not match the size of SubPlans array', success: false });
      }
    }

    // Delete all existing promotions
    await promotion.deleteMany({});

    // Create new promotion
    const newPromotion = await promotion.create({
      NumberofPlans,
      Plans
    });

    if (!newPromotion) {
      return res.status(400).json({ error: 'Promotion creation failed outside catch', success: false });
    }

    return res.status(200).json({ success: true, promotion: newPromotion });

  } catch (error) {
    return res.status(400).json({ error: 'Promotion creation failed inside catch', success: false });
  }
};


//display
const displayPromotion = async (req, res) => {
    try {
      const promotions = await promotion.find({});
      return res.json(promotions);
    } catch (error) {
      const errorMessage = "ERROR!"
      return res.status(400).json(errorMessage);
    }
}
export default {createPromotion , displayPromotion}