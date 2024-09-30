import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type AdsHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;
 
};

export const adsFeatures: AdsHomeFeatureProps[] = [
  {
    name: "Revolutionize Your Advertising Strategy with Programmatic Buying",
    description: "Our main service is programmatic buying, using machine learning to purchase ad inventory in real-time, maximizing ROI by targeting the right users.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/ads/illustration/ads2.png",
   
  },
  {
    name: "Maximize ROI with Clikkle's Data-Driven Ad Platform",
    description: "Clikkle's ad platform uses real-time bidding and machine learning algorithms to deliver the right ad to the right person at the right time.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/ads/illustration/ads3.png",
   
  },
  {
    name: "Boost Conversions with Clikkle's Dynamic Retargeting Technology",
    description: "Retargeting technology tracks website visitors and delivers personalized ads to bring them back. It's a powerful way to increase conversions and make the most of your ad spend.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/ads/illustration/ads4.png",
   
  },
  
  
  
];

const AdsHomeFeature: React.FC<{ adsFeatures: AdsHomeFeatureProps; left: boolean }> = ({
  adsFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={adsFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {adsFeatures.name}
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
          src={adsFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${adsFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.6rem" }}
            >
              {adsFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "0.8rem" }}
            >
              {adsFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {adsFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {adsFeatures.description}
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

export default AdsHomeFeature;
