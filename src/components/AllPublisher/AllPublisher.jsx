import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Marquee from "react-fast-marquee";

const AllPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const { data: publishers = [] } = useQuery({
    queryKey: ["all-publisher"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/publisher");
      return data;
    },
  });
  return (
    <div className=" container mx-auto ">
      <div className=" w-11/12 mx-auto">
        <h3 className=" first-letter:capitalize  px-2 text-xl font-bold my-6  border-l-4 border-red-500">
          All Publisher
        </h3>
      </div>
      <div className=" hidden md:flex">
        <Marquee
          className="   "
          pauseOnHover
          gradient={true}
          gradientWidth={300}
          gradientColor="#F2F5F7"
        >
          {publishers?.map((publiser) => (
            <div
              key={publiser._id}
              className=" mr-6 flex flex-col items-center justify-center"
            >
              <img className=" w-20 h-20" src={publiser.logo} alt="" />{" "}
              <h1>{publiser?.name}</h1>
            </div>
          ))}
        </Marquee>
      </div>
      <div className=" md:hidden">
        <Marquee className=" md:hid  " pauseOnHover gradientColor="#F2F5F7">
          {publishers?.map((publiser) => (
            <div
              key={publiser._id}
              className=" mr-6 flex flex-col items-center justify-center"
            >
              <img className=" w-14 h-14" src={publiser.logo} alt="" />{" "}
              <h1>{publiser?.name}</h1>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AllPublisher;
