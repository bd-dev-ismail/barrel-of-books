import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise);
const Payment = () => {
    const order = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
      return <Loader/>
    }
    return (
      <div>
        <h3 className="text-3xl font-semibold my-5 text-center">
          Procced Too <span className="text-primary"> Payment</span>
        </h3>
        <p className="text-center text-xl font-semibold">
          Your are Paying amount is{" "}
          <span className="text-primary">${order.bookPrice}</span> for book name
          is {order.bookName}
        </p>
        <div className="w-96 text-center mx-auto my-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;