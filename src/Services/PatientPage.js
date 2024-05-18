// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/adminDashboard/patientPage';

export const fetchpatientPageData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching patientPage data:', error);
    throw error;
  }
};
