import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URl || 'http://localhost:3001/api'
});

export default instance;