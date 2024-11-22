import axios from 'axios';

// Example code
export const getUsersProfile = async () => {
  const response = await axios.get('/users/profile');
  return response.data;
};
