import axios from 'axios';

const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await axios.post('http://localhost:3333/hospital/changePassword', {
      oldPassword,
      newPassword
    },{
        headers: {
          Authorization: `${localStorage.getItem('token')}`
        }
      });

    if (response.data.success) {
      console.log('Password changed successfully');
      return { success: true, message: 'Password changed successfully' };
    } else {
      console.log('Password change failed:', response.data.message);
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error('Error changing password:', error);
    return { success: false, message: error.response ? error.response.data.message : error.message };
  }
};

export default changePassword;
