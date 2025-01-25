import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'

import UsePayment from '../../Hooks/UsePayment';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

export default function CheckOutForm({ price, slot, classes,payment }) {
    console.log(payment)
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [isCardComplete, setIsCardComplete] = useState(false);
    const axiosSecure = UseAxiosSecure()
    const [payments] = UsePayment()
    console.log(payments)
    const totalPrice = payments.reduce((prev, current) => prev + current.price, 0)

    const paymentInfo = {
        payment: payment.name,
        classes: classes,
        name: user?.displayName,
        email: user?.email,
        price: parseFloat(price),
        slot: slot

    }

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-checkout-session", { price: price })
                .then((res) => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
                .catch((error) => {
                    console.error("Error creating checkout session:", error);
                });
        }
    }, [axiosSecure, totalPrice]);


    const handleCardChange = (event) => {
        setError(event.error ? event.error.message : ""); // Set error message if any
        setIsCardComplete(event.complete); // Update card completion state
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("erroe", error)
            setError(error.message)
        }
        else if (paymentMethod) {
            console.log("payment", paymentMethod)
            setError("")
        }
        const { paymentIntent, error: cofirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonumous"
                }
            }
        })
        if (cofirmError) {
            console.log("confirm error", cofirmError)
        }
        else {
            console.log("payment intent", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log(paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }
        const res = await axiosSecure.post("/history", paymentInfo)
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
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    onChange={handleCardChange} 
                />
                <button className=' bg-blue-600 mt-8 px-4 py-2 text-white' type="submit" disabled={!stripe || !clientSecret || !isCardComplete}>
                    Pay
                </button>
                <p className='text-red-500 mt-2'>{error}</p>
                {
                    transactionId && <p> Your Transaction Id: {transactionId}</p>
                }
            </form>
        </div>
    )
}
