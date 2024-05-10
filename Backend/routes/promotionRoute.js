import express from "express";
import { body, validationResult } from "express-validator";
import promotionController from "../controllers/promotionController.js";
const promotionRoutes = express.Router();

promotionRoutes.post("/createPromotion",[
    body("title").isIn(["Standard", "Silver", "Gold", "Platinum"]).notEmpty(),
    body("description").isString().notEmpty(),
    body("duration").isNumeric().notEmpty(),
    body("price").isNumeric().notEmpty(),
],promotionController.createPromotion);

promotionRoutes.put("/updatePromotion/:title",
[
    body("description").isString(),
    body("duration").isNumeric(),
    body("price").isNumeric(),  
],promotionController.updatePromotion);



export default promotionRoutes;