import React from "react";
import Profile from './profile.png';
import {
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Facebook,
  QuestionMarkRounded,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import HomeFeature, { features } from "../components/homeFeature";
import { appList } from "../components/appList";
import { Instagram } from "@mui/icons-material";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../components/icons.png';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
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
      <div id='home-section' className="p-4 pt-14 sm:pt-0 flex flex-col sm:flex-row mt-0 sm:items-center justify-center sm:justify-start h-[calc(68vh-65px)] ml-2 gap-2 sm:gap-6">
        <div className="max-w-[600px] px-4 pt-6 sm:pt-0 sm:px-8 sm:pb-12 sm:mr-10 gap-2 sm:gap-6 text-center text-sm">
          <Typography
            variant="h3"
            className="hidden mt-4 font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
          >
            Innovative Full Stack Developer Building Responsive Web Apps.
          </Typography>

          <Typography
            variant="h5"
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
          >
            Innovative Full Stack Developer Building Responsive Web Apps.
          </Typography>

          <br />

          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.1rem" }}
          >
            Proficient in React.js, Node.js, and Java, with a proven track record of delivering scalable solutions that meet both client and user needs. Adept at working independently and in cross-functional teams, with a strong commitment to continuous learning and improvement.
          </Typography>
          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.5rem" }}
          >
                       Proficient in React.js, Node.js, and Java, with a proven track record of delivering scalable solutions that meet both client and user needs. Adept at working independently and in cross-functional teams, with a strong commitment to continuous learning and improvement.
          </Typography>

          <br />

          <div className="flex flex-row items-center sm:mt-6 sm:flex-row sm:justify-start justify-center gap-2 sm:gap-2">
            <p className="text-[8px] sm:text-sm dark:text-white sm:mr-2">
              +91 70959 31891 
            </p>
            <Link
              to={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"}
              className="text-[8px] sm:text-sm text-blue-500"
            >
              shahidshaik.online@gmail.com
            </Link>
          </div>
        </div>
        <div className="items-center justify-center pt-6 sm:pt-16 sm:mt-6 sm:ml-16 w-full flex pb-14 sm:pb-0">
        <img
          src={Profile}
          className="w-full h-auto sm:h-[calc(90vh-130px)]"
          alt="Banner"
        />
      </div>

      </div>

      <br />

      <div className="flex flex-col items-center justify-center gap-5 sm:mt-7">
        {features.map((feature, index) => (
          <HomeFeature
            {...{ feature, left: index % 2 === 0, key: feature.name }}
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
          Overview
        </Typography>

        <br />

        <img
          src={Icon} alt="Icon"
          className="h-[80px] w-[80px]"
        />

        <br />

        <div className="max-w-[600px] flex flex-col items-center justify-center">
          <Typography className="text-center">
          Innovative Full Stack Developer with extensive experience in designing, developing, and deploying highly responsive, user-centric web applications.
          </Typography>

          <br />

          <Link
            to={"https://shahidshaik.netlify.app/"}
            className="font-bold text-blue-400"
          >
           See More
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
              <Link to={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"}>
                Contact Me
              </Link>
            </Button>
            <Button variant="outlined" size="small">
              <Link to={"https://clikkle.com"}>My Projects</Link>
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

export default Home;