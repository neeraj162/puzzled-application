import axios from 'axios';

export default axios.create({
    // backend url
    baseURL: "https://puzzled-backend.onrender.com",
    // baseURL: "http://localhost:3500",
});