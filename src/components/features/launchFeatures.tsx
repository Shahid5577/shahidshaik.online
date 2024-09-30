import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type LaunchHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const launchFeatures: LaunchHomeFeatureProps[] = [
  {
    name: "Formation Features",
    description: 
    "Simplify startup formation with Clikkle. Avoid paperwork issues, collaborate with co-founders and attorneys, access a legal dashboard for fundraising and hiring, enjoy bank perks.",
    illistrationUrl: 
    "https://cdn.clikkle.com/images/launch/illustration/launch2.png",
  
  },
  {
    name: "Raise Capital",
    description: 
    "Elevate capital raising with Clikkle. Benefit from a financing checklist, customizable documents, signature escrow, and attorney compatibility for seamless fundraising.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/launch/illustration/launch3.png",
    
  },
  {
    name: "Hiring Features",
    description: 
    "Simplify your hiring process with Clikkle. Utilize managed forms, streamline equity compensation, and ensure attorney compatibility for seamless hiring procedures.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/launch/illustration/launch4.png",
   
  },
  {
    name: "Agreements",
    description: 
    "Safegaurd your business with Clikkle's Non-Disclosure Agreements. Choose from one-way and mutual options to protect your confidential information.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/launch/illustration/launch5.png",
  
  },
  {
    name: "Maintenance",
    description: 
    "Effortlessly maintain your company with Clikkle. Handle charter amendments, name changes, increasing authorized shares, board consents, and director/officer changes.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/launch/illustration/launch6.png",
   
  },
  
];

const LaunchHomeFeature: React.FC<{ launchFeatures: LaunchHomeFeatureProps; left: boolean }> = ({
  launchFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={launchFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 sm: text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {launchFeatures.name}
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
          src={launchFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${launchFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {launchFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {launchFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {launchFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {launchFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
          
            >
              <Link to="https://launch.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
             
            >
              <Link to="https://launch.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchHomeFeature;
