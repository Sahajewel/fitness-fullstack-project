import { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

export default function UsePayment() {
 const axiosSecure = UseAxiosSecure();
 const {user} = useContext(AuthContext)
 const {data: payments=[]} = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async()=>{
        const res = await axiosSecure.get(`/payment?email=${user?.email}`)
        return res.data
    }
 })
 return [payments]
}
