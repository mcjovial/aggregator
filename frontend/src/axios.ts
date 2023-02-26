import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((request) => {
  const token = 123   //TODO:
  request.headers.Authorization = `Bearer ${token}`
})

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response && error.response.status === 401) {
    router.navigate('/login')
    return error
  }
})

export default axiosClient