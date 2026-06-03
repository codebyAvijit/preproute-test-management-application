import axios from "axios";

import { STORAGE_KEYS } from "@/utils/constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Request Interceptor
 */
api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        STORAGE_KEYS.TOKEN
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 */
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response?.status === 401
    ) {
      localStorage.removeItem(
        STORAGE_KEYS.TOKEN
      );

      window.location.href =
        "/login";
    }

    return Promise.reject(error);
  }
);

export default api;