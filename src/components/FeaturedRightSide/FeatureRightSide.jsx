import { Button } from '@material-tailwind/react';


const FeatureRightSide = () => {
      return (
            <div className=' flex flex-col gap-2 px-3 '>
                 <Button className=" rounded flex gap-2 items-center bg-white text-blue-800" fullWidth> <img className=" w-7 h-7" src="https://static.vecteezy.com/system/resources/previews/042/127/218/non_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png" alt="" />Follow Us on Facebook</Button> 
                 <Button className=" rounded flex gap-2 items-center bg-white text-blue-800" fullWidth> <img className=" w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />Follow Us on Linkedin</Button> 
                 <Button className=" rounded flex gap-2 items-center bg-white text-black" fullWidth> <img className=" w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />Follow Us on Github</Button> 
                 <Button className=" rounded flex gap-2 items-center bg-white text-black" fullWidth> <img className=" w-5 h-5" src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="" />Follow Us on X</Button> 
                 <Button className=" rounded flex gap-2 items-center bg-white text-red-500" fullWidth> <img className=" w-6 h-6" src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />Follow Us on Youtube</Button> 
                 
            </div>
      );
};

export default FeatureRightSide;