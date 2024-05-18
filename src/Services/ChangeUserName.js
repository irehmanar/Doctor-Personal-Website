// src/api.js
import axios from 'axios';

export const updateUsername = async (newUsername) => {
  try {
    const response = await axios.put('http://localhost:3333/hospital/changeUsername', { username: newUsername },{
        headers: {
          'Authorization': `${localStorage.getItem('token')}`
        }
      });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};
