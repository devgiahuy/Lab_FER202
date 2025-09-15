import { BACKEND_API_URL } from "../constants/api"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: BACKEND_API_URL,
    headers: { "Content-Type": "application/json" }
})

export default axiosInstance
