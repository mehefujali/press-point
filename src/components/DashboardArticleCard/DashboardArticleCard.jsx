import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DashboardArticleCard = ({ news }) => {
  return (
    <div>
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
          <img className="  w-full md:w-64 xl:w-80" src={news?.image} alt="" />
          <div className="p-3 flex gap-2  flex-col lg:gap-1  justify-between ">
            <h3 className=" font-semibold text-sm md:text-xl flex items-center">
              {news?.title}{" "}
            </h3>

            <div className=" flex items-center gap-1">
              <img
                className="h-6 w-6 rounded-full"
                src={news.publisher.photo}
                alt=""
              />

              <p className=" text-nowrapa text-xs md:text-sm font-medium ">
                {news?.publisher?.name}
              </p>
            </div>
            <p className=" flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {news?.publisher?.email}
            </p>
            <p className=" text-xs md:text-sm text-gray-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              {"Pending"}
            </p>
            <Link to={`/article-details/${news._id}`} className=" w-fit">
              <Typography
                size="sm"
                variant="text"
                className="flex ml-2 rounded items-center gap-2 text-xs md:text-sm text-nowrap"
              >
                Details{" "}
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
              </Typography>
            </Link>
          </div>
          <div className=" p-2">dd</div>
        </div>
      </div>
    </div>
  );
};

DashboardArticleCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default DashboardArticleCard;
