import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "https://nobovabna.com/",
});

export default api;
