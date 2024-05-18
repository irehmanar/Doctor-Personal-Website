import connectToMongo from "./db.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import promotionRoutes from "./routes/promotionRoute.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminDashboardRoute from "./routes/adminDashboardRoutes.js";
import contactUsRoutes from "./routes/contactUsRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import cors from "cors";
import { generateUploadURL } from "../src/aws/s3.js";
const app = express();   
const port = 3333;



connectToMongo();                 //connecting to MongoDb database 
app.use(cors());
app.use(express.json());
app.use('/s3Url', async (req, res) => {
  try {
    const url = await generateUploadURL();
    res.send({ url });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/hospital',userRoutes);
app.use('/promotion',promotionRoutes);
app.use('/appointment',appointmentRoutes);
app.use('/adminDashboard',adminDashboardRoute);
app.use('/contactUs',contactUsRoutes);
app.use('/prescription',prescriptionRoutes);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


