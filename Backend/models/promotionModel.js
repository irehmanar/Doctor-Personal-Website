import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({

    NumberofPlans: {
        type: Number,
        required: true
    },
    Plans: [{
    NameofPlan: {
        type: String,
        required: true,
        unique: true,
    },
    Description: {
        type: String,
        required: true,
    },
    NumberofSubPlans:{
        type: Number,
        required: true,
    },
    SubPlans: [{
        month: {
            type: Number,
            required: true,
        },
        numberOfDietPlans: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        }
    }]}]
});
const promotion = mongoose.model("promotion", promotionSchema);
export default promotion;