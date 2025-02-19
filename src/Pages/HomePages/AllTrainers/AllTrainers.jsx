import React, { useContext } from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import AllTrainersCard from './AllTrainersCard'
import { AuthContext } from '../../../Provider/AuthProvider';
import {Helmet} from "react-helmet"
export default function AllTrainers() {
    const [allTrainers] = UseAllTrainers();
    const {user} = useContext(AuthContext)
    return (
        <div className='w-11/12 mx-auto md:px-10 pt-28 mt-10 mb-20 pb-16 shadow-2xl bg-white text-black dark:bg-gray-900 dark:text-white'>
           <Helmet>
            <title>Home | all-trainers</title>
           </Helmet>
            <h1 className='text-center py-10  text-4xl font-bold'>All trainers: {allTrainers.length}</h1>
            <div className='grid justify-center gap-10 p-10 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allTrainers.map((allTrainer) => <AllTrainersCard key={allTrainer._id} allTrainer={allTrainer}></AllTrainersCard>)
                }
            </div>
        </div>
    )
}
