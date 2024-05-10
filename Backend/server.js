import connectToMongo from "./db.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import promotionRoutes from "./routes/promotionRoute.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import adminDashboardRoute from "./routes/adminDashboardRoutes.js";
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

app.listen(port, () => {
    console.log(`My Hospital  MSS App is listening on port http://localhost:${port}`);
});






