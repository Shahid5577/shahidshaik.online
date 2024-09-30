import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type HostHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const hostFeatures: HostHomeFeatureProps[] = [
  {
    name: "Unleash the Power of Blazing-Fast Hosting for Your Website.",
    description: 
    "Experience lightning-fast website speed with NVMe SSD storage. Minimize load times, maximize user experience, 99.9% uptime guarantee.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/host/illustration/host2.png",

  },
  {
    name: "Secure Your Website from DDoS Attacks with Our Advanced Protection.",
    description: "Protect your website with advanced DDoS protection, WAF, and daily backups. Safeguard against attacks and ensure data safety.",
    illistrationUrl: "https://cdn.clikkle.com/images/host/illustration/host3.png",

  },
  {
    name: "Effortless Website Management with cPanel Control Panel.",
    description: "Clikkle's Control Panel: intuitive interface, advanced tools for seamless website management, optimized hosting configuration, and expert support.",
    illistrationUrl: "https://cdn.clikkle.com/images/host/illustration/host4.png",

  },
  
  
];

const HostHomeFeature: React.FC<{ hostFeatures: HostHomeFeatureProps; left: boolean }> = ({
  hostFeatures,
  left,
}) => {


  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={hostFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {hostFeatures.name}
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
          src={hostFeatures.illistrationUrl}
          className="h-72 w-auto sm:h-[calc(60vh-400px)] lg:h-[calc(120vh-400px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${hostFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-12 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.6rem" }}
            >
              {hostFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {hostFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.0rem" }}
          >
            {hostFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {hostFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
             
            >
              <Link to="https://host.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
              
            >
               <Link to="https://host.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostHomeFeature;
