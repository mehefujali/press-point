import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const FeaturedCard = ({news}) => {
      return (
            <div>
                 <div className=" text-start shadow-md  rounded relative  border-2 h-full">
              <div className="text-sm absolute right-2 top-1 ">
                
              </div>
              <img
                className="  lg:h-40 xl:h-48 w-full"
                src={news?.image}
                alt=""
              />
              <div className="p-3 flex flex-col lg:gap-1  justify-between ">
                <h3 className=" font-semibold text-sm ">{news?.title}</h3>
                <div className=" flex items-center gap-1">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={news?.publisher?.photo}
                    alt=""
                  />
                  <p className=" text-nowrapa text-xs font-medium ">
                    {news?.publisher?.name}
                  </p>
                </div>
                <p className=" text-xs text-gray-600">
                  {news?.description?.slice(0, 100)}...
                </p>
                <Link to={`/article-details/${news?._id}`} className=" w-fit">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex rounded items-center gap-2"
                  >
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
                  </Button>
                </Link>
              </div>
            </div> 
            </div>
      );
};

FeaturedCard.propTypes = {
      news : PropTypes.object.isRequired
}

export default FeaturedCard;