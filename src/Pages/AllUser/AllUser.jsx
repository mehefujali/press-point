import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,

} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const AllUser = () => {
  const [filterdata,setFilter] = useState('all-user')
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] , isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?filter=${filterdata}`);
      return data;
    },
    
  });
  const handleMakeAdmin = async (email, name) => {
    const { data } = await axiosSecure.patch(`/user/admin/${email}`);
    refetch();
    if (data.modifiedCount) {
      toast.success(`${name} is admin now`);
    }
  };
  const handleFilterUser = (e) => {
      const filter = e.target.value;
      setFilter(filter); 
    };
  
    
    useEffect(() => {
      refetch();
    }, [filterdata]);

//   console.log(users)
  return (
    <div className=" px-4">
      <Card className="h-full w-full  px-4 shadow-none">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5"  className=" first-letter:capitalize text-primary-color">
                {filterdata}
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information and manage about {filterdata}
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row"></div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <select name="" id=""  className=" px-5 py-2 rounded border-primary-color border-2 " onChange={handleFilterUser} >
                <option value="all user" >All Users</option>
                <option value="users">Users</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" overflow-auto px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left ">
            <thead className=" text-primary-color">
              <th>#</th>

              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody className="">
              {users?.map((user, idx) => (
                <tr key={user?._id} className="">
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
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default AllUser;
