import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripePayment = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Payment error:', error);
    } else {
      console.log('Payment successful:', paymentMethod);
      handlePayment(paymentMethod); // Pass the payment method to handlePayment function
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement options={{}} />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default StripePayment;
