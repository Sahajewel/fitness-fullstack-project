import axios from 'axios'


const axiosPublic = axios.create({
    baseURL: 'https://assignment-12-server-black-kappa.vercel.app'
})
export default function useAxiosPublic() {
  return  axiosPublic
}

