import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { SininWithGoogle, user, emailLogin } = useAuth();
  const {state} = useLocation()

  const handleGoogleSignIn = () => {
    SininWithGoogle();
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password);
  };

 
  if (user && user.email) {
    return <Navigate to={state||"/"} replace />;
  }
  return (
    <div className=" h-[calc(100vh-61px)] w-11/12 mx-auto flex justify-center items-center">
      <div className="  p-3 rounded-md  flex flex-col justify-center items-center ">
        <Typography variant="h5" color="blue-gray">
          Log In to Your Account
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className=" font-normal text-wrap text-center"
        >
          Stay updated with trending articles, explore publishers, and enjoy
          exclusive features.
        </Typography>
        <Card color="white" shadow={true} className=" mt-9 w-fit rounded-md">
          <form onSubmit={handleEmailLogin} className="  w-72  p-6 ">
            <div className=" flex flex-col gap-3">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                name="email"
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
            </div>

            <button className=" w-full">
              <Button className="mt-6 bg-primary-color rounded" fullWidth>
                Login
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
              Don’t Have an Account?{" "}
              <Link state={state} to="/signup" className="font-medium text-gray-900">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
