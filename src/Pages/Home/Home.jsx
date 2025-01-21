import { ScrollRestoration } from "react-router-dom";
import AllPublisher from "../../components/AllPublisher/AllPublisher";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import Plans from "../../components/Plans/Plans";
import Statistic from "../../components/Statistic/Statistic";
import TrendingSwiper from "../../components/TrendingSwiper/TrendingSwiper";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
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
