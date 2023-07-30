import axios from "@/utils/axios";

export async function login(data, config) {
  const res = await axios.post(`/auth/login`, data, config);
  return res.data;
}
