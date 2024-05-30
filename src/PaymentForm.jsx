/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
 import PaymentCompleted from './PaymentCompleted'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'; // Import required components
const KEY =
  "pk_test_51OqpN8JVz8zGQIqo5QMKcM3KmOQnjEjwpCxMmXbqWFYkNBJyyU19IGLB31Jv2Q71Tqg56MtOPY3umUmkiaxNoxYr00pbjSn3TT";


const stripePromise = loadStripe(KEY); // Replace with your publishable key

const PaymentForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [error, setError] = useState(null); // To store any payment errors
  const stripe = useStripe(); // Get Stripe instance from context
  const elements = useElements(); // Get Stripe Elements instance from context

  const [products, setProducts] = useState([
    {
      name: "Go FullStack with KnowledgeHut",
      price: 500,
      productOwner: "KnowledgeHut",
      description:
        "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
      quantity: 1,
    },
    {
    name: "Go FullStack with KnowledgeHut",
    price: 500,
    productOwner: "KnowledgeHut",
    description:
      "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
    quantity: 1,
  }
  ]);


  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch('http://localhost:5000/api/checkout/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products }),
      });
      const data = await response.json();
      setClientSecret(data.sessionId);
    };

    fetchClientSecret();
  }, [products]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Handle the case where Stripe or Elements are not yet loaded
      console.error('Stripe or Elements not yet loaded');
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error);
      setError(result.error);
    } else {
      setPaymentSuccessful(true);
      setError(null); // Clear any previous errors
    }
  };

  return (
<div > {/* Pass your Stripe instance here */}
  <form onSubmit={handleSubmit}>
    <CardElement options={{
      style: {
        base: {
          // ... your styling options
        },
      },
    }} />
    <button type="submit" disabled={!stripe}>Pay Now</button>
    {paymentSuccessful && <PaymentCompleted />} {/* Display PaymentCompleted component on success */}
    {error && <p>Payment Error: {error.message}</p>} {/* Display error message if any */}
  </form>
</div>
  );
};

export default PaymentForm;
