import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ScrollRestoration } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet";
import { Input, Option, Select } from "@material-tailwind/react";
import { cloneElement, useEffect, useState } from "react";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [searchKey, setSearchKey] = useState("");
  const [publisher, setPublisher] = useState("");
  const [tag, setTag] = useState("");

  const {
    refetch,
    data: articles = [],
    isLoading,
  } = useQuery({
    queryKey: ["published-articles"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/published-articles?search=${searchKey}&publisher=${publisher}&tag=${tag}`
      );
      return data;
    },
  });

  const { data: publishers = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/publisher");
      return data;
    },
  });

  const handleSearch = (key) => {
    setSearchKey(key);
  };
  const handleFilterByTag = (tag) => {
    setTag(tag);
  };
  const handleFilterByPublisher = (publisher) => {
    //  console.log(publisher)
    setPublisher(publisher);
  };
  useEffect(() => {
    refetch();
  }, [publisher, refetch, searchKey, tag]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto mt-6">
      <Helmet>
        <title>Press point - All article</title>
      </Helmet>
      <ScrollRestoration />
      <div className=" sticky  py-3 px-2 top-[40px] md:top-[63px] z-10 w-full bg-white">
        <div className=" flex flex-col gap-3  md:flex-row justify-between w-11/12 md:w-full mx-auto items-center  ">
          <h3 className=" text-sm md:text-xl xl:text-2xl text-center  border-l-4 border-primary-color hidden lg:block pl-2 ">
            All article
          </h3>
          <div className=" w-fit">
            <div className=" relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute right-2 top-1/4 translate-y-1/6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <Input
                onChange={(e) => handleSearch(e.target.value)}
                size="md"
                label="search..."
                className=" rounded pr-8"
              />
            </div>
          </div>
          <div className="hidden sm:flex">
            <Select
              onChange={(e) => handleFilterByTag(e)}
              label="Filter by tag "
            >
              <Option value="">Filter by tag</Option>
              <Option value="nature">Nature</Option>
              <Option value="science">Science</Option>
              <Option value="movement">Movement</Option>
              <Option value="technology">Technology</Option>
              <Option value="social-issues">Social issues</Option>
              <Option value="breaking-news">Breaking news</Option>
            </Select>
          </div>
          <div className=" hidden sm:flex">
            <Select
              className="w-full rounded"
              size="lg"
              onChange={(e) => handleFilterByPublisher(e)}
              label="Filter by publisher"
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
            </Select>
          </div>
        </div>
      </div>
      <div className="  mx-auto w-11/12 md:w-full flex flex-col gap-4 mt-6">
        {articles?.map((news) => (
          <ArticleCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
