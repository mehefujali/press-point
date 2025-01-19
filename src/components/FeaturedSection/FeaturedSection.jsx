import FeatureRightSide from "../FeaturedRightSide/FeatureRightSide";

const FeaturedSection = () => {
  return (
    <div>
      <div className="container mx-auto grid lg:grid-cols-12 min-h-[2000px] my-10 relative ">
        <div className="lg:col-span-9 bg-red-100">
            
        </div>
        <div className="lg:col-span-3 sticky top-[61px]  h-fit">
          <div>
            <FeatureRightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
