import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientCNIC: {
        type: Number,
        required: true
    },
    appointmentdate: { // when booking an appointment automatically a date will be set
        type: Date,
    },
    appointmentType: {
        type: String,
        enum: ["Follow-Up", "New"], // If new asks for payment reciept
        required: true // If follow-up checks the date of new and matches duration
    }, // if new make all the fields required 
    promotiontype: {
        type: String,
        enum: ["Standard", "Silver", "Gold", "Platinum"], // if follow up automatically chooses the promotion chosen
    },
    endDate: {  
        type: Date
    },
    promotionIncome: {
        type: Number
    },
    paymentReciept: {
        type: String
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