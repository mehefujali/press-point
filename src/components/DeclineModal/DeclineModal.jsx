import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  
  Textarea,
  Typography,
} from "@material-tailwind/react";
import {  useState } from "react";

const DeclineModal = ({ open, setOpen, handleDecline }) => {
  const [reason, setReason] = useState(null);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4" color="red">
              Decline Justification
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <Textarea onKeyUp={(e)=>setReason(e.target.value)} label="Justification" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button
            className=" bg-red-700 rounded"
            onClick={() => {
              handleDecline(reason);
            }}
          >
            Decline
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DeclineModal;
