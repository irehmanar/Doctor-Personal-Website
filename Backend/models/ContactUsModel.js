import mongoose from "mongoose";


const ContactUsSchema = new mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    message:{
        type:String
    }
})
const ContactUs = mongoose.model("Contact Us",ContactUsSchema);
export default ContactUs
