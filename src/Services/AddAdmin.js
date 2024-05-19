import axios from 'axios';

const addAdmin = async (username, email, password) => {
  try {
    const response = await axios.post('http://localhost:3333/hospital/addadmin', {
      username: username,
      email: email,
      password: password
    });

    return response.data; // This will contain the message from the server
  } catch (error) {
    throw error; // Throw the error for handling in the component
  }
};

export default addAdmin;
