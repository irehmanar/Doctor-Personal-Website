import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({
    title: {
        type: String, 
        enum:["Standard","Silver","Gold","Platinum"],
        required: true,
        unique: true
    },
    description: { 
        type: String, 
        required: true 
    },
    duration: { 
        type: Number, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
});

// title,description,startDate,endDate,discount

const promotion = mongoose.model("promotion", promotionSchema);
export default promotion;