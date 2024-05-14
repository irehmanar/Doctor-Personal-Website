import connectToMongo from "./db.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import promotionRoutes from "./routes/promotionRoute.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminDashboardRoute from "./routes/adminDashboardRoutes.js";
import therapeuticPromotionRoute from "./routes/therapeuticRoutes.js";
import premiumPromotionRoute from "./routes/premiumRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import contactUsRoutes from "./routes/contactUsRoutes.js"
import cors from "cors";
const app = express();   
const port = 3333;

connectToMongo();                 //connecting to MongoDb database 
app.use(cors());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/hospital',userRoutes);
app.use('/promotion',promotionRoutes);
app.use('/appointment',appointmentRoutes);
app.use('/adminDashboard',adminDashboardRoute);
app.use('/therapeuticPromotion',therapeuticPromotionRoute);
app.use('/premiumPromotion',premiumPromotionRoute);
app.use('/addPrescription',prescriptionRoutes);
app.use("/hospital",contactUsRoutes);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});






