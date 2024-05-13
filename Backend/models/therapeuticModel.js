import mongoose from 'mongoose';

const therapeuticPlanSchema = new mongoose.Schema({
    title: {
        type: String, 
        enum: ["Standard", "Silver", "Gold", "Platinum"],
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
    discount: { 
        type: Number, 
        required: true 
    },
});

const TherapeuticPlan = mongoose.model("TherapeuticPlan", therapeuticPlanSchema);
export default TherapeuticPlan;
