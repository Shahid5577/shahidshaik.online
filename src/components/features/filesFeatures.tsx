import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type FilesHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const filesFeatures: FilesHomeFeatureProps[] = [
  {
    name: "Secure File Storage with Clikkle.",
    description: "Clikkle's advanced encryption ensures secure file storage and sharing. Rest easy, knowing your data is protected from unauthorized access.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/files/illustration/files2.png",

  },
  {
    name: "Flexible Storage Plans with Clikkle.",
    description: "Clikkle's customizable storage plans cater to all needs, from personal to business. Choose flexible pricing options for your file storage.",
    illistrationUrl: "https://cdn.clikkle.com/images/files/illustration/files3.png",

  },
  {
    name: "Efficient File Management with us",
    description: "Clikkle's intuitive interface and efficient file management features allow you to easily upload, organize, and share your files, saving you time and effort in managing your digital life.",
    illistrationUrl: "https://cdn.clikkle.com/images/files/illustration/files4.png",

  },
  {
    name: "Double the Security with Clikkle's Two-Factor Authentication.",
    description: "Clikkle ensures security with two-factor authentication. Rest easy knowing only authorized users can access your files, protecting sensitive data from threats.",
    illistrationUrl: "https://cdn.clikkle.com/images/files/illustration/files5.png",

  },
  
  
];

const FilesHomeFeature: React.FC<{ filesFeatures: FilesHomeFeatureProps; left: boolean }> = ({
  filesFeatures,
  left,
}) => {


  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={filesFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {filesFeatures.name}
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
          src={filesFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${filesFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.6rem" }}
            >
              {filesFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {filesFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {filesFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {filesFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"

            >
              <Link to="https://files.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"

            >
              <Link to="https://files.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesHomeFeature;
