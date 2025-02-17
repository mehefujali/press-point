const About = () => {
  return (
    <div className="container mx-auto w-11/12 lg:w-full ">
      <h1 className="  text-2xl font-bold text-center my-8">About Us</h1>
      <div className="  grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className=" col-span-2">
          <img src="https://i.imgur.com/IxnzsUK.png" alt="" />
        </div>
        <div className=" col-span-3">
          <p>
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
    </div>
  );
};

export default About;
