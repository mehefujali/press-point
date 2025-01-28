
import { Typography, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import toast from "react-hot-toast";


const TestCard = () => {
      const [, copy] = useCopyToClipboard();
     
     
      return (
        <Button
        variant="text"
          
          onClick={() => {
            copy("5555050360000080");
            toast.success('card number copied!')
            
          }}
          className="flex items-center px-0 mx-0 mt-6  py-2.5 lowercase text-[#bec4ce]"
        >
          <Typography
            className=" font-normal text-start "
            variant="small"
          >
            5555 0503 6000 0080
          </Typography>
         
        </Button>
      );
};

export default TestCard;
