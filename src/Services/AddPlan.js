// apiService.js
import axios from 'axios';

export const addPlan = async (PlanData) => {
    try {
        console.log(PlanData);
        const response = await axios.post('localhost:3333/promotion/createPromotion', PlanData);
        return response;
    } catch (error) {
        throw error.response;
    }
};
