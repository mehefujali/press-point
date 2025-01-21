import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import UpdateArticleModal from "../../components/UpdateArticleModal/UpdateArticleModal";
import Swal from "sweetalert2";

const MyArticles = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [openReasonModal, setOpenReasonModal] = useState(false);
  const [openReason, setOpenReason] = useState("");
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateArticleId, setUpdateArticleId] = useState("");
  const { refetch : refetchMyarticle, data: myArticles = [] } = useQuery({
    queryKey: ["my-articles"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-article/${user.email}`);
      return data;
    },
  });

  // console.log(updateArticleId)

  const handleOpen = (reason) => {
    setOpenReason(reason);
    setOpenReasonModal(true);
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
          refetchMyarticle();
        });
      }
    });
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="   py-3 px-2  w-full ">
        <div className=" flex justify-between w-11/12 md:w-full mx-auto  ">
          <h3 className=" text-xl border-l-4 border-primary-color pl-2 ">
            My articles
          </h3>
          <div></div>
        </div>
      </div>
      <div className="  mx-auto w-11/12 md:w-full flex flex-col gap-4 mt-6">
        <div className=" px-4">
          <Card className="h-full w-full  px-4 shadow-none">
            <CardBody className=" overflow-auto ">
              <table className="mt-4  w-full min-w-max table-auto text-left ">
                <thead className=" text-primary-color border-b-2  border-primary-color/20 ">
                  <th>#</th>

                  <th>Title</th>
                  <th></th>
                  <th className=" text-center">Status</th>
                  <th className=" text-center">Is premium</th>
                  <th></th>
                </thead>
                <tbody className=" mt-3">
                  {myArticles.map((article, idx) => (
                    <tr key={article?._id} className={`${idx%2 === 1 && "bg-primary-color/5"} `}>
                      <td>{idx + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {article?.title}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Link
                          to={`/article-details/${article?._id}`}
                          className=" w-fit"
                        >
                          <Button
                            size="sm"
                            variant="text"
                            className=" rounded flex items-center gap-1"
                          >
                            Details{" "}
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
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </Button>
                        </Link>
                      </td>
                      <td className=" text-center">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {article?.status === "published" ? (
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
                                Published
                              </p>
                            ) : article.status === "decline" ? (
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
                                Decline{" "}
                                <span
                                  className=" cursor-pointer"
                                  onClick={() =>
                                    handleOpen(article?.declineReason)
                                  }
                                >
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
                                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                                    />
                                  </svg>
                                </span>
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
                          </Typography>
                        </div>
                      </td>
                      <td className=" text-center">
                        {article.isPremium ? "Yes" : "No"}
                      </td>
                      <td className=" text-center">
                        <div className="w-max text-center justify-center flex gap-3 items-center">
                          {/* update  */}
                          <IconButton
                            onClick={() => {
                              setUpdateArticleId(article);
                              setOpenUpdateModal(true);
                            }}
                            variant="text"
                            className=" rounded"
                          >
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </IconButton>
                          <IconButton
                            onClick={() => handleDeleteArticle(article._id)}
                            variant="text"
                            className=" rounded text-red-700"
                          >
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
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </IconButton>
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
      </div>

      {/* decline reason modal  */}
      <Dialog
        open={openReasonModal}
        size={"xs"}
        handler={() => setOpenReasonModal(false)}
      >
        <DialogHeader>Decline reason</DialogHeader>
        <DialogBody className=" teext-lg text-black">{openReason}</DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={() => setOpenReasonModal(false)}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {openUpdateModal && (
        <UpdateArticleModal
        refetchMyarticle={refetchMyarticle}
          openUpdateModal={openUpdateModal}
          setOpenUpdateModal={setOpenUpdateModal}
          updateArticleId={updateArticleId}
        />
      )}
    </div>
  );
};

export default MyArticles;
