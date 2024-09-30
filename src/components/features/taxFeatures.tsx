import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type TaxHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;
  
};

export const taxFeatures: TaxHomeFeatureProps[] = [
  {
    name: "Allow our Professional AI to handle your taxes from beginning to end",
    description: 
    "Entrust your taxes to our expert system AI, ensuring meticulous care from start to finish.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/tax/illustration/Frame%202%20(1).png",
   
  },
  {
    name: "Do your taxes right however you choose",
    description: 
    "File your own taxes, get professional answers on how to go about it, or get our expert AI to handle your tax from start to finish.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/tax/illustration/Frame%203.png",
   
  },
  {
    name: "See what our customers are saying",
    description: 
    "Clikkle tax is the best. I just started using it a few months back, and it makes filing easy.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/tax/illustration/tax1.png",
    
  },
  {
    name: "Let clikkle AI expert handle your taxes",
    description: 
    "Let our expert AI handle your taxes professionally and accurately.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/tax/illustration/Frame%204.png",
    
  },
  
  
  
];

const TaxHomeFeature: React.FC<{ taxFeatures: TaxHomeFeatureProps; left: boolean }> = ({
  taxFeatures,
  left,
}) => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={taxFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="text-lg font-[500] w-full px-10 pt-1 mb-20 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-12 lg:pt-28">
        See what you can do with {taxFeatures.name}
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
          src={taxFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(110vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${taxFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {taxFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {taxFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {taxFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {taxFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
            <Link to="https://tax.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
              <Link to="https://tax.clikkle.com">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxHomeFeature;
