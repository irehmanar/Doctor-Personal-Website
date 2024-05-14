// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/appointment/getPlans';


export const fetchPlanData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.planNames;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};
