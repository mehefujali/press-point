import { ScrollRestoration } from "react-router-dom";
import AllPublisher from "../../components/AllPublisher/AllPublisher";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import Plans from "../../components/Plans/Plans";
import Statistic from "../../components/Statistic/Statistic";
import TrendingSwiper from "../../components/TrendingSwiper/TrendingSwiper";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import HomeModalSub from "../../components/HomeModalSub/HomeModalSub";

const Home = () => {
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);







  return (
    <div>
       <HomeModalSub open={showModal} setOpen={setShowModal}/>
      <Helmet>
        <title>Press point</title>
      </Helmet>
      <ScrollRestoration />
      <div>
        <TrendingSwiper />
      </div>
      <div>
        <FeaturedSection />
      </div>
      <div>
        <AllPublisher color={"#F2F5F7"} />
      </div>
      <div>
        <Statistic />
      </div>
      <div>
        <Plans />
      </div>
    </div>
  );
};

export default Home;
