import express from "express";
import { body, validationResult } from "express-validator";
import therapeuticController from "../controllers/therapeuticController.js";
const therapeuticPromotionRoute = express.Router();

therapeuticPromotionRoute.post("/createPromotion",[
    body("title").isIn(["Standard", "Silver", "Gold", "Platinum"]).notEmpty(),
    body("description").isString().notEmpty(),
    body("duration").isNumeric().notEmpty(),
    body("price").isNumeric().notEmpty(),
    body("discount").isNumeric().notEmpty()
],therapeuticController.createPromotion);

therapeuticPromotionRoute.put("/updatePromotion/:title",
[
    body("description").isString(),
    body("duration").isNumeric(),
    body("price").isNumeric(),  
],therapeuticController.updatePromotion);
therapeuticPromotionRoute.get("/getPromotions",therapeuticController.displayPromotion);
export default therapeuticPromotionRoute;