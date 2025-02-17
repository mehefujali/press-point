
import { Navigate, ScrollRestoration } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet";
import usePremiumUser from "../../Hooks/usePremiumUser";

const PremiumArticle = () => {
  const axiosSecure = useAxiosSecure();
  const {isPremiumUser,isPremiumLoading} = usePremiumUser()
  
  const {data:premiumArticle,isLoading} = useQuery({
    queryKey:["primium-articles"],
    queryFn: async()=>{
     const {data} = await axiosSecure.get('/premium-articles')
      return  data
    }
  })

  if(isLoading||isPremiumLoading){
    return <Loader/>
  }
  if(!isPremiumUser){
      return <Navigate to="/" replace></Navigate>
  }
  return (
    <div className="container mx-auto mt-6">
      <Helmet>
        <title>Press point - Premium article</title>
      </Helmet>
      <ScrollRestoration/>
      <h3 className=" text-xl border-l-4 border-golden-color pl-2 text-golden-color ">
        Premium articles
      </h3>
      <div className="  mx-auto w-11/12 md:w-full flex flex-col gap-4 mt-6">
        {premiumArticle?.map((news) => (
          <ArticleCard key={news._id} news={news} premium={true} />
        ))}
      </div>
    </div>
  );
};

export default PremiumArticle;
