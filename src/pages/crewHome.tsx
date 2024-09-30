import React from "react";
import {
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { KeyboardOutlined } from "@mui/icons-material";
import { Videocam } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Facebook,
  QuestionMarkRounded,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import { appList } from "../components/appList";
import { Instagram } from "@mui/icons-material";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CrewHomeFeature, {crewFeatures} from "../components/features/crewFeatures";

interface CrewHomeProps {}

const CrewHome: React.FC<CrewHomeProps> = ({}) => {
  useEffect(() => {
    updateTitleAndFavicon("Clikkle Crew | Free Video Calls And Meetings For Everyone", "https://cdn.clikkle.com/images/crew/logo/2023/crew.png");
  }, []);


  const updateTitleAndFavicon = (newTitle: string, newIconUrl: string) => {
    document.title = newTitle;
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = newIconUrl;
    }
  };

  const location = useLocation();


  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);
  return (
    <div  className="px-2 py-8 sm:px-6 sm:py-6">
      <div id='home-section' className="p-4 flex flex-col sm:flex-row mt-0 sm:items-center justify-center sm:justify-start h-[calc(68vh-65px)] ml-2 gap-10">
        <div className="max-w-[600px] px-4 sm:px-8 pb-12 sm:mr-10 gap-6 text-center text-sm">
          <Typography
            variant="h3"
            className="hidden mt-4 font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300 pr-24"
          >
            Video calls and meetings for everyone.
          </Typography>

          <Typography
            variant="h5"
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            >
              Video calls and meetings for everyone.
          </Typography>

          <br />

          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.1rem" }}
          >
            Clikkle Crew is one service for secure high-quality video meetings and calls available for everyone, On any device.
            </Typography>
          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.8rem" }}
          >
          Clikkle Crew is one service for secure high-quality video meetings and calls available for everyone, On any device.
           </Typography>

          <br />

          <div className="flex flex-col items-center gap-2 mt-2 sm:flex-row sm:gap-4">
          <Button
            size="large"
            variant="contained"
            className="w-full -mt-12 sm:w-auto sm:mb-0 sm:pl-2 flex items-center gap-2"
          >
            <Link
              to={
                "https://accounts.clikkle.com/register?redirectto=https%3A%2F%2Fapps.clikkle.com%2F"
              }
            >
              <Videocam className="mr-2" />
              Start a meeting
            </Link>
          </Button>
            <h4 className="dark:text-zinc-500">or</h4>
            <div className="flex items-center gap-2 border border-gray-700 rounded-md p-2">
              <KeyboardOutlined />
              <input
              type="text"
              placeholder="Enter Meeting code"
              className="outline-none border-none bg-transparent placeholder-font-bold flex-1"
            />
            </div>
            <button className="dark:text-zinc-300 dark:hover:text-blue-500 hover:text-blue-500 font-semi-bold text-sm">
              Join
            </button>
          </div>
          <Divider className="pt-8"/>

          <div className="flex flex-col items-center mt-6 pt-4 sm:flex-row sm:justify-start sm:gap-0">
            <p className="text-sm dark:text-white sm:mr-2">
              Don't have an account?
            </p>
            <Link
              to={"https://clikkle.com/register"}
              className="flex-grow text-sm text-blue-500 sm:flex-grow-0"
            >
              Get Started Now
            </Link>
          </div>
        </div>
        <div className="items-center justify-center hidden ml-16 sm:flex ">
          <img
            src="https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/Rectangle%207.png"
            className="w-full h-[calc(68vh-140px)] object-cover object-center"
            alt="Banner"
            style={{ display: "none" }}
          />
        </div>

        <div className="items-center justify-center hidden  ml-16 sm:flex ">
          <img
            src="https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/Rectangle%207.png"
            className="w-full mr-10 h-[calc(85vh-140px)] object-cover object-center"
            alt="Banner"
          />
        </div>
      </div>

      <br />

      <div className="flex flex-col items-center justify-center gap-5 sm:mt-7">
        {crewFeatures.map((crewFeatures, index) => (
            <CrewHomeFeature
             {...{ crewFeatures, left: index % 2 === 0, key: crewFeatures.name }}
          />
        ))}
      </div>
      <div id="pricing" className="h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-10 mt-12 pt-10">
        <Typography
          variant="h4"
          className="text-2xl text-center text-gray-800 sm:text-left dark:text-gray-300"
        >
          Discover the perfect app for you
        </Typography>

        <div className="flex gap-8 items-center justify-center flex-wrap max-w-[1000px]">
          {appList.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Link to={app.link}>
                <img
                  src={app.logo}
                  alt={app.name}
                  className="w-[20px] h-[20px]"
                />
              </Link>
              <Link to={app.link}>
                <Typography className="text-xs">{app.name}</Typography>
              </Link>
            </div>
          ))}
        </div>
      </div>

      

      <div id="getStarted" className="h-[calc(100vh-65px)] flex flex-col">
        <div className="flex flex-col items-center justify-center flex-grow gap-8">
          <Typography
            variant="h4"
            className="text-2xl text-center text-gray-800 sm:text-left dark:text-gray-300"
          >
            Ready to get Started?
          </Typography>

          <div className="flex items-center justify-center gap-4">
            <Button variant="contained" size="small">
              <Link to="https://clikkle.com/tryclikkleplus">
                Try Clikkle Crew for Free
              </Link>
            </Button>
            <Button variant="outlined" size="small">
              <Link to="https://clikkle.com/gotoplus">Go to Clikkle Crew</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4">
          <Typography className="text-gray-700 dark:text-gray-200">
            Follow our blog
          </Typography>
          <IconButton>
            <Link to="https://www.youtube.com/clikkle">
              <YouTube />
            </Link>
          </IconButton>

          <IconButton>
            <Link to="https://twitter.com/myclikkle">
              <Twitter />
            </Link>
          </IconButton>

          <IconButton>
            <Link to="https://facebook.com/clikkle">
              <Facebook />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="https://www.instagram.com/myclikkle">
              <Instagram />
            </Link>
          </IconButton>
        </div>
      </div>

      <Divider />

      <div className="flex flex-col items-center justify-between gap-4 p-4 py-4 sm:py-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to={"https://clikkle.com"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Clikkle
            </Typography>
          </Link>
          <Link to={"https://clikkle.com/about"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              About
            </Typography>
          </Link>
          <Link to={"https://clikkle.com/products"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Products
            </Typography>
          </Link>
          <Link to={"https://careers.clikkle.com"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Careers
            </Typography>
          </Link>
          <Link to={"https://policies.clikkle.com/privacy"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Privacy
            </Typography>
          </Link>
          <Link to={"https://policies.clikkle.com/terms"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Terms
            </Typography>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <IconButton>
            <Link to="https://support.clikkle.com">
              <QuestionMarkRounded className="text-gray-600 dark:text-gray-300" />
            </Link>
          </IconButton>

          <Typography className="text-gray-600 dark:text-gray-300">
            <Link to="https://support.clikkle.com">Help</Link>
          </Typography>
          <div className="border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]">
            <Typography className="text-gray-600 dark:text-gray-300">
              English
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewHome;
