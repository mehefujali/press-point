import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeModalSub = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog size="xs" open={open} handler={setOpen}>
        <DialogHeader className=" text-center">
          Get Premium Subscription
        </DialogHeader>
        <DialogBody>
          Subscribe now to enjoy exclusive features. Choose your preferred
          package and get access to premium content
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Link to="/subscription">
            <Button
              className=" bg-primary-color rounded"
              onClick={() => setOpen(false)}
            >
              Confirm
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

HomeModalSub.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default HomeModalSub;
