import React from "react";
import {
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
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
import LaunchHomeFeature, {launchFeatures} from "../components/features/launchFeatures";

interface LaunchHomeProps {}

const LaunchHome: React.FC<LaunchHomeProps> = ({}) => {
  useEffect(() => {
    updateTitleAndFavicon("Clikkle Launch | Get Start Up Legal Paperwork Done Safe, Fast And Easily", "https://cdn.clikkle.com/images/launch/logo/2023/launch.png");
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
            className="hidden mt-4 font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300 pr-32"
          >
           Accelerate with Hassle-Free Legal
          </Typography>

          <Typography
            variant="h5"
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0 pr-4"
            >
            Accelerate with Hassle-Free Legal
          </Typography>

          <br />

          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.1rem" }}
          >
           Automate Legal Work. Simplify complex legal processes for startups and businesses. Save time, ensure compliance. Get started today and focus on what matters most.
            </Typography>
          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.8rem" }}
          >
            
           Automate Legal Work. Simplify complex legal processes for startups and businesses. Save time, ensure compliance. Get started today and focus on what matters most.
           </Typography>

          <br />

          <div className="flex flex-col items-center gap-2 mt-2 sm:flex-row sm:gap-4">
            <TextField
              size="small"
              placeholder="Enter email"
              className="w-full sm:w-auto sm:mb-0 sm:pl-2"
              style={{ marginTop: 12 }}
            />
            <Button
              size="large"
              variant="contained"
              className="w-full -mt-12 sm:w-auto sm:mb-0 sm:pl-2"
            >
              <Link
                to={
                  "https://accounts.clikkle.com/register?redirectto=https%3A%2F%2Fapps.clikkle.com%2F"
                }
              >
                Try Launch for Free
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center mt-6 sm:flex-row sm:justify-start sm:gap-0">
            <p className="text-sm dark:text-white sm:mr-2">
              Don't have an account?
            </p>
            <Link
              to={"https://clikkle.com/register"}
              className="flex-grow text-sm text-blue-500 sm:flex-grow-0"
            >
              Sign up at no cost
            </Link>
          </div>
        </div>
        
        <div className="items-center justify-center hidden  ml-16 sm:flex ">
          <img
            src="https://cdn.clikkle.com/images/launch/illustration/launch1.png"
            className="h-72 w-auto lg:h-[calc(105vh-300px)] sm:h-[calc(60vh-300px)]"
            alt="Banner"
          />
        </div>
      </div>

      <br />

      <div className="flex flex-col items-center justify-center gap-5 sm:mt-7">
        {launchFeatures.map((launchFeatures, index) => (
            <LaunchHomeFeature
             {...{ launchFeatures, left: index % 2 === 0, key: launchFeatures.name }}
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

      <div id="overview" className="h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-8 mt-10 pt-10">
        <Typography
          variant="h4"
          className="text-2xl text-center text-gray-800 sm:text-left dark:text-gray-300"
        >
        Simplifying Legal Processes for Startups
        </Typography>

        <br />

        <img
          src="https://cdn.clikkle.com/images/launch/logo/2023/launch.png"
          className="h-[80px] w-[80px]"
        />

        <br />

        <div className="max-w-[600px] flex flex-col items-center justify-center">
          <Typography className="text-center">
            Clikkle is dedicated to simplifying legal processes for startups, providing efficient solutions to streamline compliance and enable business growth.
        </Typography>

          <br />

          <Link
            to="https://clikkle.com/learnmore"
            className="font-bold text-blue-400"
          >
            Learn more about Launch
          </Link>
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
                Try Launch for Free
              </Link>
            </Button>
            <Button variant="outlined" size="small">
              <Link to="https://clikkle.com/gotoplus">Go to Launch</Link>
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

export default LaunchHome;
