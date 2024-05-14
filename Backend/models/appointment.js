import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    patientFullName : {
        type: String,
        required: true,
    },
    patientCNIC: {
        type: Number,
        required: true
    },
    appointmentdate: { // when booking an appointment automatically a date will be set
        type: Date,
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientGender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    patientContactNumber: {
        type: Number,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
    patientCurrentWeight: {
        type: Number,
        required: true
    },
    patientOccupation: {
        type: String,
        required: true
    },
    patientFoodChoices: {
        type: String,
        required: true
    },
    patientFoodAvoid: {
        type: String,
        required: true
    },
    patientHomeCook: {
        type: String,
        required: true
    },
    patientWristCircumference: {
        type: Number,
        required: true
    },
    patientHeight: {
        type: Number,
        required: true
    },
    patientDeitarySupplements:{
        type: String,
        enum: ["Yes", "No"],
        required: true	
    },
    pateintNameOfSupplements: {
        type: String,
        default: "None"
    },
    patientMedicalComplications: {
        type: String
    },
    patientFoodAllergy: {
        type: String
    },
    patientPhysicalActivity: {
        type: String
    },
    patientBloodTestImage:{
        type: String
    },
    patientRequirements: {
        type: String,
        enum: ["Weight Management", "Disease Management", "Other"],
        required: true
    },
    planChosen: {
        type: String,
        required: true
    },
    subPlanchosen: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        enum: ["HBL", "Easy Paisa", "IBAN"],
        required: true
    },// if new make all the fields required 
    packageDuration:{
        type: Number
    },
    promotionIncome: {
        type: Number
    },
    paymentReciept: {
        type: String
    },
    month:{
        type: Number,
        required: true
    }, 
    appointmentStatus: {
        type: String,
        enum: ["Pending", "Approved"],
        required: true,
        default : "Pending"
    },
});
const appointment = mongoose.model("Appointment", appointmentSchema);
export default appointment;