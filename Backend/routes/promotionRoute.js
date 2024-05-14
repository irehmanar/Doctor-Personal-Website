import express from "express";
import { body, validationResult } from "express-validator";
import promotionController from "../controllers/promotionController.js";
const promotionRoutes = express.Router();

promotionRoutes.post("/createPromotion", [
    body("NumberofPlans").isNumeric().notEmpty(),
    body("Plans.*.NameofPlan").isString().notEmpty(),
    body("Plans.*.Description").isString().notEmpty(),
    body("Plans.*.NumberofSubPlans").isNumeric().notEmpty(),
    body("Plans.*.SubPlans.*.month").isNumeric().notEmpty(),
    body("Plans.*.SubPlans.*.numberOfDietPlans").isNumeric().notEmpty(),
    body("Plans.*.SubPlans.*.price").isNumeric().notEmpty(),
    body("Plans.*.SubPlans.*.discount").isNumeric().notEmpty()
], promotionController.createPromotion);

promotionRoutes.get("/getPromotions",promotionController.displayPromotion);
export default promotionRoutes;