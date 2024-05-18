// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/adminDashboard/patientData';

export const fetchpatientData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};
