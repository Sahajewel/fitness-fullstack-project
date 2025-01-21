import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'

import UsePayment from '../../Hooks/UsePayment';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

export default function CheckOutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const {user} = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("")
    const axiosSecure = UseAxiosSecure()
const [payments] = UsePayment()
console.log(payments)
const totalPrice = payments.reduce((prev, current)=>prev + current.price, 0)
if(totalPrice > 0){
    useEffect(()=>{
        axiosSecure.post("/create-checkout-session", {price: totalPrice})
        .then((res)=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])
}
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
        const {paymentIntent, error: cofirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonumous"
                }
            }
        })
        if(cofirmError){
            console.log("confirm error", cofirmError)
        }
        else{
            console.log("payment intent", paymentIntent)
            if(paymentIntent.status === "succeeded"){
                console.log(paymentIntent.id)
                setTransactionId(paymentIntent.id)
            }
        }

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
                />
                <button className=' bg-blue-600 mt-8 px-4 py-2 text-white' type="submit" disabled={!stripe || !clientSecret}>
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
