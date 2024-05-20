// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/appointment/getappointment';

// Function to get the token (e.g., from localStorage)
const getToken = () => {
  return localStorage.getItem('token'); // Replace with your token retrieval logic
};

export const fetchAppointmentData = async () => {
  const token = getToken();

  try {
    const response = await axios.get(API_URL, {
      headers: {
        'authorization': token,
      },
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching Appointment data:', error);
    throw error;
  }
};
