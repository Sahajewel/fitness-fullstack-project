import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import UseAxiosSecure from './UseAxiosSecure'
import { AuthContext } from '../Provider/AuthProvider';

export default function UseBookedTrainer() {
    const axiosPublic = UseAxiosSecure();
    const {user} = useContext(AuthContext)
 const {data: bookedTrainer=[]} = useQuery({
    queryKey: ["bookedTrainer", user?.email],
    enabled: !!user?.email,
    queryFn: async()=>{
        const res = await axiosPublic.get(`/history?email=${user?.email}`)
        return res.data
    }
 })
 return [bookedTrainer]
}
