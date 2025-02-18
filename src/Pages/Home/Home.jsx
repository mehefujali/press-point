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
import FAQ from "../../components/FAQ/FAQ";
import usePremiumUser from "../../Hooks/usePremiumUser";
import useAdmin from "../../Hooks/useAdmin";
import Newslatter from "../../components/NewsLatter/NewsLatter";
import WhySection from "../../components/WhySection/WhySection";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { isPremiumUser  } = usePremiumUser();
  const {isAdmin} = useAdmin()
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPremiumUser && !isAdmin) {
        setShowModal(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isPremiumUser,isAdmin]);

  return (
    <div>
      <HomeModalSub open={showModal} setOpen={setShowModal} />
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
      <div>
        <FAQ />
      </div>
      <div>
        <WhySection/>
      </div>
      <div>
        <Newslatter/>
      </div>
    </div>
  );
};

export default Home;
