import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRef } from "react";


export type CampaignsHomeFeatureProps = {
  illistrationUrl: string;
  name: string;
  description: string;

};

export const campaignFeatures: CampaignsHomeFeatureProps[] = [
  {
    name: "Use Workflows and drip Campaigns to save time",
    description: 
    "Nurture your leads automatically. Send people through automated workflows based on their unique interests—then drive them to take action.",
    illistrationUrl: 
      "https://cdn.clikkle.com/images/campaigns/illustration/campaigns2.png",
    
  },
  {
    name: "Personalize experiences across channels",
    description: "Create personalized experiences on your website and landing pages. Segment people based on activity and interests, follow up with relevant messaging in different channels.",
    illistrationUrl: "https://cdn.clikkle.com/images/campaigns/illustration/campaigns3.png",
   
  },
  {
    name: "Deliver free offers and collect contact information",
    description: "Capture contact information with high-converting, customizable forms and landing pages. Then, trigger automations that deliver lead magnets and automatically start a nurture sequence.",
    illistrationUrl: "https://cdn.clikkle.com/images/campaigns/illustration/campaigns4.png",

  },
  {
    name: "Reach people where they are",
    description: "Your audience doesn't just hang around their inbox. Reach them across channels with text message automation, personalized landing pages, and integrations with Facebook and Twitter.",
    illistrationUrl: "https://cdn.clikkle.com/images/campaigns/illustration/campaigns5.png",

  },
  {
    name: "Find your most engaged leads",
    description: "Who's most interested in what you have to say? Lead scoring and engagement tagging makes it easy to find your most qualified leads.",
    illistrationUrl: "https://cdn.clikkle.com/images/campaigns/illustration/campaigns6.png",

  },
  
];

const CampaignsHomeFeature: React.FC<{ campaignFeatures: CampaignsHomeFeatureProps; left: boolean }> = ({
  campaignFeatures,
  left,
}) => {
  

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <div ref={containerRef} id={campaignFeatures.name.replace(/\s+/g, "-").toLowerCase()}>
      <h6 className="lg:text-lg sm:text-xs font-[500] w-full px-10  sm:m-0 text-center text-gray-800 dark:text-gray-300 sm:pt-2 lg:pt-28">
        See what you can do with {campaignFeatures.name}
        <div className="flex items-center justify-center mt-1 animate-bounce" onClick={handleScroll}>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </h6>
      <div
        className={`w-full sm:mt-2 pt-24 flex flex-col sm:flex-row items-center justify-between gap-16 p-2 ${
          left ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        <img
          src={campaignFeatures.illistrationUrl}
          className="h-72 w-auto sm:h-[calc(60vh-100px)] lg:h-[calc(100vh-300px)] sm:w-auto ml-0 sm:ml-10"
          alt={`Illustration of ${campaignFeatures.name}`}
        />
        <div className="max-w-[600px] w-[80%] flex-grow  m-3 sm:p-16 sm:m-8">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            
            <Typography
              className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
              style={{ fontSize: "1.8rem" }}
            >
              {campaignFeatures.name}
            </Typography>
            <Typography
              className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
              style={{ fontSize: "1.2rem" }}
            >
              {campaignFeatures.name}
            </Typography>
          </div>

          <br />
          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
            style={{ fontSize: "1.0rem" }}
          >
            {campaignFeatures.description}
          </Typography>

          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
            style={{ fontSize: "0.6rem" }}
          >
            {campaignFeatures.description}
          </Typography>

          <br />

          <div className="flex items-center justify-center gap-4 sm:justify-start sm:mb-0">
            <Button
              size="small"
              variant="contained"

            >
              <Link to="https://campaigns.clikkle.com">
              Start Free Trial</Link>
            </Button>
            <Button
              size="small"
              variant="outlined"

            >
              <Link to="https://campaigns.clikkle.com">
              Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsHomeFeature;
