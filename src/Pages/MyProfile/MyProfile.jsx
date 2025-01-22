import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <Helmet>
        <title>Profile | {`${user?.displayName}`}</title>
      </Helmet>

      <div className=" h-full container mx-auto mt-2 flex justify-center items-center ">
        <div className=" w-fit mt-7 text-center flex flex-col justify-center items-center">
          <img className=" h-32" src={user?.photoURL} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
