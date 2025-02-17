import { Card } from "flowbite-react";
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { Button } from "flowbite-react";
import { useState } from "react";
export default function TrainerBooked() {
    const booked = useLoaderData();
    console.log(booked)
    const { slot } = useParams();
    const [plan, setPlan] = useState({});
    console.log(plan)
    console.log(booked)
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold'>Trainer Booked</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-white p-20 my-10 text-black">
                    <h1 className="mb-2"><span className="font-bold">Trainer:</span> <span className="text-xl">{booked.name}</span></h1>
                    <div className="flex flex-col gap-2 mt-4 mb-4">
                        <h1><span className="font-bold">Slot:</span> {slot}</h1>
                    </div>
                    <p><span className='font-bold mb-2'>Class Name:</span> {booked.trainerClasses?.map((classes, ind) => <li key={ind}>{classes.className}</li>)}</p>

                </div>
                <p className="md:flex sm:space-y-4 md:space-y-0 gap-10 my-10 ">{booked.packages.map((packag, ind) => <Card key={ind} className='max-w-sm'>
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{packag.packageName} plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">{packag.price}</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{packag.duration}</span>
                    </div>
                    <ul className="my-7  space-y-5">
                        <li className="flex   space-x-3">
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
                        {/* <li className="flex space-x-3">
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
                                {packag.details?.map((detail, ind) => <li key={ind}>{detail}</li>)}
                            </span>
                        </li> */}
                    </ul>


{/* 
                    <button onClick={() => setPlan({ price: packag.price, name: packag.packageName })}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                        Choose plan
                    </button> */}
                    {/* {
                        plan.name ? (
                            <Link to={`/payment/${booked._id}/${plan.price}/${plan.name}/${slot}`}  ><Button className="my-4" color="gray">Join Now</Button></Link>
                        )
                            :
                            <button onClick={() => setPlan({ price: packag.price, name: packag.packageName })}
                                type="button"
                                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                            >
                                Choose plan
                            </button>
                    } */}
                    <button
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:brightness-125 p-3 duration-300 text-white"
                        color="blue"
                        onClick={() => setPlan({ price: packag.price, name: packag.packageName })} // Example for Basic Plan
                    >
                        Choose Plan
                    </button>


                </Card>)}</p>

            </div>
            {/* <div className="flex justify-center pb-5">
                <Link to={`/payment/${booked._id}/${plan.price}/${plan.name}/${slot}`}  ><Button className="my-4" color="gray">Join Now</Button></Link>

             </div> */}
            {/* <Button
                        className="my-4"
                        color="gray"
                        onClick={() => {
                            if (!plan.name) {
                                alert('Please select a plan before proceeding!');
                            } else {
                                // Redirect to the payment route manually
                                window.location.href = `/payment/${booked._id}/${plan.price}/${plan.name}/${slot}`;
                            }
                        }}
                    >
                        Join Now
                    </Button> */}
            <div className="flex gap-4 mx-auto justify-center pb-10 ">
                {/* Choose Plan Button */}

                {/* Join Now Button */}
                <Button
                    color="gray"
                    onClick={() => {
                        if (!plan.name) {
                            alert('Please select a plan before proceeding!');
                        } else {
                            // Redirect to the payment route manually
                            window.location.href = `/payment/${booked._id}/${plan.price}/${plan.name}/${slot}`;
                        }
                    }}
                >
                    Join Now
                </Button>
            </div>

        </div>
    )
}
