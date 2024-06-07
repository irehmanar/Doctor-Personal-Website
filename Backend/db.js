import mongoose from "mongoose";
const mongoURI = process.env.DB_URL;
const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        connectTimeoutMS: 30000, // Increased timings because default 10 seconds too low for connection
        socketTimeoutMS: 45000,  // Same thing here
    })
        .then(() => {
            console.log("Connected to mongodb successfully");        //connecting to mongodb 
        })
        .catch((error) => {
            console.log("Error connecting mongo db :", error);
        })
}
export default connectToMongo;  