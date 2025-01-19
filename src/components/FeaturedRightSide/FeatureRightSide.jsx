import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FeatureRightSide = () => {
  return (
    <div>
      <h1 className=" px-3 text-xl font-semibold  flex items-end mb-4 gap-1">
        Follow Us on{" "}
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
            d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
          />
        </svg>
      </h1>
      <div className=" flex flex-col gap-2 px-3 ">
        <Link to="https://www.facebook.com/mehefuj83" target="_blank">
          <Button
            className=" rounded flex gap-2 items-center bg-white text-blue-800"
            fullWidth
          >
            {" "}
            <img
              className=" w-7 h-7"
              src="https://static.vecteezy.com/system/resources/previews/042/127/218/non_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png"
              alt=""
            />
            Facebook
          </Button>
        </Link>
        <Link to="https://www.linkedin.com/in/mehefujali" target="_blank">
          <Button
            className=" rounded flex gap-2 items-center bg-white text-blue-800"
            fullWidth
          >
            {" "}
            <img
              className=" w-5 h-5"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
            Linkedin
          </Button>
        </Link>
        <Link to="https://github.com/mehefujali" target="_blank">
          <Button
            className=" rounded flex gap-2 items-center bg-white text-black"
            fullWidth
          >
            {" "}
            <img
              className=" w-5 h-5"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />
            Github
          </Button>
        </Link>
        <Link to="">
          <Button
            className=" rounded flex gap-2 items-center bg-white text-black"
            fullWidth
          >
            {" "}
            <img
              className=" w-5 h-5"
              src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
              alt=""
            />
            X
          </Button>
        </Link>
        <Link to="https://www.youtube.com/@mehefuj-ali" target="_blank">
          <Button
            className=" rounded flex gap-2 items-center bg-white text-red-500"
            fullWidth
          >
            {" "}
            <img
              className=" w-6 h-6"
              src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
              alt=""
            />
            Youtube
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureRightSide;
