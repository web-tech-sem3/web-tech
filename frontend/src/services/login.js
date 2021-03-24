import axios from 'axios';
const baseURL = 'http://localhost:3001/api/login';

const login = async object => {
  if(!object) return
  const res = await axios.post(baseURL, object);
  console.log("jsoefj")
  return res.data;
};

export default { login };
