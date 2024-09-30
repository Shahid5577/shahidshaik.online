import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type MailHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const mailFeatures: MailHomeFeatureProps[] = [
  {
    name: "Secure and Advanced Email with C-Mail",
    description: 
    "C-Mail: secure web-based email service with encryption. Advanced features for organization, collaboration, and management for businesses and individuals.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/cmail/illustration/cmail2.png",

  },
  {
    name: "Efficient Collaboration with C-Mail.",
    description: 
    "Our file-sharing tool enables secure real-time file exchange and teamwork. Enjoy robust version control and permissions settings for efficient and secure collaboration.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/cmail/illustration/cmail3.png",

  },
  {
    name: "Enhance Your App with C-Mail API",
    description: 
    "C-Mail's versatile API provides secure messaging and file-sharing for developers to integrate into their applications, enhancing functionality and custom integrations.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/cmail/illustration/cmail4.png",
  
  },
  {
    name: "Secure Access with C-Mail Identity",
    description: 
    "C-Mail's cloud-based identity management solution provides secure user authentication, authorization, multi-factor authentication, and single sign-on for enhanced application.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/cmail/illustration/cmail5.png",
  
  },
  
  
];

const MailHomeFeature: React.FC<{ mailFeatures: MailHomeFeatureProps; left: boolean }> = ({
  mailFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={mailFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {mailFeatures.name}
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
          src={mailFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${mailFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {mailFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {mailFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {mailFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {mailFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
              <Link to="https://mail.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
               <Link to="https://mail.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailHomeFeature;
