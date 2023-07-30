import axios from "axios";
import store from "@/store";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = store.state?.auth?.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (!config.params) {
      config.params = {}
    }
    config.params.timestamp = Math.floor(new Date() / 1000)
    return config;
  },
  (error) => error
);

export default instance;
