import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type HomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  appLogoUrl: string;
  description: string;
  freetrialLink: string;
  learnMoreLink: string;
};

export const features: HomeFeatureProps[] = [
  {
    name: "My Projects",
    description:
      "Experience Clikkle's power! Data driven campaigns for real results, from audience collection to optimization. Elevate your brand with out digital marketing expertise",
    illistrationUrl:
      "https://cdn.clikkle.com/images/campaigns/illustration/campaigns1.png",
    appLogoUrl:
      "https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/campaigns",
  },
  {
    name: "Clikkle Host",
    description:
      "Choose Clikkle's trusted, scalable hosting for high-performance webstites. Our optimized infrastructure guarentees uptime, supported by expert assistance.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/host/illustration/host4.png",
    appLogoUrl: "https://cdn.clikkle.com/images/host/logo/2023/host.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/host",
  },
  {
    name: "Clikkle Files",
    description:
      "Welcome to Clikkle, the secure cloud file storage service. Enjoy easy file management, flexible sharing, and advanced encryption.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/files/illustration/files1.png",
    appLogoUrl: "https://cdn.clikkle.com/images/files/logo/2023/files.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/files",
  },
  {
    name: "Clikkle E-sign",
    description:
      "Easily send, sign, and manage agreements with our electronic signature service. Enjoy robust security, real-time collaboration, and mobile accessibility.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/e-sign/illustration/e-sign3.png",
    appLogoUrl: "https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/esign",
  },
  {
    name: "Clikkle Ads",
    description:
      "Maximize reach and conversions with Clikkle's exppert ads services. Our team creates, manages campaigns, and utilizes advanced targeting for business growth. Experience the difference today.",
    illistrationUrl: "https://cdn.clikkle.com/images/ads/illustration/ads4.png",
    appLogoUrl: "https://cdn.clikkle.com/images/ads/logo/2023/ads.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/ads",
  },
  {
    name: "Clikkle Pitch",
    description:
      "Our platform offers a user-friendly interface to build beautiful templates, powerful collaboration, advanced design tools,and integration with popular services to create memorable presentations.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/pitch/illustration/pitch1.png",
    appLogoUrl: "https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/pitch",
  },
  {
    name: "Clikkle C-Mail",
    description:
      "C-Mail: Secure, reliable web service for email-like communication. Send/receive messages, attachments and organize your inbox easily.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/cmail/illustration/cmail1.png",
    appLogoUrl: "https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/cmail",
  },
  {
    name: "Clikkle Projects",
    description:
      "Unleash the AI power in project mangement. Intelligent task tracking, advanced collaboration and customizable workflows for unparalled productivity.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/projects/illustration/projects1.png",
    appLogoUrl:
      "https://cdn.clikkle.com/images/projects/logo/2023/projects.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/projects",
  },
  {
    name: "Clikkle Launch",
    description:
      "Simplify legal operations with our comprehensive platform. Automate document generation, manage contracts, and track compliance efforlessly for enhanced efficiency.",
    illistrationUrl:
      "https://cdn.clikkle.com/images/launch/illustration/launch1.png",
    appLogoUrl: "https://cdn.clikkle.com/images/launch/logo/2023/launch.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/launch",
  },
  {
    name: "Clikkle HR",
    description:
      "Discover our comprehensive HR platform, offering employee management, payroll, performance tracking, and more. Empower your workforce today!",
    illistrationUrl: "/illustrations/hr.png",
    appLogoUrl: "https://cdn.clikkle.com/images/hr/logo/2023/hr.png",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/hr",
  },
  {
    name: "Clikkle Tax",
    appLogoUrl: "https://cdn.clikkle.com/images/tax/logo/2023/tax.png",
    description:
      "Do your taxes right however you choose. Entrust your taxes to expert system AI, File your own taxes, get professional answers on how to go about it, or get out expert AI to handle your tax from start to finish.",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/tax",
    illistrationUrl:
      "https://cdn.clikkle.com/images/tax/illustration/Frame%203.png",
  },
  {
    name: "Clikkle Chat",
    appLogoUrl: "https://cdn.clikkle.com/images/chat/logo/2023/chat.png",
    description:
      "Effortlessly automate routine tasks with our visual automation builder. Create robust automations effortlessly using no-code building blocks like bots, triggers, conditions, and rules.",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/chat",
    illistrationUrl:
      "https://cdn.clikkle.com/images/chat/Clikkle%20Chat%20page/pexels-thisisengineering-3861969.jpg",
  },
  {
    name: "Clikkle Watsup",
    appLogoUrl: "https://cdn.clikkle.com/images/sms/logo/2023/sms.png",
    description:
      "Get connected with family and friends on Clikkle Watsup, and enjoy premium services like voice note to text, quick replies, in-app video, and lots more on our safe and secure platform.",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/watsup",
    illistrationUrl: "https://cdn.clikkle.com/images/sms/illustration/Group%207.png",
  },
  {
    name: "Clikkle Social",
    appLogoUrl: "https://cdn.clikkle.com/images/social/logo/2023/social.png",
    description:
      "The social network for meeting new people. Get the best social experience from Clikkle, and connect with millions of people from across the globe with our safe and secure platform.",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/social",
    illistrationUrl:
      "https://cdn.clikkle.com/images/social/illustrations/phone%20mockup.png",
  },
  {
    name: "Clikkle Crew",
    appLogoUrl: "https://cdn.clikkle.com/images/crew/logo/2023/crew.png",
    description:
      "With live captions powered by Clikkle speech recognition technology, Clikkle Crew makes meetings more accessible. For non-native speakers, hearing impaired participants, or just noisy coffee shops, live captions make it easy for everyone to follow along (available in English only).",
    freetrialLink: "https://apps.clikkle.com",
    learnMoreLink: "/crew",
    illistrationUrl:
      "https://cdn.clikkle.com/images/crew/Clikkle%20crew%20LANDING%20PAGE%20UI/IMG_2738.JPG",
  },
];

const HomeFeature: React.FC<{ feature: HomeFeatureProps; left: boolean }> = ({
  feature,
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
    <div ref={containerRef} id={feature.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="text-[12px] sm:text-lg font-[500] w-full px-10 pt-6 mt-7 sm:mt-0  mb-20  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-12 lg:pt-20">
        See what you can do and Explore {feature.name}
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
          src={feature.illistrationUrl}
          className="h-72 w-auto sm:h-[calc(100vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${feature.name}`}
        />
        <div className="max-w-[850px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <img
              src={feature.appLogoUrl}
              alt={feature.name}
              className="h-[40px] w-[40px]"
            />
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "2.0rem" }}
            >
              {feature.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.4rem" }}
            >
              {feature.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.2rem" }}
          >
            {feature.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.8rem" }}
          >
            {feature.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(feature.freetrialLink)}
            >
              Start Free Trial
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => navigate(feature.learnMoreLink)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
