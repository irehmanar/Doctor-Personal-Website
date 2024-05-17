// apiService.js
import axios from 'axios';

export const contactUs = async (contactData) => {
    try {
        console.log(contactData);
        const response = await axios.post('http://localhost:3333/Hospital/contactus', contactData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
