import express from "express";
import { body, validationResult } from "express-validator";
import premiumController from "../controllers/premiumController.js";
const premiumPromotionRoute = express.Router();

premiumPromotionRoute.post("/createPromotion",[
    body("title").isIn(["Standard", "Silver", "Gold", "Platinum"]).notEmpty(),
    body("description").isString().notEmpty(),
    body("duration").isNumeric().notEmpty(),
    body("price").isNumeric().notEmpty(),
    body("discount").isNumeric().notEmpty()
],premiumController.createPromotion);

premiumPromotionRoute.put("/updatePromotion/:title",
[
    body("description").isString(),
    body("duration").isNumeric(),
    body("price").isNumeric(),  
],premiumController.updatePromotion);
premiumPromotionRoute.get("/getPromotions",premiumController.displayPromotion);
export default premiumPromotionRoute;