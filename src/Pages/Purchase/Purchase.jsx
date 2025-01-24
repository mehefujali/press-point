import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
import { Navigate, useLocation } from "react-router-dom";
import usePremiumUser from "../../Hooks/usePremiumUser";
import Loader from "../../components/Loader/Loader";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Purchase = () => {
  const { state } = useLocation();
  const amount = state?.amount||5;
  const {isPremiumUser,isPremiumLoading} = usePremiumUser()
  if(isPremiumLoading){
    return <Loader/>
  }
  if(isPremiumUser){
    return <Navigate to="/subscription" replace/>
  }
  return (
    <div className=" container mx-auto h-full w-full ">
      <div className=" mt-16">
        <Elements stripe={stripePromise}>
          <CheckOutForm amount={amount||5} />
        </Elements>
      </div>
    </div>
  );
};

export default Purchase;
