import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardArticleCard from "../../components/DashboardArticleCard/DashboardArticleCard";


const AllArticlesDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const {refetch, data: articles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/articles");
      return data;
    },
  });
  return (
    <div className="p-4">
      <div className=" flex flex-col gap-4">
        {articles.map((article) => (
          <DashboardArticleCard key={article._id} news={article} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllArticlesDashboard;
