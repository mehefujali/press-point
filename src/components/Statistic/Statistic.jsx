import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Statistic = () => {
  const axiosPublic = useAxiosPublic()
  const {data:userCount} = useQuery({
    queryKey : ["user-count"],
    queryFn : async()=>{
       const {data} = await axiosPublic.get('/user-count')
       return data
    }
  })


  return (
    <div className=" my-14">
      <div className=" container bg-white mx-auto min-h-96 flex  flex-col gap-4 md:flex-row items-center justify-around">
        <div className="  bg-white p-7 rounded-md  flex flex-col justify-center items-center">
          <img className=" w-20 md:w-28 h-20 md:h-28" src="https://i.ibb.co/VWmwzL6/all-user.png" alt="" />
          <h4 className=" text-2xl my-2 font-semibold">Total users</h4>
          <h1 className=" text-6xl text-primary-color font-bold">
            
            <CountUp  delay={2} end={userCount.totalUser} /></h1>
        </div>
        <div className="  bg-white p-7 rounded-md  flex flex-col justify-center items-center">
          <img className=" w-20 md:w-28 h-20 md:h-28" src="https://i.ibb.co/fx1SR1s/free-user.png" alt="" />
          <h4 className=" text-2xl my-2 font-semibold">Free Users</h4>
          <h1 className=" text-6xl text-primary-color font-bold">
            
            <CountUp  delay={2} end={userCount.freeUserCount} /></h1>
        </div>
        <div className="  bg-white p-7 rounded-md  flex flex-col justify-center items-center">
          <img className=" w-20 md:w-28 h-20 md:h-28" src="https://i.ibb.co/yNNmB9N/primium-user.png" alt="" />
          <h4 className=" text-2xl my-2 font-semibold">Primium Users</h4>
          <h1 className=" text-6xl text-primary-color font-bold">
            
            <CountUp  delay={2} end={userCount.premiumUserCount} /></h1>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
