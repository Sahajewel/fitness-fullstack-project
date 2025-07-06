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
        <div className='pb-20 w-10/12 mx-auto shadow-2xl'>
            <h1 className='text-center py-10  text-4xl font-bold  pt-40 underline'>Payment Details</h1>
            <div className='py-10'>
                <Card className="max-w-sm flex justify-center mx-auto">
                    <h5 className="text-2xl font-bold tracking-tight ">
                        Trainer: {payment.name}
                    </h5>
                    <p className="font-normal ">

                    </p>
                    <p className="font-normal ">
                        Name: {user?.displayName}
                    </p>
                    <p className="font-normal">
                        Email: {user?.email}
                    </p>
                    <p>Price: ${price}</p>
                    <p>Slot: {slot}</p>
                    <p>Package: {name}</p>
                     
                </Card>
            </div>
            <div className=' mx-auto  p-20 '>
                <StripePayment price={price} slot={slot} classes={classes} trainer={payment.name} payment={payment}></StripePayment>
            </div>
           
        </div>
    )
}
