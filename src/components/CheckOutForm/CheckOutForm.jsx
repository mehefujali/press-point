import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "./../../Hooks/useAuth";
import { PropTypes } from "prop-types";
import {  useNavigate } from "react-router-dom";
import usePremiumUser from "../../Hooks/usePremiumUser";

const CheckOutForm = ({ amount = 5 }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [loading,setLoading] = useState(false)
  const { user } = useAuth();
  const {refetchPremium} = usePremiumUser()
  const navigate = useNavigate()
  //  get client secret
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: amount })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [axiosSecure, amount]);

  // payment
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card,
    // });
    // if (error) {
    //   toast.error(error.message);
    // }
   
    // confirm payment
    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email,
          },
        },
      }
    );
    if (cardError) {
      console.log("errr", cardError);
      toast.error(cardError.message);
      setLoading(false)
    } else {
 
      if (paymentIntent.status === "succeeded"){
        
         const paymentInfo = {
           name: user.displayName ,
           email : user.email ,
           transactionId:  paymentIntent.id,
           amount: parseFloat(paymentIntent.amount / 100)
          
         }
         axiosSecure.post('/save-payment' , paymentInfo )
         .then(res => console.log(res.data))
        toast.success("Payment success")
        refetchPremium()
        navigate('/', { replace: true });
        setLoading(false)
      }
      refetchPremium()
      
    }
  };

  return (
    <div className=" w-11/12 lg:w-5/12  xl:w-4/12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="  p-10 bg-white shadow-md rounded"
      >
        <h1 className=" text-xl font-bold text-center mb-6">
          Your total payable amount is ${amount}
        </h1>
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
          disabled={!stripe || !clientSecret}
          className=" w-full"
        >
          <Button loading={loading} fullWidth className=" justify-center rounded bg-primary-color mt-11 ">
            Pay ${amount}
          </Button>
        </button>
      </form>
    </div>
  );
};

CheckOutForm.propTypes = {
  amount: PropTypes.number,
};

export default CheckOutForm;
