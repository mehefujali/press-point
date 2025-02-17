import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import usePremiumUser from "../../Hooks/usePremiumUser";

const ArticleCard = ({ news}) => {
  const {isPremiumUser} = usePremiumUser()
  return (
    <div>
      <div className={` ${news.isPremium&&"md:border-r-4 border-r-golden-color"} text-start shadow-md flex flex-col md:flex-row bg-white  rounded relative overflow-hidden border-2 `}>
        <div className="text-sm absolute right-2 top-1 ">
          {/* <Chip
                
                  color="red"
                  size="sm"
                  value="Trending"
                  className="bg-white text-red-800"
                  icon={
                    <span className="mx-auto mt-1 block h-2 w-2 rounded-full  bg-red-800 content-['']" />
                  }
                /> */}
        </div>

        <img className="   w-full md:w-64 xl:w-80" src={news?.image} alt="" />
        <div className="p-3 flex gap-2  flex-col lg:gap-1  justify-between ">
          
            <h3 className=" font-semibold text-sm md:text-xl flex items-end  flex-col lg:flex-row ">
              {news?.title}{" "}
              {news.isPremium && (
                <span
                  className=" text-sm font-normal ml-4 text-golden-color border-2 rounded-full border-golden-color  px-2 text-nowrap flex items-center gap-1 
          "  
                >
                  
                  {"👑Premium"}
                </span>
              )}
            </h3>
          

          <div className=" flex items-center gap-1">
            <img
              className="h-6 w-6 rounded-full"
              src={news.publisher.logo}
              alt=""
            />

            <p className=" text-nowrapa text-xs md:text-sm font-medium ">
              {news?.publisher?.name}
            </p>
          </div>
          <p className=" flex flex-wrap gap-2">
            {news?.tags?.map((tag, idx) => (
              <p
                key={idx}
                className=" bg-primary-color bg-opacity-10 text-primary-color my-1 px-1 rounded-sm text-xs md:text-sm"
              >
                #{tag}
              </p>
            ))}
          </p>
          <p className=" text-xs md:text-sm text-gray-600">
            {news?.description?.slice(0, 200)}...
          </p>
         
            <Button
             disabled={news.isPremium && !isPremiumUser}
              size="sm"
              variant="text"
              className="flex rounded items-center gap-2 p-0 w-fit"
            >
               <Link  to={`/article-details/${news._id}`} className=" px-3 py-1 flex rounded items-center gap-2 w-fit ">
              Read More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              </Link>
            </Button>
          
        </div>
      </div>
    </div>
  );
};
ArticleCard.propTypes = {
  news: PropTypes.object,
  premium: PropTypes.string,
};
export default ArticleCard;
