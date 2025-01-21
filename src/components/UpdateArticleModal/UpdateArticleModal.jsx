import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PropTypes from "prop-types";
import { Card, Input, Textarea, Option } from "@material-tailwind/react";
import { cloneElement, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Select as MtSelect } from "@material-tailwind/react";

import axios from "axios";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_BB_API_KEY
}`;

import tagOptions from "../../../public/tagOptions";
import toast from "react-hot-toast";

const UpdateArticleModal = ({
  openUpdateModal,
  setOpenUpdateModal,
  updateArticleId: article,
  refetchMyarticle,
}) => {
  const [uplodLoading, setUplodeLoading] = useState(false);
  const [fileName, setFileName] = useState("Upload new image");
  const [articleImage, setImage] = useState(article.image);
  const [selectedTags, setSelectedTags] = useState([]);
  const axiosSecure = useAxiosSecure();

  const [publisher, setPublisher] = useState(article.publisher);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: articleImage };

    try {
      setUplodeLoading(true);
      const res = await axios.post(imageHostingApi, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const newArticle = {
        title: data?.title,
        image: res?.data?.data.display_url || article.image,
        publisher: {
          ...publisher,
        },
        tags: selectedTags.length === 0 ? article.tags : selectedTags,
        description: data?.description,
      };
      console.log(newArticle);

      try {
        const res = await axiosSecure.put(
          `/update-article/${article._id}`,
          newArticle
        );
        console.log(res.data);
        if (res.data.modifiedCount) {
          setUplodeLoading(false);
          toast.success("Article updated");
        }
        refetchMyarticle();
        setOpenUpdateModal(false)
      } catch (eror) {
        console.log(eror);
        setUplodeLoading(false);
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

  const articleTags = article.tags;
  const selectedArticleTags = tagOptions.filter((tag) =>
    articleTags?.includes(tag.value)
  );
  const handleSetPublihser = (publisherName) => {
    const newPublisher = publishers.find((publ) => (publ.name = publisherName));
    setPublisher({
      name: newPublisher.name,
      logo: newPublisher.logo,
    });
  };

  return (
    <div>
      <Dialog open={openUpdateModal} handler={() => setOpenUpdateModal(false)}>
        <DialogHeader className=" flex justify-between items-center">
          {" "}
          <h1>Update article</h1>{" "}
          <button onClick={() => setOpenUpdateModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </DialogHeader>
        <DialogBody>
          <Card color="white" shadow={false} className="  w-full  rounded-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="   md:w-full  px-5 "
            >
              <div className=" flex flex-col gap-3">
                <Input
                  defaultValue={article?.title}
                  {...register("title", { required: true })}
                  size="lg"
                  label="Title"
                  placeholder="Ariticle title"
                  className=" rounded"
                />

                <Select
                  defaultValue={selectedArticleTags}
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
                    value={article.publisher.name}
                    className="w-full rounded"
                    size="lg"
                    onChange={(e) => handleSetPublihser(e)}
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
                        value={publisher?.name}
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
                {articleImage === article.image && (
                  <img className=" rounded w-40" src={article.image} alt="" />
                )}
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
                    defaultValue={article?.description}
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
