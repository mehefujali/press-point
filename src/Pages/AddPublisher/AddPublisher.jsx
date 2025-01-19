import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_BB_API_KEY
}`;

const AddPublisher = () => {
  const [uplodLoading, setUplodeLoading] = useState(false);
  const [fileName, setFileName] = useState("Upload logo");
  const [articleImage, setImage] = useState(null);

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (!articleImage) {
      toast.error("Please select an image to proceed.");
      return;
    }

    const imageFile = { image: articleImage };

    try {
      setUplodeLoading(true);
      const res = await axios.post(imageHostingApi, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const newPublisher = {
           publisherName : data.publisher_name,
           logo: res?.data?.data.display_url
        };
        try {
          const res = await axiosSecure.post("/publisher", newPublisher);
          if (res.data.insertedId) {
            setUplodeLoading(false);
            toast.success("Publisher added");
            navigate("/");
          }
        } catch (eror) {
          console.log(eror);
          setUplodeLoading(false);
        }
      }
    } catch (eror) {
      console.log(eror);
      setUplodeLoading(false);
    }
  };

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      setFileName(
        file.name.length > 16 ? file.name.slice(0, 16) + "..." : file.name
      );
    } else {
      setFileName("Upload image");
    }
  };

  return (
    <div className=" h-[calc(100vh-61px)] md:w-full w-11/12 mx-auto flex justify-center items-center">
      <div className="  p-3 rounded-md  lg:w-9/12 xl:w-7/12 2xl:w-6/12  flex flex-col justify-center items-center ">
        <Typography variant="h5" color="blue-gray">
          Add publisher
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className=" font-normal text-wrap text-center"
        >
          Share your voice with the world by publishing your articles on our
          platform. Whether you&apos;re breaking the latest news, sharing
          insightful opinions, or showcasing your expertise, this is the place
          to make your content shine.
        </Typography>
        <Card color="white" shadow={true} className=" mt-9 w-full  rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="   md:w-full p-6 ">
            <div className=" flex flex-col gap-3">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Publisher Name
              </Typography>
              <Input
                {...register("publisher_name", { required: true })}
                size="lg"
                placeholder="Publisher name"
                className=" !border-t-primary-color !border-primary-color text-primary-color  rounded"
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
                  htmlFor="article-image"
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
                onChange={handleImageFileChange}
                type="file"
                id="article-image"
                className=" hidden"
                name="image"
              />
            </div>
            <button className=" w-full ">
              <Button
                size="lg"
                loading={uplodLoading}
                className="mt-6 bg-primary-color rounded items-center justify-center"
                fullWidth
              >
                {uplodLoading ? "adding" : "Add publisher"}
              </Button>
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPublisher;
