 import axios from 'axios';

const api = axios.create({
    baseURL: 'https://thecatapi.com/'
})

export default api;