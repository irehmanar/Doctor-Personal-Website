// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/adminDashboard/viewAppointment';


export const fetchAppointmentData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data.allAppointments)
    return response.data.allAppointments;
  } catch (error) {
    console.error('Error fetching appointmrnt data:', error);
    throw error;
  }
};
