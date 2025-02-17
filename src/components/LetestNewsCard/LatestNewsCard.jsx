import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const LatestNewsCard = () => {
  const axiosPublic = useAxiosPublic()
  const { data: news = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/latest-articles`);
      return data;
    },
  });
  const { data: topViewd = [] } = useQuery({
    queryKey: ["top-viewd"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/top-viewed`);
      return data;
    },
  });

  const latest_article = news[0];
  const topViewdArticle = topViewd[0]

  

  return (
    <div className=" mt-4 flex  mx-auto flex-col md:flex-row gap-5 ">
      <div
        className=" md:w-8/12 flex min-h-72  items-end justify-start p-2 md:p-8  bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, black,transparent), url(${latest_article?.image})`,
        }}
      >
        <Link
          to={`/article-details/${latest_article?._id}`}
          className="text-white"
        >
          <h1 className=" text-lg md:text-2xl  font-semibold">{latest_article?.title}</h1>
          <p className=" font-light text-xs md:text-sm">
            {latest_article?.description?.slice(0, 100)} . . . Read more
          </p> 
        </Link>
      </div>
      <div className=" md:w-4/12 h-full">
        <FeaturedCard news={topViewdArticle} />
      </div>
    </div>
  );
};

export default LatestNewsCard;
