import axios from "axios";

export const axiosInstance = axios.create({baseURL: "http://localhost:3000", headers: {
    "Content-Type": "application/json",
}, withCredentials: true});
export const axiosRefresh = axios.create({baseURL: "http://localhost:3000"});