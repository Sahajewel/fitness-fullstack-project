import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

export default function UseTrainer() {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: isTrainer, isPending: isTrainerLoading} = useQuery({
        queryKey: [user?.email, "isTrainer"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/trainer/${user?.email}`)
            console.log(res.data, "trainer data")
           return res.data
        }
    })
  console.log(isTrainer, "Trainer Route");
  return [isTrainer, isTrainerLoading]
}
