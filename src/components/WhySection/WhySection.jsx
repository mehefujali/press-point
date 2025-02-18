const WhySection = () => {
  return (
    <div className=" container mx-auto">
      <h1 className=" text-2xl font-semibold my-14 text-center">
        Why Choose Press Point?
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        <div className=" my-14 p-4 w-full h-full bg-white    text-center flex flex-col items-center justify-center rounded-md">
          <img
            className=" w-20 mx-auto"
            src="https://i.imgur.com/4oVlnQx.png"
            alt=""
          />
          <p className=" text-lg font-semibold">Timely News Updates</p>
          <p>
            Stay ahead with real-time coverage of breaking news and important
            stories.
          </p>
        </div>
        <div className=" my-14 p-4 w-full h-full bg-white    text-center flex flex-col items-center justify-center rounded-md">
          <img
            className=" w-20 mx-auto"
            src="https://i.imgur.com/traGyLI.png"
            alt=""
          />
          <p className=" text-lg font-semibold">Exclusive Premium Content</p>
          <p>
            Unlock in-depth articles, expert analysis, and exclusive reports
            with our premium subscription.
          </p>
        </div>
        <div className=" my-14 p-4 w-full h-full bg-white    text-center flex flex-col items-center justify-center rounded-md">
          <img
            className=" w-20 mx-auto"
            src="https://i.imgur.com/596BGtM.png"
            alt=""
          />
          <p className=" text-lg font-semibold">Responsive Design</p>
          <p>
            Access our platform seamlessly across all devices, ensuring a smooth
            reading experience on mobile, tablet, and desktop.
          </p>
        </div>
        <div className=" my-14 p-4 w-full h-full bg-white    text-center flex flex-col items-center justify-center rounded-md">
          <img
            className=" w-20 mx-auto"
            src="https://i.imgur.com/wspeQas.png"
            alt=""
          />
          <p className=" text-lg font-semibold">Trending Stories</p>
          <p>
            Discover the most-read and shared articles with our interactive
            trending section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
