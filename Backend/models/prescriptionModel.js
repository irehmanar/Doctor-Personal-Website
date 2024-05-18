import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
    patientCNIC: {
            type: Number,
            required: true
        },
    numberOfFiles:{
                type: Number,
                required: true
            },
        image:{
                type:[String], //ARRAY NEEDED
                required: true
            },
        appointmentId:{
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            pdf:{
                type:[String],
                required:true
            
            }
});

// title,description,startDate,endDate,discount

const prescription = mongoose.model("prescription", prescriptionSchema);
export default prescription;