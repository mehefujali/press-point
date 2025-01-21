import { Button, Card, Typography, Input } from "@material-tailwind/react";
import { useState } from "react";

import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_BB_API_KEY
}`;
const SignUp = () => {
  const {state} = useLocation()
  const { SininWithGoogle, user, emailSignUp, updateUser, setUser } = useAuth();
  const [fileName, setFileName] = useState("Upload your photo");
  const [userCreateLoading, setUserCreateLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name?.slice(0, 16) + "...");
    } else {
      setFileName("Upload your photo");
    }
  };

  const handleGoogleSignIn = () => {
    SininWithGoogle();
  };
  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    const image = form.image?.files[0];
    // console.log({ name, email, password, image });

    if (!name) {
      return toast.error("Please input your name");
    }
    if (!email) {
      return toast.error("Please input your email");
    }
    if (!password) {
      return toast.error("Please input your password");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (!image) {
      return toast.error("Please uplode your image");
    }

    setUserCreateLoading(true);

    const res = await axios.post(
      imageHostingApi,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data.success) {
      emailSignUp(email, password)
        .then(() => {
          updateUser({
            displayName: name,
            photoURL: res?.data?.data.display_url,
          })
            .then(() => {
              setUser({
                email,
                displayName: name,
                photoURL: res?.data?.data.display_url,
              });
              axiosPublic.post("/user", {
                name,
                email,
                photo: res?.data?.data.display_url,
              });
              setUserCreateLoading(false);
              toast.success(`Welcome ${name} `);
            })
            .catch(() => {
              setUserCreateLoading(false);
            });
        })
        .catch((err) => {
          setUserCreateLoading(false);
          // console.log(err.message)
          if (err.message === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("This email is already in use");
          }
        });
    }
  };
  if (user && user.email) {
    return <Navigate to={state||"/"} replace />;
  }
  return (
    <div className=" h-[calc(100vh-61px)] w-11/12 mx-auto flex justify-center items-center">
      <div className="  p-3 rounded-md  flex flex-col justify-center items-center ">
        <Typography variant="h5" color="blue-gray">
          Create Your Account
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className=" font-normal text-wrap text-center"
        >
          Join us and stay updated with the latest news, trends, and premium
          features.
        </Typography>
        <Card color="white" shadow={true} className=" mt-9 w-fit rounded-md">
          <form onSubmit={handleEmailSignUp} className="  w-72  p-6 ">
            <div className=" flex flex-col gap-3">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                name="name"
                size="lg"
                placeholder="Your name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                name="email"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                name="password"
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Button
                fullWidth
                variant="outlined"
                className="flex p-0 rounded items-center gap-3 border-primary-color text-primary-color cursor-default"
              >
                <label
                  htmlFor="register-image"
                  className=" w-full h-full cursor-pointer flex items-center gap-3 px-4 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  {fileName}
                </label>
              </Button>
              <input
                name="image"
                onChange={handleFileChange}
                type="file"
                id="register-image"
                className=" hidden"
              />
            </div>

            <button className=" w-full">
              <Button
                loading={userCreateLoading}
                className="mt-6 bg-primary-color rounded justify-center"
                fullWidth
              >
                {userCreateLoading ? "creating account" : "Sign Up"}
              </Button>
            </button>

            <Button
              onClick={handleGoogleSignIn}
              size="sm"
              variant="outlined"
              fullWidth
              className="flex items-center  text-center justify-center gap-3 rounded mt-4"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-5 w-5"
              />
              Continue with Google
            </Button>
            <Typography
              color="gray"
              variant="small"
              className="mt-4 text-center font-normal"
            >
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-gray-900">
                Login here
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
