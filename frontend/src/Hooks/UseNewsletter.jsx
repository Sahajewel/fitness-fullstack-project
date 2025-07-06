import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';

export default function UseNewsletter() {
    const axiosSecure = UseAxiosSecure()
    const {data: newsLetter=[]} = useQuery({
        queryKey: ["newsLetter"],
        queryFn:async()=>{
            const result = await axiosSecure.get("/newsletter")
            return result.data
        }
    })
  return [newsLetter]
}
