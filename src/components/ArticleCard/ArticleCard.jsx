import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const ArticleCard = ({ news }) => {
  return (
    <div>
      <div className=" text-start shadow-md flex flex-col md:flex-row bg-white  rounded relative overflow-hidden border-2 ">
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
        <img
          className=" lg:h-40 h-48 xl:h-48  w-full md:w-64 xl:w-80"
          src={news?.image}
          alt=""
        />
        <div className="p-3 flex flex-col lg:gap-1  justify-between h-[178px]">
          <h3 className=" font-semibold text-sm ">{news?.title}</h3>
          <p className=" text-nowrapa text-xs font-medium ">
            {news?.publisher}
          </p>
          <p className=" text-xs text-gray-600">
            {news?.description.slice(0, 200)}...
          </p>
          <Link className=" w-fit">
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
ArticleCard.propTypes = {
  news: PropTypes.object,
};
export default ArticleCard;
