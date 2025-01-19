import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const LatestNewsCard = () => {
  const axiosSecure = useAxiosSecure();
  const { data: news = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/latest-articles`);
      return data;
    },
  });
  const { data: topViewd = [] } = useQuery({
    queryKey: ["top-viewd"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/top-viewed`);
      return data;
    },
  });

  const latest_article = news[0];
  const topViewdArticle = topViewd[0]

  console.log(topViewd)

  return (
    <div className=" mt-4 flex gap-5 ">
      <div
        className=" w-8/12 flex items-end justify-start p-8  bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, black, transparent), url(${latest_article?.image})`,
        }}
      >
        <Link
          to={`/article-details/${latest_article?._id}`}
          className="text-white"
        >
          <h1 className=" text-2xl  font-semibold">{latest_article?.title}</h1>
          <p className=" font-light">
            {latest_article?.description.slice(0, 100)}
          </p>
        </Link>
      </div>
      <div className=" w-4/12 h-full">
        <FeaturedCard news={topViewdArticle} />
      </div>
    </div>
  );
};

export default LatestNewsCard;
