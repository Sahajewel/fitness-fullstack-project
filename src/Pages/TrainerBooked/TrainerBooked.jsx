import { Card } from "flowbite-react";
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { Button } from "flowbite-react";
import { useState } from "react";
export default function TrainerBooked() {
    const booked = useLoaderData();
    const {slot} = useParams();
    const [plan , setPlan] = useState("");
    console.log(booked)
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold'>Trainer Booked</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-purple-700 p-20 my-10 text-white">
                    <h1 className="mb-2"><span className="font-bold">Trainer:</span> <span className="text-xl">{booked.name}</span></h1>
                    <div className="flex flex-col gap-2 mt-4 mb-4">
                        {/* {booked.availableSlots.map((slot, index) => (
                            <button key={index} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 text-sm text-white">  <button


                            >
                                {slot}
                            </button></button>
                        ))} */}
                        <h1>{slot}</h1>
                    </div>
                    <p><span className='font-bold mb-2'>Class Name:</span> {booked.trainerClasses.map((classes, ind) => <li key={ind}>{classes.className}</li>)}</p>
                    <Link to={`/payment/${booked._id}/${plan}`}><Button className="my-4" color="info">Join Now</Button></Link>
                </div>
                <p className="md:flex  gap-10 my-10 ">{booked.packages.map((packag, ind) => <Card key={ind} className='max-w-sm'>
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{packag.packageName} plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">{packag.price}</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{packag.duration}</span>
                    </div>
                    <ul className="my-7  space-y-5">
                        <li className="flex  space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{packag.description}</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                {packag.details.map((detail, ind) => <li key={ind}>{detail}</li>)}
                            </span>
                        </li>
                    </ul>
                    <button onClick={()=>setPlan(packag.price)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                        Choose plan
                    </button>
                    
                </Card>)}</p>
                
            </div>
        </div>
    )
}
