import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";
import card1 from './images/group9.png';
import card2 from './images/Group10.png';
import card3 from './images/group12.png';
import card4 from './images/group13.png';

export type SwiprrHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;
 
};

export const swiprrFeatures: SwiprrHomeFeatureProps[] = [
  {
    name: "Connecting with Like-minded Individuals",
    description: "Attain Your Dating Desires, No Apologies Needed. Casual Conversations? Absolutely Fine. Seeking Commitment? Wonderful. Your Choices are Always Yours.",
   illistrationUrl: card1,
   
  },
  {
    name: "Ready, Set, Connect",
    description: "Feel free to start chatting right away, without waiting for a match, Engage in conversations that delve deeper, skipping to the meaningful parts where you truly connect and understand each other.",
   illistrationUrl: card2,
   
  },
  {
    name: "We Prioritize Your Safety",
    description: "We prioritize your safety above all else. Our platform uses enhanced system AI to ensure that all your conversations are well secured and confidential.",
   illistrationUrl: card3,
   
  },
  {
    name: "Mastering Our Craft",
    description: "Be rest assured, you're at the right place. We've united countless millions of people in times past.",
   illistrationUrl: card4,
   
  },
  
  
  
];

const SwiprrHomeFeature: React.FC<{ swiprrFeatures: SwiprrHomeFeatureProps; left: boolean }> = ({
  swiprrFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={swiprrFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {swiprrFeatures.name}
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
          src={swiprrFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(110vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${swiprrFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "2.0rem" }}
            >
              {swiprrFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "0.8rem" }}
            >
              {swiprrFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.0rem" }}
          >
            {swiprrFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {swiprrFeatures.description}
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

export default SwiprrHomeFeature;
