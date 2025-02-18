import { Helmet } from "react-helmet";
import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
  const axiosPublic = useAxiosPublic();

  const {data:userCount} = useQuery({
    queryKey : ["user-count"],
    queryFn : async()=>{
       const {data} = await axiosPublic.get('/user-count')
       return data
    }
  })
  const { data: articles = [], isLoading: articlesLoading } = useQuery({
    queryKey: ["published-articles"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/published-articles`);
      return data;
    },
  });

  const { data: publishers = [], isLoading: publishersLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/publisher");
      return data;
    },
  });

  const publisherData = publishers.map((publisher) => {
    const articleCount = articles.filter(
      (article) => article.publisher.name === publisher.name
    ).length;
    return [publisher.name, articleCount];
  });

  const articlesByDate = articles.reduce((acc, article) => {
    const date = new Date(article.createdAt).toISOString().split("T")[0]; 
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const areaChartData = [
    ["Date", "Number of Articles"],
    ...Object.entries(articlesByDate).map(([date, count]) => [date, count]),
  ];

  const pieChartData = [["Publisher", "Number of Articles"], ...publisherData];

  const pieChartOptions = {
    title: "Articles Per Publisher",

    legend: { position: "right", textStyle: { color: "blue", fontSize: 14 } },
    pieSliceText: "value",
    
  };
  const areaChartOptions = {
    title: "Articles Created Over Time",
    hAxis: {
      title: "Date",
      format: "yyyy-MM-dd",
    },
    vAxis: {
      title: "Number of Articles",
    },
    legend: { position: "bottom" },
    areaOpacity: 0.3,
    colors: ["#003366"],
  };

  const barChartData = [
    ["Article", "Views"], 
    ...articles.map((article) => [article.title, article.view]),
  ];

 
  const barChartOptions = {
    title: "Article Views",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Total Views",
      minValue: 0,
    },
    vAxis: {
      title: "Article",
    },
  };
  if(publishersLoading || articlesLoading ){
    return  <Loader/>
  }

  return (
    <div>
      <Helmet>
        <title>Press Point - Dashboard</title>
      </Helmet>

      <div className=" mx-10 mt-8 flex flex-wrap gap-6 ">
        <div  className=" flex gap-5 flex-grow p-6 rounded-md bg-primary-color text-white border-2 w-fit">
          <img className="  w-14" src="https://cdn-icons-png.flaticon.com/128/2965/2965879.png" alt="" />
          <div>
            <h1 className=" text-lg lg:text-2xl font-bold">Total news</h1> 
            <p className=" text-lg">{articles.length}</p>
          </div>
        </div>
        <div  className=" flex gap-5 flex-grow p-6 rounded-md bg-teal-900 text-white border-2 w-fit">
          <img className="  w-14" src="https://cdn-icons-png.flaticon.com/128/3559/3559259.png" alt="" />
          <div>
            <h1 className=" text-lg lg:text-2xl font-bold"> Total Publishers</h1> 
            <p className=" text-lg">{publishers.length}</p>
          </div>
        </div>
        <div  className=" flex gap-5 flex-grow p-6 rounded-md bg-primary-color text-white border-2 w-fit">
          <img className="  w-14" src="https://cdn-icons-png.flaticon.com/128/476/476863.png" alt="" />
          <div>
            <h1 className=" text-lg lg:text-2xl font-bold">Total Users</h1> 
            <p className=" text-lg">{userCount.totalUser}</p>
          </div>
        </div>
      </div>

      <div className=" border-b-2 border-b-primary-color/5 my-5"></div>

      <div className=" flex flex-col lg:flex-row-reverse">
        <div className=" flex-1">
          {articlesLoading || publishersLoading ? (
            <p>Loading...</p>
          ) : (
            <Chart
              chartType="PieChart"
              data={pieChartData}
              options={pieChartOptions}
              width={"100%"}
              height={"400px"}
            />
          )}
        </div>
        <div className=" flex-1">
          {articlesLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <Chart
              chartType="AreaChart"
              data={areaChartData}
              options={areaChartOptions}
              height={"400px"}
              className="mt-6"
            />
          )}
        </div>
        
      </div>
      <div className="mt-6">
          <div>
            {articlesLoading ? (
              <p>Loading articles...</p>
            ) : (
              <Chart
                chartType="Bar"
                data={barChartData}
                options={barChartOptions}
                width={"100%"}
                height={"400px"}
              />
            )}
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
