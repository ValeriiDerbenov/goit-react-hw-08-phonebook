import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signupRequest = async body => {
  return await instance.post('/users/signup', body);
};
