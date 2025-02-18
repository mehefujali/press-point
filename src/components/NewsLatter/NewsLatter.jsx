
import './newslatter.css'

import toast from 'react-hot-toast';

const Newslatter = () => {


      const handleNewsLatterSignIn = (e) => {
            e.preventDefault();
            toast.success("Newsletter subscription successful!")
            e.target.reset()

      };


      return (
            <div className=" my-14">
                  <div className=" container mx-auto h-96 bg-indigo-700 w-full  flex items-center justify-center text-center md:rounded-xl" id="newslater-contenar">
                        <div className=" space-y-3  w-11/12 mx-auto md:w-full">
                              <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">Subscribe our newsletter</h1>
                              <p className=" text-gray-50 max-w-2xl mx-auto">Never miss out on the latest news, trending articles, and exclusive content. Subscribe to our newsletter and get regular updates directly to your inbox.</p>
                              <form onSubmit={handleNewsLatterSignIn} className="  flex items-center justify-center ">
                                    <input required placeholder='Enter your email' type="email" name="email" id="" className="input rounded-l px-4 py-3 w-32 md:w-6/12 lg:w-4/12  focus:outline-none focus:border-none" />
                                    <button className=" text-white py-3 px-4 rounded-r bg-primary-color ">Subscribe</button>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Newslatter;