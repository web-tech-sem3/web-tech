import axios from 'axios';
const baseURL = 'http://localhost:3001/api/user';

const signUp = async object => {
  const res = await axios.put(baseURL, object);
  return res.data;
};

export default { signUp };
