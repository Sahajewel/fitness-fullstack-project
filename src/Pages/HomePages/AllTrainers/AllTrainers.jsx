import React from 'react'
import UseAllTrainers from '../../../Hooks/UseAllTrainers'
import AllTrainersCard from './AllTrainersCard'

export default function AllTrainers() {
    const [allTrainers] = UseAllTrainers()
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold'>all trainers: {allTrainers.length}</h1>
            <div className='grid justify-center gap-10 p-10 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allTrainers.map((allTrainer) => <AllTrainersCard key={allTrainer._id} allTrainer={allTrainer}></AllTrainersCard>)
                }
            </div>
        </div>
    )
}
