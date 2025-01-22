import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Radio,
} from "@material-tailwind/react";
import { CiCircleChevDown } from "react-icons/ci";
import { BiPurchaseTagAlt } from "react-icons/bi";
const Subscription = () => {
  return (
    <div className=" container mx-auto">
      <div className=" py-3 px-7 lg:py-7 rounded bg-primary-color my-5 text-white text-center flex items-center justify-center flex-col gap-1 ">
        {" "}
        <img
          className=" w-24"
          src="https://cdn-icons-png.flaticon.com/512/3649/3649801.png"
          alt=""
        />
        <h1 className=" md:text-2xl font-bold ">
          Join Our Community of Informed Readers
        </h1>
        <p className=" text-xs md:text-sm">
          Get the best news experience with our premium subscription. No ads,
          just pure content crafted for you.
        </p>
      </div>
      <div className=" flex items-center justify-center mt-8">
        <Menu
          dismiss={{
            itemPress: false,
          }}
        >
          <MenuHandler>
            <Button size="lg" className=" rounded bg-primary-color flex items-center gap-2">
              Get Premium
              <CiCircleChevDown  className=" text-lg font-bold" />
            </Button>
          </MenuHandler>
          <MenuList  className=" ">
            <div >
                  Select package
            </div>
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
                />
               <BiPurchaseTagAlt />  5 days / $10
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
                  containerProps={{ className: "p-0" }}
                  className="hover:before:content-none"
                />
                <BiPurchaseTagAlt />  10 days / $15
              </label>
            </MenuItem>
            <div className=" flex items-end justify-end mt-5">
                  <Button className=" rounded bg-primary-color">purchase</Button>
            </div>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Subscription;
