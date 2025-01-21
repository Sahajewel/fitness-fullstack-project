import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)
export default function StripePayment() {
  return (
    <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
    </Elements>
  )
}
