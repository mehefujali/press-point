import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,

} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PropTypes from "prop-types";
import {
      Card,
      Input,
      Textarea,
      Option,
    } from "@material-tailwind/react";
    import { cloneElement, useEffect, useState } from "react";
    import { useForm } from "react-hook-form";
    import Select from "react-select";
    import { Select as MtSelect } from "@material-tailwind/react";
    
    import axios from "axios";
    import useAuth from "../../Hooks/useAuth";
    import toast from "react-hot-toast";
    import { useNavigate } from "react-router-dom";
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_BB_API_KEY
    }`;
    
    import tagOptions from "../../../public/tagOptions";

const UpdateArticleModal = ({
  openUpdateModal,
  setOpenUpdateModal,
  updateArticleId,
}) => {

  const { user } = useAuth();
  const [uplodLoading, setUplodeLoading] = useState(false);
  const [fileName, setFileName] = useState("Upload image");
  const [articleImage, setImage] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [publisher, setPublisher] = useState("");
  const { register, handleSubmit } = useForm();



//   for default article 

  const {  data: article } = useQuery({

    queryKey: ["update-default-article", updateArticleId],
    queryFn: async () => {
      if (openUpdateModal) {
        const { data } = await axiosSecure.get(
          `/update-default-article/${updateArticleId}`
        );
        return data;
      }
    },
  });






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

  const {  data: publishers = [] } = useQuery({
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

  console.log(article);
  return (
    <div>
      
      <Dialog open={openUpdateModal} handler={() => setOpenUpdateModal(false)}>
        <DialogHeader>Update article </DialogHeader>
        <DialogBody>
        <Card color="white" shadow={true} className=" mt-9 w-full  rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="   md:w-full p-6 ">
            <div className=" flex flex-col gap-3">
              <Input
              value={article?.title}
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
              />
              <div className=" w-full">
                <Textarea
                  {...register("description", { required: true })}
                  color="blue-gray"
                  label="Description"
                />
              </div>
            </div>
            <button className=" w-full ">
              <Button
                size="lg"
                loading={uplodLoading}
                className="mt-6 bg-primary-color rounded items-center justify-center"
                fullWidth
              >
                {uplodLoading ? "uploading" : "upload article"}
              </Button>
            </button>
          </form>
        </Card>
        </DialogBody>
        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenUpdateModal(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => setOpenUpdateModal(false)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </div>
  );
};

UpdateArticleModal.propTypes = {
  openUpdateModal: PropTypes.bool.isRequired,
  setOpenUpdateModal: PropTypes.func.isRequired,
  updateArticleId: PropTypes.string.isRequired,
};

export default UpdateArticleModal;
