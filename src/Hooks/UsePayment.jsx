import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function UsePayment() {
 const axiosSecure = UseAxiosSecure();
 const {data: payments=[]} = useQuery({
    queryKey: ["payments"],
    queryFn: async()=>{
        const res = await axiosSecure.get("/payment")
        return res.data
    }
 })
 return [payments]
}
