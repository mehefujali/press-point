import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import usePremiumUser from "../../Hooks/usePremiumUser";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import toast from "react-hot-toast";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_BB_API_KEY
}`;
const MyProfile = () => {
  const { user, setUser } = useAuth();
  const [preview, setPreview] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);
  const { isPremiumUser } = usePremiumUser();
  const [newName, setNewName] = useState(user.displayName);
  const axiosSecure = useAxiosSecure();
  const [newPhoto, setNewPhoto] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  const { updateUser } = useAuth();
  const handleUpdateProfile = async () => {
    setUpdateLoading(true);
    let NewImage;
    if (newPhoto) {
      const res = await axios.post(
        imageHostingApi,
        { image: newPhoto },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      NewImage = res?.data?.data?.display_url;
    }

    try {
      const newProfile = {
        displayName: newName || user.displayName,
        photoURL: NewImage || user.photoURL,
      };
      updateUser(newProfile);
      await axiosSecure
        .patch(`/user-update/${user?.email}`, {
          name: newName,
          photo: NewImage || user.photoURL,
        })
        .then(() => {
          setUser({
            email: user.email,
            displayName: newName || user.displayName,
            photoURL: NewImage || user.photoURL,
          });
          setUpdateLoading(false);
          setUpdateProfile(false);
          toast.success("Profile updated");
        });
    } catch (err) {
      console.log(err);
      setUpdateLoading(false);
      toast.error("Update faild");
    }

    // setUser({
    //   email : user.email ,
    //   displayName: newName || user.displayName,
    //   photoURL: NewImage || user.photoURL,
    // });
  };

  return (
    <div>
      <Helmet>
        <title>Profile | {`${user?.displayName}`}</title>
      </Helmet>

      <div className=" h-full container mx-auto mt-2 flex justify-center items-center ">
        {updateProfile ? (
          <div className=" w-fit mt-7 text-center flex flex-col justify-center items-center shadow-md bg-white   rounded  relative">
            {isPremiumUser && (
              <span
                className=" absolute top-3 right-3 text-sm font-normal ml-4 text-golden-color border-2 rounded-full border-golden-color  px-2 text-nowrap flex items-center gap-1 
          "
              >
                {"👑Premium user"}
              </span>
            )}
            <div className=" relative bg-primary-color/10 w-full ">
              <div className=" h-32 rounded-full w-32 object-cover border-4 bg-white overflow-hidden  cursor-pointer border-white outline-4 outline-primary-color  relative top-16 -right-1/2 -translate-x-1/2">
                <label htmlFor="profile-update-img" className="cursor-pointer">
                  {" "}
                  <img src={preview || user?.photoURL} alt="" />
                  <span className=" absolute bottom-2 translate-x-1/2 right-1/2 text-primary-color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                      <path
                        fillRule="evenodd"
                        d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                {/* new photo  */}
                <input
                  onChange={(e) => {
                    setNewPhoto(e.target.files[0]);
                    const file = e.target.files[0]; // Get the selected file
                    if (file) {
                      const reader = new FileReader();

                      // When the file is loaded, set the preview URL
                      reader.onload = () => {
                        setPreview(reader.result);
                      };

                      reader.readAsDataURL(file); // Read the file as a Data URL (base64 encoded)
                    }
                  }}
                  type="file"
                  accept="image/*"
                  name=""
                  className=" hidden"
                  id="profile-update-img"
                />
              </div>
            </div>
            <div className="p-8 md:p-14 mt-5 flex flex-col justify-center items-center gap-2">
              <h2 className=" text-2xl font-bold mt-3">
                <Input
                  onChange={(e) => setNewName(e.target.value)}
                  defaultValue={user?.displayName}
                  label="Name"
                ></Input>
              </h2>
              {/* <p className=" flex items-center gap-2">
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
              </p> */}
              <Button
                loading={updateLoading}
                onClick={handleUpdateProfile}
                fullWidth
                size="md"
                className=" justify-center mt-4 rounded bg-primary-color flex items-center gap-2"
              >
                Update
              </Button>
            </div>
          </div>
        ) : (
          <div className=" w-fit mt-7 text-center flex flex-col justify-center items-center shadow-md bg-white   rounded  relative">
            {isPremiumUser && (
              <span
                className=" absolute top-3 right-3 text-sm font-normal ml-4 text-golden-color border-2 rounded-full border-golden-color  px-2 text-nowrap flex items-center gap-1 
          "
              >
                {"👑Premium user"}
              </span>
            )}
            <div className=" relative bg-primary-color/10  w-full ">
              <img
                className=" h-32  rounded-full w-32 object-cover border-4 border-white outline-4 outline-primary-color  relative top-16 -right-1/2 -translate-x-1/2"
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
                onClick={() => setUpdateProfile(true)}
                size="md"
                fullWidth
                className=" mt-4 justify-center rounded bg-primary-color flex items-center gap-2"
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
        )}
      </div>
    </div>
  );
};

export default MyProfile;
