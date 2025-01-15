import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const Addarticles = () => {
  const [fileName, setFileName] = useState("Upload image");
  const tagOptions = [
    { value: "breaking-news", label: "Breaking News" },
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health" },
    { value: "sports", label: "Sports" },
    { value: "entertainment", label: "Entertainment" },
    { value: "politics", label: "Politics" },
    { value: "world", label: "World" },
    { value: "science", label: "Science" },
    { value: "environment", label: "Environment" },
    { value: "education", label: "Education" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "travel", label: "Travel" },
    { value: "food", label: "Food" },
    { value: "fashion", label: "Fashion" },
    { value: "finance", label: "Finance" },
    { value: "culture", label: "Culture" },
    { value: "opinion", label: "Opinion" },
    { value: "weather", label: "Weather" },
    { value: "crime", label: "Crime" },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name.slice(0, 16) + "...");
    } else {
      setFileName("Upload image");
    }
  };
  return (
    <div className=" h-[calc(100vh-61px)] md:w-full w-11/12 mx-auto flex justify-center items-center">
      <div className="  p-3 rounded-md  lg:w-9/12 xl:w-7/12 2xl:w-6/12  flex flex-col justify-center items-center ">
        <Typography variant="h5" color="blue-gray">
        Create and Publish
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className=" font-normal text-wrap text-center"
        >
          Share your voice with the world by publishing your articles on our platform. Whether you&apos;re breaking the latest news, sharing insightful opinions, or showcasing your expertise, this is the place to make your content shine.
        </Typography>
        <Card
          color="white"
          shadow={true}
          className=" mt-9 w-full  rounded-md"
        >
          <form className="   md:w-full p-6 ">
            <div className=" flex flex-col gap-3">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Title
              </Typography>
              <Input
                size="lg"
                placeholder="Ariticle title"
                className=" !border-t-primary-color !border-primary-color text-primary-color  rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Tags
              </Typography>
              <Select
                isMulti
                name="tags"
                styles={{border:'#003366' }}
                options={tagOptions}
                className="basic-multi-select border focus:!border-primary-color focus:!outline-none rounded !border-primary-color  hover:outline-none"
                classNamePrefix="select"
              />

              <Button
                onChange={handleFileChange}
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
              <input type="file" id="register-image" className=" hidden" />
              <div className=" w-full">
                <Textarea color="blue-gray" label="Description"  />
              </div>
            </div>

            <Button className="mt-6 bg-primary-color rounded" fullWidth>
            upload article
            </Button>

            
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Addarticles;
