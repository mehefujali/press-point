import {
  Navbar as MTNav,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";
import "./navbar.css";
import useAdmin from "../../Hooks/useAdmin";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, signOutUser } = useAuth();
  const { isAdmin } = useAdmin();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#003366",
      confirmButtonText: "Sign out",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser();
        toast.success("You have successfully signed out");
      }
    });
  };

  const navList = (
    <ul
      id="navLinks"
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
      {user && (
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
      )}
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
      {user && (
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
      )}
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
      {user && (
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
      )}
      {user && (
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
      )}
    </ul>
  );

  return (
    <div>
      <div className=" fixed w-full z-50 top-0">
        <MTNav className="sticky top-0 z-10 shadow-none  border-b-2 border-b-gray-200 h-max max-w-full rounded-none px-4 py-0 lg:px-8 lg:py-2">
          <div className="flex container mx-auto items-center justify-between text-blue-gray-900">
            <div className=" flex items-center gap-2">
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden flex-grow"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
              <Link to="/" className="mr-4 cursor-pointer py-1.5 font-medium">
                <img
                  className=" w-24"
                  src="https://i.ibb.co/d7y22m0/pp-color.png"
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden xl:block">{navList}</div>
              {user ? (
                <div className=" flex items-center gap-2">
                  {/* <UserProfileDropdown /> */}
                  <Link to="my-profile">
                  <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center rounded-full p-0"
                  >
                    <Avatar
                      variant="circular"
                      alt={user?.displayName}
                      withBorder={true}
                      color="blue-gray"
                      className=" w-8 h-8 lg:w-10 lg:h-10 p-0.5"
                      src={user?.photoURL}
                    />
                  </Button></Link>
                  <HiOutlineLogout
                    onClick={handleLogOut}
                    className=" text-xl cursor-pointer md:text-2xl text-primary-color"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-x-1 text-nowrap">
                  <Link to="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className=" xl:inline-block rounded text-nowrap"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link to={"/signup"}>
                    <Button
                      //     variant="gradient"
                      size="sm"
                      className=" xl:inline-block bg-primary-color text-white rounded "
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </MTNav>
      </div>
    </div>
  );
};

export default Navbar;
