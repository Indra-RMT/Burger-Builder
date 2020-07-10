import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-anto.firebaseio.com/'
});

export default instance;
