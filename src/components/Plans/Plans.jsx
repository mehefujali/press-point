import PlanCard from "../PlanCard/PlanCard";

const Plans = () => {
  return (
    <div className=" container mx-auto flex flex-col md:flex-row w-11/12 gap-4 items-start justify-center">
      {/* Free Plan  */}
      <PlanCard
        title={"Free Plan"}
        price={0}
        features={[
          "Access to trending articles.",
          "Browse articles from all publishers.",
          "Limited access to archived content.",
          "Basic statistics on user activity.",
          "Standard user experience with ads.",
        ]}
        btnText="Start for Free"
      />

      {/*  Standard Plan */}
      <PlanCard
        title={" Standard Plan"}
        price={4.99}
        features={[
          "Everything in the Free Plan.",
          "Ad-free browsing for a better experience.",
          "Access to more archived articles.",
          "Personalized news recommendations.",
          "Priority support for queries and issues.",
        ]}
        btnText="Upgrade to Standard" 
        fill={true}
      />
      {/* Premium Plan */}
      <PlanCard
        title={"Premium Plan"}
        price={9.99}
        features={[
          "Ad-free browsing for a seamless experience.",
          "Unlimited access to all archived articles.",
          "Priority access to exclusive content and breaking news.",
          
          "Early access to new features and premium tools.",
        ]}
        btnText="Go Premium"
      />
    </div>
  );
};

export default Plans;
