import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Loader from "../../Shared/Loader/Loader";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transitionId, setTransitionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { bookPrice, email, name, _id, bookID } = order;
  useEffect(() => {
    setLoading(true);
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ bookPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false);
      });
  }, [bookPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      console.log(error);
    } else {
      setCardError("");
      setLoading(false);
    }
    setSuccess("");
    setLoading(true);
    const { paymentIntent, error: confrimError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confrimError) {
      setCardError(confrimError.message);
      setLoading(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      //store data
    
      const payment = {
        bookPrice,
        transitionId: paymentIntent.id,
        email,
        productId: bookID,
        orderId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess(`Congress Your Payment Completed`);
            setTransitionId(paymentIntent.id);
            Swal.fire(
              "Congress Your Payment Completed!",
              `Your Payment Id is: ${paymentIntent.id}`,
              "success"
            );
            navigate("/dashboard/my-orders");
          }
        });
    }
    console.log(paymentIntent);
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Proceed Payment -Barrel Of Books</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {loading && <Loader />}
        <button
          className="btn btn-sm text-white btn-primary mt-10"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          Confirm Payment
        </button>
      </form>
      <p className="text-red-600 my-3">{cardError}</p>
      {success && (
        <div>
          <p className="text-primary">{success}</p>
          <p>
            Your Transiton Id is:{" "}
            <span className="font-bold">{transitionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
