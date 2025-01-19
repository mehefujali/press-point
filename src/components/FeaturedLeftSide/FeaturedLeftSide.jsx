import LatestNewsCard from "../LetestNewsCard/LatestNewsCard";

const FeaturedLeftSide = () => {
  return (
    <div>
      <h3 className="  px-2 text-xl font-bold  border-l-4 border-red-500">
        Featured Post
      </h3>
      <div>
        <div>
          <LatestNewsCard></LatestNewsCard>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLeftSide;
