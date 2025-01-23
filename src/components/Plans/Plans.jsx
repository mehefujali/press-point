import PlanCard from "../PlanCard/PlanCard";

const Plans = () => {
  return (
    <div className=" container mx-auto flex flex-col lg:flex-row w-11/12  gap-4 items-center justify-center ">
      {/* Free Plan  */}
      <PlanCard
        title={"short time plan"}
        price={5}
        features={[
          "Access to trending articles.",
          "Browse articles from all publishers.",
          "Limited access to archived content.",
          "Basic statistics on user activity.",
          "Standard user experience with ads.",
        ]}
        btnText="Upgrade to Short time plan" 
        time={1}
        timeName={'min'}
      />

      {/*  Standard Plan */}
      <PlanCard
        title={" Standard Plan"}
        price={10}
        features={[
          "Everything in the Free Plan.",
          "Ad-free browsing for a better experience.",
          "Access to more archived articles.",
          "Personalized news recommendations.",
          "Priority support for queries and issues.",
        ]}
        btnText="Upgrade to Standard" 
        fill={true}
        time={5}
        timeName={'day'}
      />
      {/* Premium Plan */}
      <PlanCard
        title={"Premium Plan"}
        price={15}
        features={[
          "Ad-free browsing for a seamless experience.",
          "Unlimited access to all archived articles.",
          "Priority access to exclusive content and breaking news.",
          
          "Early access to new features and premium tools.",
        ]}
        btnText="Go Premium"
        time={10}
        timeName={'day'}
      />
    </div>
  );
};

export default Plans;
