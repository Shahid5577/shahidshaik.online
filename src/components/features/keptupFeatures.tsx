import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";



export type KeptUpHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;
 
};

export const keptupFeatures: KeptUpHomeFeatureProps[] = [
  {
    name: "Do the right work at the right time",
    description: "Get automation remainders for tasks designed for your home's unique requirements, ensuring a well-maintained space year-round.",
   illistrationUrl: "",
   
  },
  {
    name: "Get things done confidently",
    description: "Get organized, save time and money, know exactly how to handle each task efficiently, and when to seek professional help.",
   illistrationUrl: "",
   
  },
  {
    name: "The smart way to manage your home.",
    description: "it's free to protect and maintain your most important asset.",
   illistrationUrl: "",
   
  },
  {
    name: "Get things done confidently",
    description: "Get organized, save time and money, know exactly how to handle each task efficiently, and when to seek professional help.",
   illistrationUrl: "",
   
  },
  
];

const KeptUpHomeFeature: React.FC<{ keptupFeatures: KeptUpHomeFeatureProps; left: boolean }> = ({
  keptupFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={keptupFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {keptupFeatures.name}
        <div className="flex items-center justify-center mt-1 animate-bounce" onClick={handleScroll}>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </h6>
      <div
        className={`w-full sm:mt-4 pt-24 flex flex-col sm:flex-row items-center justify-between gap-16 p-2 ${
          left ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        <img
          src={keptupFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(110vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${keptupFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "2.0rem" }}
            >
              {keptupFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "0.8rem" }}
            >
              {keptupFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.0rem" }}
          >
            {keptupFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {keptupFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
              
            >
              <Link to="https://ads.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
              
            >
              <Link to="https://ads.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeptUpHomeFeature;
