import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Radio,
} from "@material-tailwind/react";

import Confetti from "react-confetti";
import { CiCircleChevDown } from "react-icons/ci";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import usePremiumUser from "../../Hooks/usePremiumUser";
import Loader from "../../components/Loader/Loader";
const Subscription = () => {
  const [amount, setAmount] = useState(5);
  const { isPremiumUser, isPremiumLoading } = usePremiumUser();
  const handleMenuItem = (amount = 5) => {
    setAmount(parseFloat(amount));
  };

  if (isPremiumLoading) {
    return <Loader />;
  }
  return (
    <div className=" container mx-auto">
      {isPremiumUser && (
        <Confetti recycle={false} className=" w-full h-screen " />
      )}
      <div className=" py-3 px-7 lg:py-7 md:rounded bg-primary-color my-5 text-white text-center flex items-center justify-center flex-col gap-1 ">
        {" "}
        <img
          className=" w-16 md:w-24"
          src="https://cdn-icons-png.flaticon.com/512/3649/3649801.png"
          alt=""
        />
        <h1 className=" md:text-2xl font-bold ">
          {isPremiumUser
            ? "Congratulations! You are a premium member."
            : "Join Our Community of Informed Readers"}
        </h1>
        <p className=" text-xs md:text-sm">
          {isPremiumUser
            ? "As a premium member, you have access to an exclusive, ad-free experience with content tailored just for you. Thank you for choosing premium!"
            : `Get the best news experience with our premium subscription. No ads,
          just pure content crafted for you.`}
        </p>
      </div>
      {isPremiumUser ? (
        <div className=" w-full flex justify-center">
          <Link to="/premium-articles">
            <Button
              size="lg"
              className=" rounded bg-primary-color flex items-center gap-2"
            >
              Browse Premium Articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      ) : (
        <div className=" flex items-center justify-center mt-8">
          <Menu
            dismiss={{
              itemPress: false,
            }}
          >
            <MenuHandler>
              <Button
                size="lg"
                className=" rounded bg-primary-color flex items-center gap-2"
              >
                Get Premium
                <CiCircleChevDown className=" text-lg font-bold" />
              </Button>
            </MenuHandler>
            <MenuList
              onChange={(e) => handleMenuItem(e.target.value)}
              className=" "
            >
              <div>Select package</div>
              <div className="border-b-2 border-b-primary-color/15 my-3 "></div>
              <MenuItem className="p-0">
                <label
                  htmlFor="item-1"
                  className="flex cursor-pointer items-center gap-2 p-2"
                >
                  <Radio
                    defaultChecked
                    name="package"
                    ripple={false}
                    id="item-1"
                    value={5}
                    containerProps={{ className: "p-0" }}
                    className="hover:before:content-none  "
                  />
                  <BiPurchaseTagAlt /> 1 minute / $5
                </label>
              </MenuItem>
              <MenuItem className="p-0">
                <label
                  htmlFor="item-2"
                  className="flex cursor-pointer items-center gap-2 p-2"
                >
                  <Radio
                    name="package"
                    ripple={false}
                    id="item-2"
                    containerProps={{ className: "p-0" }}
                    className="hover:before:content-none"
                    value={10}
                  />
                  <BiPurchaseTagAlt /> 5 days / $10
                </label>
              </MenuItem>
              <MenuItem className="p-0">
                <label
                  htmlFor="item-3"
                  className="flex cursor-pointer items-center gap-2 p-2"
                >
                  <Radio
                    name="package"
                    ripple={false}
                    id="item-3"
                    value={15}
                    containerProps={{ className: "p-0" }}
                    className="hover:before:content-none"
                  />
                  <BiPurchaseTagAlt /> 10 days / $15
                </label>
              </MenuItem>
              <Link
                state={{ amount }}
                to="/purchase"
                className=" flex items-end justify-end mt-5"
              >
                <Button className=" rounded bg-primary-color">purchase</Button>
              </Link>
            </MenuList>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Subscription;
