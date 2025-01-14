// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './trendingswiper.css'
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const TrendingSwiper = () => {
  return (
    <div className=" container mx-auto my-14">
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="  bg-red-500">
            1</div></SwiperSlide>
        <SwiperSlide><div className=" bg-red-500">
            2</div></SwiperSlide>
        <SwiperSlide><div className="  bg-red-500">
           3 </div></SwiperSlide>
        <SwiperSlide><div className=" bg-red-500">
            4</div></SwiperSlide>
        <SwiperSlide><div className=" bg-red-500">
            5</div></SwiperSlide>
        <SwiperSlide><div className="  bg-red-500">
           6 </div></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default TrendingSwiper;
