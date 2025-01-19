import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <div className=" bg-primary-color bg-opacity-5 min-h-[100vh]  font-poppins">
      <div>
        <Navbar />
      </div>
      <div className=" pt-14">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
