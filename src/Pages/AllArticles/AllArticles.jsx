import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ScrollRestoration } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [searchKey , setSearchKey ] = useState('')

  const {refetch, data: articles = [], isLoading } = useQuery({
    queryKey: ["published-articles" ],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/publishd-articles?search=${searchKey}`);
      return data;
    },
  });

  const handleSearch = (key) =>{
       setSearchKey(key)
       refetch()

  }

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
        <div className=" flex flex-col md:flex-row md:justify-between w-11/12 md:w-full mx-auto items-center justify-start ">
          <h3 className=" text-sm md:text-xl xl:text-2xl text-center  border-l-4 border-primary-color hidden md:block pl-2 ">
            All article
          </h3>
          <div>
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

              <Input onChange={(e)=>handleSearch(e.target.value)} size="md" label="search..." className=" rounded pr-8" />
            </div>
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
