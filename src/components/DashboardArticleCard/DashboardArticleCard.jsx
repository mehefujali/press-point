import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DeclineModal from "../DeclineModal/DeclineModal";
import { useState } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import Swal from "sweetalert2";

const DashboardArticleCard = ({ news, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [open, setOpen] = useState(false);
  const handlePublish = () => {
    axiosSecure
      .patch(`/article/publish/${news._id}`)
      .then(() => {
        toast.success(`${news.title} Published`);
        refetch();
      })
      .catch(() => {
        toast.error("Somthing is wrong");
      });
  };

  const handleDecline = (reason) => {
    axiosSecure
      .patch(`/article/decline/${news._id}`, { reason: reason })
      .then(() => {
        setOpen(false);
        toast.success(`${news.title} Declined`);
        refetch();
      })
      .catch(() => {
        toast.error("Somthing is wrong");
      });
  };
  const handleMakePremium = () => {
    axiosSecure
      .patch(`/article/premium/${news._id}`)
      .then(() => {
        setOpen(false);
        toast.success(`${news.title} is premium now`);
        refetch();
      })
      .catch(() => {
        toast.error("Somthing is wrong");
      });
  };

  const handleDeleteArticle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this article?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#003366",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-article/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your article has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  return (
    <div>
      <DeclineModal
        open={open}
        setOpen={setOpen}
        handleDecline={handleDecline}
      />
      <div>
        <div className=" text-start shadow-md flex flex-col md:flex-row bg-white  rounded relative overflow-hidden border-2 ">
          <div className="text-sm absolute right-2 top-1 ">
            {/* <Chip
                
                  color="red"
                  size="sm"
                  value="Trending"
                  className="bg-white text-red-800"
                  icon={
                    <span className="mx-auto mt-1 block h-2 w-2 rounded-full  bg-red-800 content-['']" />
                  }
                /> */}
          </div>
          <Link to={`/article-details/${news._id}`} className=" w-fit">
            <img
              className="  w-full h-full md:w-64 xl:w-80"
              src={news?.image}
              alt=""
            />
          </Link>
          <div className="p-3 flex gap-2  flex-col lg:gap-1  justify-between ">
            <Link to={`/article-details/${news._id}`} className=" w-fit">
              <h3 className=" font-semibold text-sm md:text-xl flex items-center">
                {news?.title}{" "}
              </h3>
            </Link>

            <div className=" flex items-center gap-1">
              <p className=" text-nowrapa text-xs md:text-sm font-medium ">
                {news?.publisher?.name}
              </p>
            </div>

            <div className=" flex items-center gap-1">
              <img
                className="h-6 w-6 rounded-full"
                src={news?.author?.photo}
                alt=""
              />

              <p className=" text-nowrapa text-xs md:text-sm font-medium ">
                {news?.author?.name}
              </p>
            </div>

            <p className=" flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {news?.author?.email}
            </p>
            <p className=" flex items-center gap-2 ">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              {format(new Date(news.createdAt), "MM/dd/yyyy")}
            </p>
            {news?.status === "published" ? (
              <p className="flex items-center text-green-700">
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
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                Approved
              </p>
            ) : news.status === "decline" ? (
              <p className=" text-xs md:text-sm flex items-center gap-1 text-red-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                Declined
              </p>
            ) : (
              <p className=" text-xs md:text-sm flex items-center gap-1 text-yellow-900">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Pending
              </p>
            )}
            {news.declineReason && (
              <p className=" text-xs md:text-sm flex items-center gap-1 text-red-500">
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
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                {news?.declineReason}
              </p>
            )}
            <div className="  flex flex-col md:flex-row gap-2">
              <Button
                disabled={news.status === "published"}
                onClick={handlePublish}
                size="sm"
                variant=""
                className="flex items-center gap-3 rounded bg-green-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {news.status === "published" ? "Approved" : "Approve"}
              </Button>
              <Button
                disabled={news.status === "decline"}
                onClick={() => setOpen(true)}
                size="sm"
                className="flex rounded items-center gap-3 bg-yellow-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                {news.status === "decline" ? "Declined" : "decline"}
              </Button>
              <Button
                onClick={() => handleDeleteArticle(news._id)}
                size="sm"
                className="flex rounded items-center gap-3 bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Delete{" "}
              </Button>
              <Button
               disabled={news.isPremium}
                onClick={handleMakePremium}
                size="sm"
                className="flex rounded items-center gap-3 bg-golden-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                make premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardArticleCard.propTypes = {
  news: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default DashboardArticleCard;
