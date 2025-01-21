import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,

} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PropTypes from "prop-types";

const UpdateArticleModal = ({
  openUpdateModal,
  setOpenUpdateModal,
  updateArticleId,
}) => {
  const axiosSecure = useAxiosSecure();

  const { data: article } = useQuery({
    queryKey: ["update-default-article", updateArticleId],
    queryFn: async () => {
      if (open) {
        const { data } = await axiosSecure.get(
          `/update-default-article/${updateArticleId}`
        );
        return data;
      }
    },
  });

  console.log(article);
  return (
    <div>
      
      <Dialog open={openUpdateModal} handler={() => setOpenUpdateModal(false)}>
        <DialogHeader>{article?.title} </DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenUpdateModal(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => setOpenUpdateModal(false)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

UpdateArticleModal.propTypes = {
  openUpdateModal: PropTypes.bool.isRequired,
  setOpenUpdateModal: PropTypes.func.isRequired,
  updateArticleId: PropTypes.string.isRequired,
};

export default UpdateArticleModal;
