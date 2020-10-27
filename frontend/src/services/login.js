import axios from 'axios';
const baseURL = 'http://localhost:3001/api/login';

const login = async object => {
  const res = await axios.post(baseURL, object);
  console.log('inside axios');
  return res.data;
};

export default { login };
