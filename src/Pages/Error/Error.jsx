import { Link } from "react-router-dom";


const Error = () => {
      return (
            <div className=" h-screen w-screen flex justify-center items-center">
                   <div className=" text-center flex flex-col items-center justify-center gap-3">
                   <h1 className=" text-4xl">404 | Not found</h1>
                   <Link to="/" className=" flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
Back to home</Link>
                   </div>
            </div>
      );
};

export default Error;