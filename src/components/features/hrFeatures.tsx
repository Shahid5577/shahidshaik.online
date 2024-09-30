import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type HrHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const hrFeatures: HrHomeFeatureProps[] = [
  {
    name: "Streamlining the management of HR processes",
    description: 
    "Clikkle HR simplifies the handling of tasks, reducing complexities in managing diverse HR functions by centralizing and automating HR operations. This helps to enhance productivity.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/hr/illustrations/img%202.png",

  },
  {
    name: "Analyzing and reporting on human resources data",
    description: 
    "Clikkle HR uses data to help organizations make informed decisions about hiring, training, and retaining employees by drawing insights from data patterns and trends.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/hr/illustrations/img%203.png",

  },
  {
    name: "Digitalized employee records eliminating paper usage",
    description: 
    "Clikkle HR minimizes clutter, enhances accessibility, and promotes eco-friendly practices within HR operations by transitioning to an electronic format.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/hr/illustrations/img%204.png",

  },
  {
    name: "Simplified HR and personnel administration",
    description: 
    "Clikkle HR is designed to optimize and simplify the handling of HR and personnel tasks, ensuring a more efficient and straight forward administration process.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/hr/illustrations/img%205.png",

  },
  {
    name: "HR Resources to get you started",
    description: 
    "Clikkle HR equips users with a comprehensive set of resources, including templates, guides, and tutorials, aimed at initiating and guiding HR process efficiently.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/hr/illustrations/img%206.png",

  },
  
  
  
];

const HrHomeFeature: React.FC<{ hrFeatures: HrHomeFeatureProps; left: boolean }> = ({
  hrFeatures,
  left,
}) => {
  

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={hrFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {hrFeatures.name}
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
          src={hrFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${hrFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {hrFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {hrFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {hrFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {hrFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
              <Link to="https://hr.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
              <Link to="https://hr.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrHomeFeature;
