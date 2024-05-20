// apiService.js
import axios from 'axios';

export const addPrescription = async (prescriptionData) => {
    try {
        console.log(prescriptionData);
        const response = await axios.post('http://localhost:3333/prescription/addPrescription', prescriptionData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
