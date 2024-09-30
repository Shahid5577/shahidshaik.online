import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type PitchHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;
 
};

export const pitchFeatures: PitchHomeFeatureProps[] = [
  {
    name: "Engaging Audiences with Sparkling Storytelling",
    description: "clikkle Pitch specializes in crafting captivating narratives to engage, inspire, and persuade audiences, using storytelling techniques and words to create vivid imagery.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/pitch/illustration/pitch2.png",

  },
  {
    name: "Crafting persuasive messages strategically.",
    description: "Clikkle's experts use strategic communication and psychology to craft persuasive messages that leave a lasting impact, swaying minds and winning hearts.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/pitch/illustration/pitch3.png",

  },
  {
    name: "Visual Symphony:Create stunning graphic designs.",
    description: "Clikkle creates visually striking presentations that evoke emotions, enhancing comprehension and leaving a lasting impression.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/pitch/illustration/pitch4.png",

  },
  {
    name: "Dynamic delivery is the art of engaging presentations.",
    description: "Clikkle coaches help you develop a commanding presence and impactful delivery to leave a lasting impression, ensuring your pitch leaves a lasting impression.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/pitch/illustration/pitch5.png",

  },
  {
    name: "Flawless execution:Key to big-stage success.",
    description: "Clikkle specializes in meticulously planning and coordinating every aspect of your pitch presentation, allowing you to focus on delivery your message with confidence.",
   illistrationUrl: 
      "https://cdn.clikkle.com/images/pitch/illustration/pitch6.png",

  },
  
  
];

const PitchHomeFeature: React.FC<{ pitchFeatures: PitchHomeFeatureProps; left: boolean }> = ({
  pitchFeatures,
  left,
}) => {


  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={pitchFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {pitchFeatures.name}
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
          src={pitchFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${pitchFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {pitchFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {pitchFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {pitchFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {pitchFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
               <Link to="https://pitch.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
            <Link to="https://pitch.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchHomeFeature;
