import axios from 'axios';
const baseURL = 'http://localhost:3001/api/login';

const login = async object => {
  console.log('inside');
  const res = await axios.post(baseURL, object);
  console.log(res.data);
  return res.data;
};

export default { login };
