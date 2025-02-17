import { Spinner } from "@material-tailwind/react";

const Loader = () => {
      return (
            <div className=" min-h-[calc(100vh-350px)] w-full flex justify-center items-center">
                  <Spinner className="h-12 w-12" />
            </div>
      );
};

export default Loader;