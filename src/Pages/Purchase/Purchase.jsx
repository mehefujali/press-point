import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
import { Navigate, useLocation } from "react-router-dom";
import usePremiumUser from "../../Hooks/usePremiumUser";
import Loader from "../../components/Loader/Loader";
import TestCard from "../../components/TestCard/TestCard";

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
      <h1 className=" text-center mt-6">FREE CARD</h1>
      <div className=" h-40 p-5 w-72  rounded-md text-[#bec4ce] bg-[#1F2937] mx-auto relative text-sm">
        <div className=" flex justify-between items-center">
        <h3 className=" text-[#bec4ce]  " >Michael Brown</h3>
        <img className="  w-12 border border-[#bec4ce83] px-2 rounded py-1" src="https://www.pngmart.com/files/22/Mastercard-Logo-PNG-HD.png" alt="" />
        </div>

        <TestCard/>
        <div className=" flex ">
        <h3 className=" text-[#bec4ce]  flex-1" >06/35</h3>
        <h3 className=" text-[#bec4ce] flex-1  pl-8 " >875</h3>

        </div>
      </div>
      <div className=" mt-16">
        <Elements stripe={stripePromise}>
          <CheckOutForm amount={amount||5} />
        </Elements>
      </div>
    </div>
  );
};

export default Purchase;
