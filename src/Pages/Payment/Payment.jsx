import React, { useContext, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'


import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Card } from 'flowbite-react';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import StripePayment from './StripePayment';
export default function Payment() {
    const payment = useLoaderData();
    console.log(payment)
    const { price, name, slot } = useParams();
    const axiosSecure = UseAxiosSecure();
    const { user } = useContext(AuthContext);
    const classes = payment.expertise;
    console.log(classes)
    const paymentInfo = {
        trainer: payment.name,
        name: user?.displayName,
        email: user?.email,
        price: parseFloat(price),
        packageName: name,
        slot: slot,
        classes: classes
    }
    const {
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const res = await axiosSecure.post('/payment', paymentInfo)
        console.log(res.data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div className='pb-20'>
            <h1 className='text-center py-10 text-white text-4xl font-bold'>Payment Details</h1>
            <div className='py-10'>
                <Card className="max-w-sm flex justify-center mx-auto">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Trainer: {payment.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">

                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Name: {user?.displayName}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Email: {user?.email}
                    </p>
                    <p>Price: ${price}</p>
                    <p>Slot: {slot}</p>
                    <p>Package: {name}</p>

                </Card>
            </div>
            <div className='bg-white mx-auto  p-20 '>
                <StripePayment></StripePayment>
                <form className='mt-8' onSubmit={handleSubmit(onSubmit)}>
                    <Button type='submit' className=''>
                        Pay
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </form>
            </div>
           
        </div>
    )
}
