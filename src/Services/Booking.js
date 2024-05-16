// apiService.js
import axios from 'axios';

export const createAppointment = async (appointmentData) => {
    try {
        console.log(appointmentData);
        const response = await axios.post('http://localhost:3333/appointment/createAppointment', appointmentData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
