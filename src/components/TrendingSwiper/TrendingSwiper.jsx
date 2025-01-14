// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./trendingswiper.css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const TrendingSwiper = () => {
  const [trendingNews, setTrendingNews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/articles").then((res) => {
      setTrendingNews(res.data);
    });
  }, []);

  return (
    <div className=" container mx-auto my-14 w-11/12 lg:w-full">
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
          }}
        spaceBetween={60}
        pagination={{
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
            <div className=" text-start shadow-md  ">
              <img className=" max-h-52 w-full" src={news?.image} alt="" />
              <div className="p-6 flex flex-col gap-2">
                <h3 className=" font-semibold">{news?.title}</h3>
                <p className=" text-nowrapa ">{news?.publisher}</p>
                <p className=" text-sm">{news?.description.slice(0,140)}...</p>
                <Link><Button className=" rounded bg-primary-color">See details</Button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingSwiper;
