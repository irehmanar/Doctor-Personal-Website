import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    patientFullName:{
        type:String
    },
    image: {
        type: String,
    },
    firstName: { 
        type: String,
    },
    lastName: { 
        type: String, 
    },
    cnic:{
        type:Number
    },
    age: { 
        type: Number, 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female'], 
    },
    patientOccupation:{
        type:String
    },
    bloodType:{
        type: String,
    },
    phone:{
        type:String
    },
    location:{
        type:String,
        enum: ['Local', 'Foreign']
    },
    role:{
        type:String,
        enum:["Doctor","Patient","Admin"],
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    image: {
        type: String,
    },
    verificationToken: {
        token: { type: String },
        expires: { type: Date },
      },
      activated: {
        type: Boolean,
        default: false,
      },
      verified:{
        type:Boolean,
        default:false
      },
      appointmentCounter:{
        type:Number,
        default:0
      },
      patientFoodChoices:{
        type: String,
      },
            patientFoodAvoid:{
                type: String,
            },
            patientHomeCook:{
                type: String,
            },
            patientWristCircumference:{
                type: Number
            }
}
,{
    timestamps: true,
  
  }
  // username,email,password,firstName,lastName,cnic,dob,gender,bloodType,phone,location,role,weight,height,image,verificationToken,activated
);
const user = mongoose.model("user", userSchema);
export default user;