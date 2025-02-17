import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Footer = () => {
      const {isAdmin} = useAdmin()
  return (
    <div className="bg-white mt-16">
      <footer className=" container mx-auto  p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img
            src="https://i.ibb.co/d7y22m0/pp-color.png"
            alt="logo-ct"
            className="w-24"
          />
          <ul
            id=""
            className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
          >
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink to="/" className="flex items-center">
                Home
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink to="/addarticles" className="flex items-center">
                Add Articles
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink to="/articles" className="flex items-center">
                All Articles
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink to={"/subscription"} className="flex items-center">
                Subscription
              </NavLink>
            </Typography>
            {isAdmin && (
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <NavLink to={"/dashboard"} className="flex items-center">
                  Dashboard
                </NavLink>
              </Typography>
            )}
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink to={"my-articles"} className="flex items-center">
                My Articles
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <NavLink to={"premium-articles"} className="flex items-center">
                Premium Articles
              </NavLink>
            </Typography>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2025 Press point
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
