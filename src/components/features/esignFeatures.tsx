import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type EsignHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const esignFeatures: EsignHomeFeatureProps[] = [
  {
    name: "Secure, Effortless e-Signatures Anywhere",
    description: 
    "Clikkle ensures security with two-factor authentication, protecting your files and sensitive data from unauthorized access and threats.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/e-sign/illustration/e-sign2.png",

  },
  {
    name: "Streamline Signature Requests with Ease",
    description: 
    "Request and track signatures on any document with our powerful e-signature platform. Instant notifications, reminders, and seamless integration for maximum efficiency.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/e-sign/illustration/e-sign3.png",

  },
  {
    name: "Custom Templates, Automated Workflows",
    description: 
    "Easily create and customize document templates with our intuitive e-signature platform. Automate workflows, collaborate in real-time, and boost productivity.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/e-sign/illustration/e-sign4.png",

  },
  {
    name: "Transform Your Workflow with E-Signatures",
    description: 
    "Effortless signing, streamlined workflows. Our e-signature technology enables secure collaboration and easy document management, anytime, anywhere.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/e-sign/illustration/e-sign5.png",

  },
  
  
  
];

const EsignHomeFeature: React.FC<{ esignFeatures: EsignHomeFeatureProps; left: boolean }> = ({
  esignFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={esignFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {esignFeatures.name}
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
          src={esignFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${esignFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {esignFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {esignFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {esignFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {esignFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
              
            >
              <Link to="https://esign.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
             
            >
              <Link to="https://esign.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsignHomeFeature;
