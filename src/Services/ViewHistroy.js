import axios from 'axios';

const token = localStorage.getItem('token');

axios.get('https://api.example.com/endpoint', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  // src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3333/appointment/getAppointment';

export const fetchAppointmentData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Appointment data:', error);
    throw error;
  }
};
