import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/article/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [axiosSecure, id]);

  console.log(article);
  return (
    <div>
      <div className=" container mx-auto mt-14">
            <div className=" xl:w-9/12 mx-auto space-y-4">
            <h1 className=" text-3xl font-semibold">{article?.title}</h1>
            <img src={article?.image} alt="" />
            </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
