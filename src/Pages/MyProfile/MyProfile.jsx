import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import usePremiumUser from "../../Hooks/usePremiumUser";
import { Button } from "@material-tailwind/react";

const MyProfile = () => {
  const { user } = useAuth();
  const { isPremiumUser } = usePremiumUser();

  return (
    <div>
      <Helmet>
        <title>Profile | {`${user?.displayName}`}</title>
      </Helmet>

      <div className=" h-full container mx-auto mt-2 flex justify-center items-center ">
        <div className=" w-fit mt-7 text-center flex flex-col justify-center items-center shadow-md bg-white   rounded  relative">
          { isPremiumUser &&
            <span
              className=" absolute top-3 right-3 text-sm font-normal ml-4 text-golden-color border-2 rounded-full border-golden-color  px-2 text-nowrap flex items-center gap-1 
          "
            >
              {"👑Premium user"}
            </span>
          }
          <div className=" relative bg-primary-color/10 w-full " >
            <img
              className=" h-32 rounded-full w-32 object-cover border-4 border-white outline-4 outline-primary-color  relative top-16 -right-1/2 -translate-x-1/2"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className="p-8 md:p-14 mt-5 flex flex-col justify-center items-center gap-2">
            <h2 className=" text-2xl font-bold mt-3">{user?.displayName}</h2>
            <p className=" flex items-center gap-2">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {user?.email}
            </p>
            <Button
              size="sm"
              className=" mt-4 rounded bg-primary-color flex items-center gap-2"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Update profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
