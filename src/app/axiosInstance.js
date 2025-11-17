// src/app/axiosInstance.js
import axios from "axios";
import { BASE_API } from "../app/Api";

const axiosInstance = axios.create({
    baseURL: BASE_API,
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically attach token
axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token =
                localStorage.getItem("token")
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
