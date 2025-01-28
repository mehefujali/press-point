
import { CardFooter, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,

  Typography,
  Button,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet";

const AllUser = () => {
  const [filterdata, setFilter] = useState("all user");
  const axiosSecure = useAxiosSecure();

  const pageSize = 15; 
  const [active, setActive] = useState(1); 

  
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
    data: usersData = {},
    isLoading,
  } = useQuery({
    queryKey: ["users", filterdata, active], 
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/users?filter=${filterdata}&page=${active}&pageSize=${pageSize}`
      );
      return data;
    },
  });

  const { users = [], totalPages = 1 } = usersData;

  
  const handleFilterUser = (e) => {
    const filter = e.target.value;
    setFilter(filter);
  };

  useEffect(() => {
    refetch(); 
  }, [filterdata, active, refetch]);

  const handleMakeAdmin = async (email, name) => {
    const { data } = await axiosSecure.patch(`/user/admin/${email}`);
    refetch();
    if (data.modifiedCount) {
      toast.success(`${name} is now an admin`);
    }
  };

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <div className=" px-4">
      <Helmet>
        <title>Dashboard | all Users</title>
      </Helmet>
      <Card className="h-full w-full  px-4 shadow-none">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row"></div>
          </div>
          <div className="flex border-b-2 pb-3 flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <select
                name=""
                id=""
                className=" px-5 py-2 rounded border-primary-color border-2 "
                onChange={handleFilterUser}
              >
                <option value="all user">All Users</option>
                <option value="users">Users</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="w-full md:w-72">
              <div>
                <Typography
                  variant="h5"
                  className=" first-letter:capitalize text-primary-color"
                >
                  {filterdata}
                </Typography>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" overflow-auto px-0">
          <table className="w-full min-w-max table-auto text-left ">
            <thead className=" text-primary-color">
              <th>#</th>

              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody className="">
              {users?.map((user, idx) => (
                <tr
                  key={user?._id}
                  className={`${idx % 2 === 1 && "bg-primary-color/5"} `}
                >
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Avatar src={user?.photo} alt={user?.name} size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user?.name}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user?.email}
                      </Typography>
                    </div>
                  </td>
                  <td className=" text-center">
                    <div className="w-max text-center justify-center">
                      {user?.role === "admin" ? (
                        <h1 className=" flex items-center gap-1 text-primary-color">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                            />
                          </svg>
                          Admin
                        </h1>
                      ) : (
                        <Button
                          onClick={() =>
                            handleMakeAdmin(user?.email, user?.name)
                          }
                          size="sm"
                          className=" rounded bg-primary-color"
                        >
                          Make admin
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-between items-center overflow-x-auto">
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <IconButton
                color="#003366"
                className=" p-0"
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default AllUser;
