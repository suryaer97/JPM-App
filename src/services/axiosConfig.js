import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ''
});
axiosInstance.defaults.headers.common['Authorization'] = "Place Bearer token here ";
export default axiosInstance;
