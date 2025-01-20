import LatestNewsCard from "../LetestNewsCard/LatestNewsCard";
import SecendSuggestedArticle from "../SecendSuggestedArticle/SecendSuggestedArticle";
import SuggestedArticle from "../SuggestedArticle/SuggestedArticle";

const FeaturedLeftSide = () => {
  return (
    <div>
      <div>
        <div>
          <h3 className="  px-2 text-xl font-bold  border-l-4 border-red-500">
            Featured Post
          </h3>
          <LatestNewsCard></LatestNewsCard>
        </div>
        {/* Suggested Article Sections  */}
        <div>
                <SuggestedArticle/>
        </div>
        <div>
          <SecendSuggestedArticle/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLeftSide;
