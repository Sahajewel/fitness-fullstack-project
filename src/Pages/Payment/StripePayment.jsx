import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)
export default function StripePayment({price, slot, classes, payment}) {
  return (
    <Elements stripe={stripePromise}>
        <CheckOutForm price={price} slot={slot} classes={classes} payment={payment} ></CheckOutForm>
    </Elements>
  )
}
