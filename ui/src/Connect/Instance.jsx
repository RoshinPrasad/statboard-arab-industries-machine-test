import axios from 'axios';


// Backend server is running on localhost:3001
const instance = axios.create({
  baseURL: 'http://localhost:3001/api', 
});

export default instance;
