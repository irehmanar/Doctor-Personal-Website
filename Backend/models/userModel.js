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
    dob: { 
        type: Date, 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female'], 
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
    bmi:{
        type:Number,
    },
    // temperature: {
    //     type: Number,
    //     required: true
    // },
    // symptoms: {
    //     type: [String],
    //     required: true
    // },
    // bloodPressure:
    //     [{
    //         upper: {
    //             type: Number,
    //             required: true
    //         },
    //         lower: {
    //             type: Number,
    //             required: true
    //         }
    //     }],
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
        type: Number,
      },
      prescription:[
        {
            image:{
                type:[String],
            },
            numberOfFiles:{
                type:Number,
            },
        }
      ]
}
,{
    timestamps: true,
  
  }
  // username,email,password,firstName,lastName,cnic,dob,gender,bloodType,phone,location,role,weight,height,image,verificationToken,activated
);
const user = mongoose.model("user", userSchema);
export default user;