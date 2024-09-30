import { Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef } from "react";

const SmsHomeFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activePage, setActivePage] = useState<number>(1);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const handlePreviousPage = () => {
    setActivePage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setActivePage(prevPage => prevPage + 1);
  };

  return (
    <div className="mt-10" ref={containerRef}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with What's new in Watsup
        <div className="flex items-center justify-center mt-1 animate-bounce" onClick={handleScroll}>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </h6>
      <div className="w-full sm:mt-2 pt-24  flex flex-col sm:flex-row items-center justify-between gap-16 p-2">
        <img
          src={"https://cdn.clikkle.com/images/sms/illustration/Rectangle%2019.png"}
          className="h-72 w-auto lg:h-[calc(120vh-300px)] sm:h-[calc(60vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt="What's new in Watsup"
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              What's new in Watsup
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              What's new in Watsup
            </Typography>
          </div>
          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300 pr-48"
            style={{ fontSize: "1.0rem" }}
          >
            keep every chat on track with replies to specific messages.
          </Typography>
          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            keep every chat on track with replies to specific messages.
          </Typography>
          <br />
          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            
            <div className="flex gap-2">
              <div className={`w-3 h-3 rounded-full bg-zinc-800 ${activePage === 1 ? 'bg-blue-500' : ''}`}>
                
              </div>
              <div className={`w-3 h-3 rounded-full bg-gray-400 ${activePage === 2 ? 'bg-blue-500' : ''}`}></div>
              <div className={`w-3 h-3 rounded-full bg-gray-400 ${activePage === 3 ? 'bg-blue-500' : ''}`}></div>
            </div>
            
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0  pt-5">
          <IconButton  style={{ borderRadius: '9999px', backgroundColor: 'white' }}  onClick={handlePreviousPage} disabled={activePage === 1}>
            <ChevronLeftIcon className="text-zinc-500" />  
          </IconButton>
          <IconButton  style={{ borderRadius: '9999px', backgroundColor: 'white' }}   onClick={handleNextPage} disabled={activePage === 3}>
            <ChevronRightIcon  className="text-zinc-500"/>
        </IconButton>
       </div>
        </div>
      </div>
    </div>
  );
};

export default SmsHomeFeatures;
