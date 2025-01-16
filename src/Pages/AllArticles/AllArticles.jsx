import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const AllArticles = () => {
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
    <div>
      <div className=" container mx-auto">{
            articles.map(news => <ArticleCard key={news._id} news={news}/>)}</div>
    </div>
  );
};

export default AllArticles;
