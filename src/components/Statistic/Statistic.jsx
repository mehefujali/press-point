import CountUp from "react-countup";

const Statistic = () => {
  return (
    <div className=" my-14">
      <div className=" container bg-white mx-auto min-h-96 flex  flex-col gap-4 md:flex-row items-center justify-around">
        <div className=" w-60 xl:w-96 bg-white p-7 rounded-md  flex flex-col justify-center items-center">
          <img className=" w-28 md:w-44 h-28 md:h-44" src="https://i.ibb.co/VWmwzL6/all-user.png" alt="" />
          <h4 className=" text-2xl my-2 font-semibold">Total users</h4>
          <h1 className=" text-6xl text-primary-color font-bold">
            
            <CountUp  delay={2} end={193} /></h1>
        </div>
        <div className=" w-60 xl:w-96 bg-white p-7 rounded-md  flex flex-col justify-center items-center">
          <img className=" w-28 md:w-44 h-28 md:h-44" src="https://i.ibb.co/fx1SR1s/free-user.png" alt="" />
          <h4 className=" text-2xl my-2 font-semibold">Free Users</h4>
          <h1 className=" text-6xl text-primary-color font-bold">
            
            <CountUp  delay={2} end={193-96} /></h1>
        </div>
        <div className=" w-60 xl:w-96 bg-white p-7 rounded-md  flex flex-col justify-center items-center">
          <img className=" w-28 md:w-44 h-28 md:h-44" src="https://i.ibb.co/yNNmB9N/primium-user.png" alt="" />
          <h4 className=" text-2xl my-2 font-semibold">Primium Users</h4>
          <h1 className=" text-6xl text-primary-color font-bold">
            
            <CountUp  delay={2} end={96} /></h1>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
