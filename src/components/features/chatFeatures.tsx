import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type ChatHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const chatFeatures: ChatHomeFeatureProps[] = [
  {
    name: "Instantly resolve half of your support queries with ease",
    description: 
    "our innovative chatbot harnesses the most advanced language models to autonomously address customer concerns.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/chat/Clikkle%20Chat%20page/robot%20smile.png",

  },
  {
    name: "Streamline Operations",
    description: 
    "Effortlessly automate routine tasks with our visual automation builder. Create robust automations effortlessly using no-code building blocks like bots, triggers, conditions, and rules, empowering both customers and teammates.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/chat/Clikkle%20Chat%20page/pexels-thisisengineering-3861969.jpg",

  },
  {
    name: "24/7 Accessibility",
    description: 
    "Connect with customers anywhere, anytime. Harness the potency of the Intercom platform seamlessly across various channels, borders, and applications.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/chat/Clikkle%20Chat%20page/Ellipse%204.png",
 
  },
  {
    name: "Enhance Customer Satisfaction and Efficiency",
    description: 
    "By harnessing Clikkle's innovative technology, experience a significant decrease in support volumes, boosting efficiency and delighting customers effortlessly.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/chat/Clikkle%20Chat%20page/horizontal-shot-pleasant-looking-black-adult-excited-with-video-chat-carries-up-date-cell-phone-has-broad-smile.png",

  },
  
  
  
];

const ChatHomeFeature: React.FC<{ chatFeatures: ChatHomeFeatureProps; left: boolean }> = ({
  chatFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={chatFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {chatFeatures.name}
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
          src={chatFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${chatFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {chatFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {chatFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {chatFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {chatFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
             
            >
              <Link to="https://chat.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
              
            >
               <Link to="https://chat.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHomeFeature;
