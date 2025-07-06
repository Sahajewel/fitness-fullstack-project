import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider'
import UseAxiosSecure from './UseAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function UseAdmin() {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data, "Admin Data")
            return res.data
        }
        
    })
    console.log(isAdmin, "isAdmin")
    return [isAdmin, isAdminLoading]
}
