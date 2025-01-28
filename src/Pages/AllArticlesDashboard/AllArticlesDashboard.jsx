import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardArticleCard from "../../components/DashboardArticleCard/DashboardArticleCard";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const AllArticlesDashboard = () => {
  const axiosSecure = useAxiosSecure();

  
  const [active, setActive] = useState(1); 
  const pageSize = 5; 

  
  const prev = () => {
    if (active === 1) return; 
    setActive(active - 1); 
  };

  
  const next = () => {
    if (active === totalPages) return; 
    setActive(active + 1); 
  };

  
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text", 
    color: "gray",
    onClick: () => setActive(index), 
  });

  const {
    refetch,
    data: articlesData = {},
    isLoading,
  } = useQuery({
    queryKey: ["articles", active], 
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/articles?page=${active}&pageSize=${pageSize}`);
      return data;
    },
  });

  const { articles = [], totalPages } = articlesData; 

  useEffect(() => {
    refetch(); 
  }, [active, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 relative">
      <Helmet>
        <title>Dashboard | All Articles</title>
      </Helmet>
      <div className="sticky py-4 top-0 z-50 w-full bg-white">
        <div className="flex justify-between w-11/12 md:w-full mx-auto">
          <h3 className="text-xl border-l-4 border-primary-color pl-2">
            All Articles
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <DashboardArticleCard
            key={article._id}
            news={article}
            refetch={refetch}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4 overflow-x-auto">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>

        {/* Page Number Buttons */}
        <div className="flex items-center gap-2 ">
          {Array.from({ length: totalPages }).map((_, index) => (
            <IconButton
              color="#003366"
              className=""
              key={index}
              {...getItemProps(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>

        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPages}
        >
          Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AllArticlesDashboard;
