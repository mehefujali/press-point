import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Purchase = () => {
      const {state} = useLocation()
       const amount = state.amount
  return (
    <div className=" container mx-auto h-full w-full ">
      <div className=" mt-16">
        
        <Elements stripe={stripePromise}>
          <CheckOutForm amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default Purchase;
