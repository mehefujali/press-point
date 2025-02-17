const About = () => {
  return (
    <div className="container mx-auto w-11/12 lg:w-full ">
      <h1 className="  text-2xl font-bold text-center my-8">About Us</h1>
      <div className="  grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className=" col-span-2">
          <img src="https://i.imgur.com/IxnzsUK.png" alt="" />
        </div>
        <div className=" col-span-3">
          <p className=" first-letter:text-4xl">
            Welcome to Press Point, your ultimate destination for the latest
            news, trending articles, and exclusive insights. We are a
            cutting-edge tech company driven by the goal of transforming the way
            news is consumed. At Press Point, we believe in delivering the most
            relevant, real-time news stories and thought-provoking content, all
            while providing an exceptional and seamless user experience. Our
            mission is to provide you with an engaging and personalized news
            experience. Whether you&apos;re looking for the latest updates,
            in-depth articles, or exclusive premium content, Press Point offers
            something for everyone. From global events to local stories, we
            strive to bring you the news that matters most.
          </p>
        </div>
      </div>
      <div className=" my-14">
        <h1 className=" text-2xl font-semibold my-5">Our Vision</h1>
        <p>
          At Press Point, we aim to create an all-in-one news aggregation
          platform that not only showcases trending articles but also offers
          premium content and features. We focus on delivering high-quality news
          with a user-friendly interface, making it easier than ever for you to
          stay informed, no matter where you are.
        </p>
      </div>
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

export default About;
