/* The code snippet provided is a JavaScript module that defines a function `fetchDashboardData`
responsible for fetching data from a specific API endpoint using Axios, a popular HTTP client
library. Here's a breakdown of what the code does: */
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
