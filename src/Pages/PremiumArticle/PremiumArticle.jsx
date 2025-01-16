import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const PremiumArticle = () => {
  const axiosSecure = useAxiosSecure();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/articles")
      .then((res) => {
        setArticles(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [axiosSecure]);
  return (
    <div className="container mx-auto mt-6">
      <h3 className=" text-xl border-l-4 border-golden-color pl-2 text-golden-color ">
        Premium articles
      </h3>
      <div className="  mx-auto w-11/12 md:w-full flex flex-col gap-4 mt-6">
        {articles.map((news) => (
          <ArticleCard key={news._id} news={news} premium={true} />
        ))}
      </div>
    </div>
  );
};

export default PremiumArticle;
