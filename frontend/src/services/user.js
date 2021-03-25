import axios from 'axios';
const baseURL = 'https://u-table.herokuapp.com/api/user';

const signUp = async object => {
  const res = await axios.post(baseURL, object);
  return res.data;
};

const changePassword = async object => {
  const res = await axios.put(`${baseURL}/password`, object);
  return res.data;
};

const putTarget = async object => {
  const res = await axios.put(`${baseURL}/target`, object);
  return res.data;
};
const putTodo = async object => {
  const res = await axios.put(`${baseURL}/todo`, object);
  return res.data;
};
const putSocials = async object => {
  const res = await axios.put(`${baseURL}/social`, object);
  return res.data;
};
const getTodo = async userName => {
  const res = await axios.get(`${baseURL}/todo/${userName}`);
  console.log(res.data);
  return res.data;
};
export default {
  signUp,
  putTarget,
  putTodo,
  putSocials,
  getTodo,
  changePassword,
};
