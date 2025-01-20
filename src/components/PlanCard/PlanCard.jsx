import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const PlanCard = ({ title, price, features = [], btnText, fill }) => {
  return (
    <div>
      <Card
        color={fill ? "gray" : "white"}
        className={`w-full max-w-[20rem] p-8 ${fill && "bg-primary-color"}`}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="paragraph"
            color={fill && "white"}

            className={`font-normal uppercase ${
              fill ? "text-white" : "text-primary-color"
            }`}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color={fill && "white"}
            className={`mt-3 flex justify-center gap-1 text-4xl font-normal ${
              fill ? "text-white" : "text-primary-color"
            }`}
          >
            <span className="mt-2 text-2xl">$</span>
            {price} <span className="self-end text-2xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <span
                  className={`rounded-full border ${
                    fill
                      ? " border-white/20 bg-white/20"
                      : "bg-primary-color border-white text-white"
                  } p-1`}
                >
                  <CheckIcon />
                </span>
                <Typography className="font-normal text-xs">
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="md"
            color={fill ? "gray" : "white"}
            className={`hover:scale-[1.02] rounded focus:scale-[1.02] active:scale-100 ${
              fill
                ? "bg-white text-primary-color "
                : "bg-primary-color text-white"
            }`}
            ripple={false}
            fullWidth={true}
          >
            {btnText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
PlanCard.propTypes = {
  title: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  features: PropTypes.node.isRequired,
  btnText: PropTypes.node.isRequired,
  fill: PropTypes.node.isRequired,
};

export default PlanCard;
