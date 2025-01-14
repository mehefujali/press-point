import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
      return (
            <div className=" bg-primary-color bg-opacity-5 min-h-[100vh]">
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