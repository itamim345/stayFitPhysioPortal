import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from '../Redux/alertReducers';

export default function CheckoutForm({ appointmentData }) {
  const consaltancyFees = appointmentData?.therapistInfo?.consaltancyFees;
  const appointId = appointmentData?._id;
  const email = appointmentData?.userInfo?.email;
  const name = appointmentData?.userInfo?.name;
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch()

  console.log(appointId);

  const [clientSecret, setClientSecret] = useState("");
  const abcd = async () => {
    const response = await axios.post(
      "/api/user/create-payment-intent",
      {
        consaltancyFees: consaltancyFees,
      },
    );
    setClientSecret(response?.data?.clientSecret);
  }

  const ChangeDBPaymentStatus = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/change-appointment-payment-info-by-id",
        {
          appointId: appointId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    abcd();
  }, [consaltancyFees]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    
    dispatch(showLoading());

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //toast.error(error.message);
      console.log(error)
    } else {
      dispatch(hideLoading())
      toast.success("Card Accepted!");
      console.log("[PaymentMethod]", paymentMethod);
    }
    //Payment Intent
    const { paymentIntent, error: IntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if(IntentError){
      toast.error(IntentError);
    }else {
      dispatch(hideLoading());
      ChangeDBPaymentStatus();
      toast.success("Payment Succesfully Done!)");
    }

  };
  return (
    <div>
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
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-danger px-4"
        >
          Pay {consaltancyFees}
        </button>
      </form>
    </div>
  );
}
