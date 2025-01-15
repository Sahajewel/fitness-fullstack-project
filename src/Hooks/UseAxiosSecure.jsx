import axios from "axios"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
export default function UseAxiosSecure() {
  return  axiosSecure
}
