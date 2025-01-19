import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import Plans from "../../components/Plans/Plans";
import Statistic from "../../components/Statistic/Statistic";
import TrendingSwiper from "../../components/TrendingSwiper/TrendingSwiper";


const Home = () => {
      return (
            <div>
                  <div>
                        <TrendingSwiper/>
                  </div>
                  <div>
                        <FeaturedSection/>
                  </div>
                  <div>
                        <Statistic/>
                  </div>
                  <div>
                        <Plans/>
                  </div>
                  
            </div>
      );
};

export default Home;