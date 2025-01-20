import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const AllArticles = () => {
  const axiosSecure = useAxiosSecure();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/publishd-articles")
      .then((res) => {
        setArticles(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [axiosSecure]);
  return (
    <div className="container mx-auto mt-6">
      <div className=" flex justify-between w-11/12 md:w-full mx-auto">
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
      <div className="  mx-auto w-11/12 md:w-full flex flex-col gap-4 mt-6">
        {articles.map((news) => (
          <ArticleCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
