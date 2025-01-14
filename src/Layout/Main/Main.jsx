import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
      return (
            <div>
                  <div>
                        <Navbar/>
                  </div>
                  <div>
                        <Outlet/>
                  </div>
                  <div>
                        
                  </div>
            </div>
      );
};

export default Main;