import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
} from "@material-tailwind/react";
import { cloneElement, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Select as MtSelect } from "@material-tailwind/react";

import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { ScrollRestoration, useNavigate } from "react-router-dom";
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_BB_API_KEY
}`;

import tagOptions from "../../../public/tagOptions";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import usePremiumUser from "../../Hooks/usePremiumUser";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Addarticles = () => {
  const { user } = useAuth();
 
  const [uplodLoading, setUplodeLoading] = useState(false);
  const [fileName, setFileName] = useState("Upload image");
  const [articleImage, setImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [publisher, setPublisher] = useState("");
  const { register, handleSubmit } = useForm();
  const [uploadLimit, setUploadLimit] = useState(true);
  const { isPremiumUser, isPremiumLoading } = usePremiumUser();
  const {
    refetch: refetchMy,
    data: myArticles = {},
    isLoading: articleLoading,
  } = useQuery({
    queryKey: ["my-articles-upload-limit"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-article-count/${user.email}`);
      return data;
    },
  });

  useEffect(() => {
    refetchMy();

    if (!isPremiumLoading && !articleLoading) {
      if (isPremiumUser || (myArticles.count ?? 0) < 1) {
        setUploadLimit(false);
      } else if (!isPremiumUser && (myArticles.count ?? 0) >= 1) {
        setUploadLimit(true);

        if (!uploadLimit && !isPremiumUser && (myArticles.count ?? 0) >= 1) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "You have reached your article limit!",
            text: "Upgrade to a premium plan to publish unlimited articles",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
   
  }, [
    isPremiumUser,
    uploadLimit,
    isPremiumLoading,
    myArticles,
    articleLoading,
    refetchMy,
  ]);

  const onSubmit = async (data) => {
    if (!articleImage) {
      toast.error("Please select an image to proceed.");
      return;
    }
    if (!isPremiumUser && (myArticles.count ?? 0) >= 1) {
      setUploadLimit(true);

      if (!uploadLimit && !isPremiumUser && (myArticles.count ?? 0) >= 1) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "You have reached your article limit!",
          text: "Upgrade to a premium plan to publish unlimited articles",
          showConfirmButton: false,
          timer: 1500,
        });
      }
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
        const newArticle = {
          title: data?.title,
          image: res?.data?.data.display_url,
          author: {
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
          },
          publisher: {
            ...publisher,
          },

          tags: selectedTags,
          description: data?.description,
        };

        try {
          const res = await axiosSecure.post("/article", newArticle);
          if (res.data.insertedId) {
            setUplodeLoading(false);
            toast.success("Article uploded");
            navigate("/my-articles");
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

  const { data: publishers = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/publisher");
      return data;
    },
  });

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
  const handleChange = (selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setSelectedTags(values);
  };
  return (
    <div className=" h-[calc(100vh-61px)] md:w-full w-11/12 mx-auto flex justify-center items-center">
      <Helmet>
        <title>Press point - Add article</title>
      </Helmet>
      <ScrollRestoration />
      <div className="  p-3 rounded-md  lg:w-9/12 xl:w-7/12 2xl:w-6/12  flex flex-col justify-center items-center ">
        <Typography variant="h5" color="blue-gray">
          Create and Publish
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
              <Input
                {...register("title", { required: true })}
                size="lg"
                label="Title"
                placeholder="Ariticle title"
                className=" rounded"
              />

              <Select
                onChange={handleChange}
                isMulti
                name="tags"
                styles={{ border: "#003366" }}
                options={tagOptions}
                className="basic-multi-select border focus:!border-primary-color focus:!outline-none rounded !border-primary-color  hover:outline-none"
                classNamePrefix="select"
              />

              <div className=" w-full">
                <MtSelect
                  className="w-full rounded"
                  size="lg"
                  onChange={(e) => setPublisher(e)}
                  label="Select Publisher"
                  selected={(element) =>
                    element &&
                    cloneElement(element, {
                      disabled: true,
                      className:
                        "flex items-center opacity-100 rounded px-0 gap-2 pointer-events-none",
                    })
                  }
                >
                  {publishers?.map((publisher) => (
                    <Option
                      key={publisher?._id}
                      value={{ name: publisher?.name, logo: publisher.logo }}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={publisher?.logo}
                        alt={publisher?.name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {publisher?.name}
                    </Option>
                  ))}
                </MtSelect>
              </div>

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
                 accept="image/*"
              />
              <div className=" w-full">
                <Textarea
                  {...register("description", { required: true })}
                  color="blue-gray"
                  label="Description"
                />
              </div>
            </div>
            <button disabled={uploadLimit} className=" w-full ">
              <Button
                disabled={uploadLimit}
                size="lg"
                loading={uplodLoading}
                className="mt-6 bg-primary-color rounded items-center justify-center"
                fullWidth
              >
                {uplodLoading
                  ? "uploading"
                  : `${
                      uploadLimit
                        ? "You have reached your article limit!"
                        : "upload article"
                    }`}
              </Button>
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Addarticles;
