import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" container mx-auto my-14  w-11/12 lg:w-full">
       <h1 className=" text-xl md:text-2xl xl:text-3xl font-bold">Frequently Asked Questions (FAQ)</h1>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className=" text-lg md:text-xl xl:text-2xl">
          1. What is Press Point?
        </AccordionHeader>
        <AccordionBody>
          Press Point is a comprehensive news aggregation platform that provides
          users with the latest trending articles, premium content, and a space
          to engage in discussions. We aim to revolutionize how people consume
          news by offering a seamless, user-friendly experience across devices.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className=" text-lg md:text-xl xl:text-2xl">
          2. How do I create an account?
        </AccordionHeader>
        <AccordionBody>
          To create an account, click on the Sign Up button on the top-right
          corner of the homepage. Fill in your details such as name, email, and
          password, and you’ll be ready to access all the features of the
          website. You can also sign up using your Google or Facebook account
          for quicker registration.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className=" text-lg md:text-xl xl:text-2xl">
          3. How do I log in?
        </AccordionHeader>
        <AccordionBody>
          Once you’ve created an account, click on the Login button on the
          top-right corner of the homepage. Enter your credentials (email and
          password) to log in. If you’ve forgotten your password, use the Forgot
          Password option to reset it.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className=" text-lg md:text-xl xl:text-2xl">
        4. What is the difference between free and premium users?
        </AccordionHeader>
        <AccordionBody>
        Free Users: Have access to general articles and content available on the platform.
        Premium Users: Enjoy exclusive access to premium articles, in-depth reports, and additional features. You can subscribe to the premium plan by visiting the Subscription page.
        </AccordionBody>
      </Accordion>
    </div>
  );
};
FAQ.porpTypes = {
      id : PropTypes.number.isRequired ,
      open: PropTypes.bool.isRequired    
}

export default FAQ;
