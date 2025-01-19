// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./trendingswiper.css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Button, Chip } from "@material-tailwind/react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import moment from "moment/moment";

const TrendingSwiper = () => {
  const axiosPublic = useAxiosPublic();
  let dateNow = moment().format('lll')
  setTimeout(() => {
     dateNow = moment().format('lll')
  }, 1000);
  const [trendingNews, setTrendingNews] = useState([]);
  useEffect(() => {
    axiosPublic.get("/articles").then((res) => {
      setTrendingNews(res.data);
    });
  }, [axiosPublic]);

  return (
    <div className=" container mx-auto  w-11/12 lg:w-full">
      <div className=" my-3  px-4 py-4 bg-primary-color text-white flex justify-between items-center">
        <h1 className=" text-xl uppercase">Trending articles  </h1>
        <p>{dateNow}</p>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        spaceBetween={60}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
      >
        {trendingNews.map((news) => (
          <SwiperSlide key={news._id}>
            <div className=" text-start shadow-md  rounded relative overflow-hidden border-2 h-[370px]">
              <div className="text-sm absolute right-2 top-1 ">
                <Chip
                  color="red"
                  size="sm"
                  value="Trending"
                  className="bg-white text-red-800"
                  icon={
                    <span className="mx-auto mt-1 block h-2 w-2 rounded-full  bg-red-800 content-['']" />
                  }
                />
              </div>
              <img
                className=" lg:h-40 h-48 xl:h-48 w-full"
                src={news?.image}
                alt=""
              />
              <div className="p-3 flex flex-col lg:gap-1  justify-between h-[178px]">
                <h3 className=" font-semibold text-sm ">{news?.title}</h3>
                <div className=" flex items-center gap-1">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={news.publisher.photo}
                    alt=""
                  />
                  <p className=" text-nowrapa text-xs font-medium ">
                    {news?.publisher?.name}
                  </p>
                </div>
                <p className=" text-xs text-gray-600">
                  {news?.description.slice(0, 100)}...
                </p>
                <Link to={`/article-details/${news._id}`} className=" w-fit">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingSwiper;
