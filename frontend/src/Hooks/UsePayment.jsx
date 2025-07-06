import { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

export default function UsePayment() {
    const {user} = useContext(AuthContext)
 const axiosSecure = UseAxiosSecure();
 const {data: payments=[]} = useQuery({
    queryKey: ["payments"],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/histo`)
        return res.data
    }
 })
 return [payments]
}
