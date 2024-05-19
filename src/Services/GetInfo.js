import axios from "axios"


const API_URL = 'http://localhost:3333/hospital/getUserinfo';

export const fetchAppointmentData = async () => {
  try {
    const response = await axios.get(API_URL,

      {
        headers: {
          Authorization:localStorage.getItem("token"),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Appointment data:', error);
    throw error;
  }
};
