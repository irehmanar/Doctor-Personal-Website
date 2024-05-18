import axios from 'axios';

const API_URL = 'http://localhost:3333/appointment/getSubPlans';

export const fetchSubPlanData = async (planId) => {
  try {
    const response = await axios.get(`${API_URL}/${planId}`);
    // console.log(response.data.subPlans)
    return response.data.subPlans;
  } catch (error) {
    console.error('Error fetching sub-plan data:', error);
    throw error;
  }
};
