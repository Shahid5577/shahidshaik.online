import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type CrewHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const crewFeatures: CrewHomeFeatureProps[] = [
  {
    name: "Meet on any device, anywhere",
    description: 
    "Guests can join from their computer using any modern web browser-no software to install. On mobile devices, they can join from the Clikkle Crew app.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/IMG_2737.JPG",

  },
  {
    name: "Meet clearly",
    description: 
    "Clikkle Crew adjusts to your network speed, ensuring high quality video calls whenever you are. New AI enhancements keep your calls clear even when your surroundings aren't.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/Rectangle%209%20(1).png",
 
  },
  {
    name: "Meet Safely",
    description: 
    "Crew uses the same protections that Clikkle uses to secure your information and safeguard your privacy. Crew video conferences are encrypted in transit, and our array of safety measures are continuously updated for added protection.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/Rectangle%208%20(1).png",

  },
  {
    name: "Meet from anywhere",
    description: 
    "Get the whole crew together in Clikkle Crew, where you can present business proposals, collaborate on chemistry assignments, or just catch up face to face.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/Rectangle%209%20(2).png",
  
  },
  {
    name: "Meet Everyone",
    description: 
    "With live captions powered by Clikkle's speech recognition technology, Clikkle Crew makes meetings more accessible. For non-native speakers, hearing impaired participants.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/Rectangle%209%20(3).png",

  },
  
  
  
];

const CrewHomeFeature: React.FC<{ crewFeatures: CrewHomeFeatureProps; left: boolean }> = ({
  crewFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={crewFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {crewFeatures.name}
        <div className="flex items-center justify-center mt-1 animate-bounce" onClick={handleScroll}>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </h6>
      <div
        className={`w-full sm:mt-4 pt-14 flex flex-col sm:flex-row items-center justify-between gap-16 p-2 ${
          left ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        <img
          src={crewFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${crewFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {crewFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {crewFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {crewFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {crewFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
              <Link to="https://crew.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
  
            >
              <Link to="https://crew.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewHomeFeature;
