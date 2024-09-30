import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type SmsHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const smsFeatures: SmsHomeFeatureProps[] = [
  
  {
    name: "Do more in your chats with just a tap",
    description: 
    "Easily reply using suggested words and emojis, and do small tasks, like adding events or checking the weather, without leaving the chat!",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/sms/illustration/image.png",

  },
  {
    name: "More ways to say more than ever",
    description: 
    "Group RCS chats offer seamless sharing of high-quality photos and videos, messaging over Wi-Fi, and real-time typing indicators. Effortlessly switch between devices without missing any updates.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/sms/illustration/Group%206%20(2).png",
 
  },
  {
    name: "Less out of the group, more in the loop",
    description: 
    "Experience authentic reactions, along with high-quality photos and videos shared by friends regardless of their device.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/sms/illustration/Group%205%20(1).png",

  },
  {
    name: "Less searching more finding",
    description: 
    "Imagine Watsup as a super search tool! Look for old chats easily and mark your favorites with a star to find them fast whenever you need.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/sms/illustration/Group%204.png",

  },
  {
    name: "Keep your conversations safe and secure",
    description: 
    "Say goodbye to spam messages. Watsup blocks them instantly, keeping your conversations private with end-to-end encryptions.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/sms/illustration/Rectangle%2037.png",

  },
  {
    name: "Do more with businesses right from Watsup",
    description: 
    "Easily connect with businesses like never before! Chat with customer support and access essential info like boarding passes straight from your Watsup app.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/sms/illustration/Group%203%20(1).png",

  },
  
  
  
];

const SmsHomeFeature: React.FC<{ smsFeatures: SmsHomeFeatureProps; left: boolean }> = ({
  smsFeatures,
  left,
}) => {
  

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={smsFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-5">
        See what you can do with {smsFeatures.name}
        <div className="flex items-center justify-center mt-1 animate-bounce" onClick={handleScroll}>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </h6>

      <div
        className={`w-full sm:mt-2 pt-24  flex flex-col sm:flex-row items-center justify-between gap-16 p-2 ${
          left ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        <img
          src={smsFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(120vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${smsFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {smsFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {smsFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.0rem" }}
          >
            {smsFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {smsFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
              <Link to="https://watsup.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
              <Link to="https://watsup.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsHomeFeature;
