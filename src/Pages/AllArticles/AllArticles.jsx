
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ScrollRestoration } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic()
  

  const {data : articles = [] , isLoading } = useQuery({
    queryKey: ["published-articles"],
    queryFn: async () =>{
      const  {data} = await axiosPublic.get("/publishd-articles")
      return data
    }
  })
  if(isLoading){
    return <Loader/>
  }
  return (
    <div className="container mx-auto mt-6">
      <ScrollRestoration/>
      <div className=" sticky  py-3 px-2 top-[63px] z-50 w-full bg-white">
        <div className=" flex justify-between w-11/12 md:w-full mx-auto  ">
          <h3 className=" text-xl border-l-4 border-primary-color pl-2 ">
            All article
          </h3>
          <div>
            <label
              className=" text-sm border rounded-md p-2 bg-white"
              htmlFor=".filter-select"
            >
              Short by :
              <select
                name=""
                id=""
                className=" md:px-3 filter-select select select-sm  focus:border-none focus:outline-none"
              >
                <option value="All">New</option>
                <option value="Easy">Old</option>
                <option value="Medium">Top viewd</option>
              </select>
            </label>
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
