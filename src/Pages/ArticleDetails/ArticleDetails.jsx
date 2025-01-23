import { Link, Navigate, ScrollRestoration, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SocalLinks from "../../components/SocalLinks/SocalLinks";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet";
import usePremiumUser from "../../Hooks/usePremiumUser";

const ArticleDetails = () => {
  const { id } = useParams();
  const {isPremiumUser,isPremiumLoading} = usePremiumUser()
  const axiosSecure = useAxiosSecure();
  const { data: article = {}, isLoading } = useQuery({
    queryKey: ["article-details", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`article/${id}`);
      return data;
    },
  });
  const { data: suggestarticles = [] , isLoading:sugIsLoding } = useQuery({
    queryKey: ["suggested-article-indetails"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/tag-article/${article.tags[0]}`);
      return data;
    },
  });



  if (isLoading||isPremiumLoading) {
    return <Loader />;
  }
  if(article.isPremium && !isPremiumUser){
    return <Navigate to="/" replace/>
  }
  return (
    <div className=" pb-14">
      <Helmet>
        <title>Press point - {article.title}</title>
      </Helmet>
      <ScrollRestoration />
      <div className=" w-11/12 md:w-full container mx-auto my-14 flex flex-col md:flex-row gap-5 relative">
        <div className=" md:w-8/12 mx-auto space-y-4">
          <h1 className=" text-lg md:text-xl lg:text-2xl  xl:text-3xl font-semibold flex items-start gap-1">
            <span className="  text-primary-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" size-5 md:size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </span>
            {article?.title}
          </h1>
          <div className="border-b-2 border-primary-color border-opacity-15"></div>
          <img className=" w-full rounded" src={article?.image} alt="" />
          <div className=" flex items-center gap-1">
            <img
              className=" w-8 h-8 md:h-10 md:w-10 rounded-full"
              src={article?.publisher?.logo}
              alt=""
            />
            <p className=" text-nowrap md:text-lg xl:text-xl font-semibold  ">
              {article?.publisher?.name}
            </p>
          </div>
          <p className=" text-sm md:text-lg text-justify first-letter:text-3xl whitespace-pre-wrap">
            {article.description}
          </p>

          <div>
            <p className=" flex flex-wrap gap-2">
              {article?.tags?.map((tag, idx) => (
                <p
                  key={idx}
                  className=" bg-primary-color bg-opacity-10 text-primary-color px-1 rounded-sm"
                >
                  #{tag}
                </p>
              ))}
            </p>
          </div>
        </div>
        <div className=" md:w-3/12 sticky top-[63px] h-fit">
          <SocalLinks />
          {!sugIsLoding&&<div className=" w-11/12 mx-auto mt-2 flex flex-col gap-2">
            {suggestarticles.slice(0,3)?.map((article) => (
              <Link
                key={article._id}
                to={`/article-details/${article?._id}`}
                className="text-white"
              >
                <div
                  className="  flex  min-h-32  items-end justify-start p-2 rounded  bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(0deg, black,transparent), url(${article?.image})`,
                  }}
                >
                  <h1 className=" text-sm   font-semibold">{article?.title}</h1>
                </div>
              </Link>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
