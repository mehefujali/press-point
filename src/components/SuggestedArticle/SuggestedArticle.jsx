import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SuggestedArticle = () => {
  const axiosPublic = useAxiosPublic()
  const [tag] = useState('movement')
  const { data: articles = [] } = useQuery({
    queryKey: ["suggested-article"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/tag-article/${tag}`);
      return data;
    },
  });

  return (
    <div>
      <h3 className=" first-letter:capitalize  px-2 text-xl font-bold my-6  border-l-4 border-red-500">
      {tag}
      </h3>
      <div className=" grid  grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
        {articles?.map((article) => (
          <FeaturedCard key={article._id} news={article} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedArticle;
