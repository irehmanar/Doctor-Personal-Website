import axios from "axios"


const API_URL = 'http://localhost:3333/hospital/updatepatient';

export const fetchUpdateData = async (infoData) => {
  try { 
    const response = await axios.put(API_URL,infoData,

      {
        headers: {
          Authorization:localStorage.getItem("token"),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error updating info data:', error);
    throw error;
  }
};
