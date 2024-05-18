// apiService.js
import axios from 'axios';

export const AcceptAppointment = async (Id) => {
    try {
        console.log(Id);
        const response = await axios.post('http://localhost:3333/adminDashboard/acceptAppointment', Id);
        return response;
    } catch (error) {
        throw error.response;
    }
};
