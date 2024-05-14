import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
   patientCnic:{
         type: Number,
         required: true
    },
   numberOfFiles:{
            type: Number,
            required: true
        },
    image:{
            type:[String],
            required: true
        },
});

// title,description,startDate,endDate,discount

const prescription = mongoose.model("prescription", prescriptionSchema);
export default prescription;