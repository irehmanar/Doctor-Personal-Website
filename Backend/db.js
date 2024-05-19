import mongoose from "mongoose";
const mongoURI = "mongodb+srv://abdulrehmanasghar97:w9I4he0SDAWtSCPH@cluster0.dy95u2m.mongodb.net/Hospital_Database"; //ad your url here of mongodb string
const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to mongodb successfully");        //connecting to mongodb 
        })
        .catch((error) => {
            console.log("Error connecting mongo db :", error);
        })
}
export default connectToMongo;  