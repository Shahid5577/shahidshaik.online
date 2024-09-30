import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type ProjectsHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const projectsFeatures: ProjectsHomeFeatureProps[] = [
  {
    name: "Task Management and Collaboration",
    description: 
    "Drive efficiency with AI-powered task management. Foster seamless collaboration through real-time updates and intuitive file sharing for enhanced teamwork.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/projects/illustration/projects2.png",
   
  },
  
  {
    name: "Project Planning and Tracking",
    description: 
    "Maximize efficiency with AI-driven planning. Effortlessly track project progress using interactive Gantt charts and Kanban boards for real-time visibility.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/projects/illustration/projects3.png",
  
  },
  
  {
    name: "Agile Project Management",
    description: 
    "Embrace agile power with AI-enabled boards, automated workflows, and predictive analytics. Adapt swiftly, optimize team productivity with AI-driven insights and recommendations.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/projects/illustration/projects4.png",
    
  },
  
  {
    name: "Issue Tracking and Bug Management",
    description: 
    "Efficiently track and manage issues, bugs, and requests with AI-powered systems. Leverage intelligent search and automated workflows for streamlined resolution and bug management.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/projects/illustration/projects5.png",
   
  },
  
  {
    name: "Customizable Workflows and Time Tracking",
    description: 
    "Customize workflows, integrate AI automation for streamlined tasks. Effortlessly track time with AI-enabled logging, generate data-driven reports for informed decisions.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/projects/illustration/projects6.png",

  },
  
  
];

const ProjectsHomeFeature: React.FC<{ projectsFeatures: ProjectsHomeFeatureProps; left: boolean }> = ({
  projectsFeatures,
  left,
}) => {
 

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={projectsFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10 pt-1 mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {projectsFeatures.name}
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
          src={projectsFeatures.illistrationUrl}
          className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(80vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${projectsFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {projectsFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {projectsFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "0.8rem" }}
          >
            {projectsFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {projectsFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
            >
              <Link to="https://projects.clikkle.com">
             Get Started</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
            >
              <Link to="https://projects.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHomeFeature;
