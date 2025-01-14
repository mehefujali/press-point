import Plans from "../../components/Plans/Plans";
import TrendingSwiper from "../../components/TrendingSwiper/TrendingSwiper";


const Home = () => {
      return (
            <div>
                  <div>
                        <TrendingSwiper/>
                  </div>
                  <div>
                        <Plans/>
                  </div>
            </div>
      );
};

export default Home;