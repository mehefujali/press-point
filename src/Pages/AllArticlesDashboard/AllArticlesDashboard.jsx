import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardArticleCard from "../../components/DashboardArticleCard/DashboardArticleCard";

const AllArticlesDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: articles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/articles");
      return data;
    },
  });
  return (
    <div className="p-4">
      <div className=" flex justify-between w-11/12 md:w-full mx-auto my-4">
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
      <div className=" flex flex-col gap-4">
        {articles.map((article) => (
          <DashboardArticleCard
            key={article._id}
            news={article}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default AllArticlesDashboard;
