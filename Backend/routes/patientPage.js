// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/adminDashboard/dashboard';

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};
