import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type SocialHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;
  freetrialLink: string;
  learnMoreLink: string;
};

export const socialFeatures: SocialHomeFeatureProps[] = [
  {
    name: "",
    description: 
    "",
    illistrationUrl: 
      "",
    freetrialLink: "/social.clikkle.com",
    learnMoreLink: "/social.clikkle.com",
  },
  
  
  
];

const SocialHomeFeature: React.FC<{ socialFeatures: SocialHomeFeatureProps; left: boolean }> = ({
  socialFeatures,
  left,
}) => {
  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={socialFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="text-lg font-[500] w-full px-10 pt-1 mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-12 lg:pt-28">
        See what you can do with {socialFeatures.name}
        <div className="flex items-center justify-center mt-1 animate-bounce" onClick={handleScroll}>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </h6>
      <div
        className={`w-full sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-16 p-2 ${
          left ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        <img
          src={socialFeatures.illistrationUrl}
          className="h-72 w-auto sm:h-[calc(100vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${socialFeatures.name}`}
        />
        <div className="max-w-[850px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "2.0rem" }}
            >
              {socialFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.4rem" }}
            >
              {socialFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.2rem" }}
          >
            {socialFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.8rem" }}
          >
            {socialFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(socialFeatures.freetrialLink)}
            >
             Get Started
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => navigate(socialFeatures.learnMoreLink)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHomeFeature;
