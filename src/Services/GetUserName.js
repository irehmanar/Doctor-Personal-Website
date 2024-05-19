// api.js
import axios from 'axios';

export const fetchUsername = async (token) => {
  try {
    const response = await axios.get('http://localhost:3333/hospital/getUsername', {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`,
      },
    });
    // console.log("UserName", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching username:', error);
    throw error;
  }
};
