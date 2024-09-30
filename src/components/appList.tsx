import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Apps from '@mui/icons-material/Apps';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import logo from './hivrrlogo.png';


type App = {
  logo: string;
  name: string;
  link: string;
};

export const appList: App[] = [
  
  {
    logo: 'https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png',
    name: 'Campaigns',
    link: '/campaigns',
  },
  {
    logo: 'https://cdn.clikkle.com/images/host/logo/2023/host.png',
    name: 'Host',
    link: '/host',
  },
  {
    logo: 'https://cdn.clikkle.com/images/files/logo/2023/files.png',
    name: 'Files',
    link: '/files',
  },
  {
    logo: 'https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png',
    name: 'E-Sign',
    link: '/esign',
  },
  { logo: 'https://cdn.clikkle.com/images/ads/logo/2023/ads.png', 
    name: 'Ads',
    link: '/ads',
  
  },
  {
    logo: 'https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png',
    name: 'Pitch',
    link: '/pitch',
  },
  { logo: 'https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png', 
    name: 'Mail',
    link: '/mail',
  
  },
  {
    logo: 'https://cdn.clikkle.com/images/projects/logo/2023/projects.png',
    name: 'Projects',
    link: '/projects',
  },
  {
    logo: 'https://cdn.clikkle.com/images/launch/logo/2023/launch.png',
    name: 'Launch',
    link: '/launch',
  },
  { logo: 'https://cdn.clikkle.com/images/hr/logo/2023/hr.png',
    name: 'HR',
    link: '/hr',
   },
  { logo: 'https://cdn.clikkle.com/images/tax/logo/2023/tax.png', 
    name: 'Tax',
    link: '/tax',
  },
  {
    logo: 'https://cdn.clikkle.com/images/chat/logo/2023/chat.png',
    name: 'Chat',
    link: '/chat',
  },
  {
    logo: 'https://cdn.clikkle.com/images/social/logo/2023/social.png',
    name: 'Social',
    link: '/social',
  },
  { logo: 'https://cdn.clikkle.com/images/sms/logo/2023/sms.png', 
    name: 'Watsup',
    link: '/watsup',
  },
  {
    logo: 'https://cdn.clikkle.com/images/crew/logo/2023/crew.png',
    name: 'Crew',
    link: '/crew',
  },
  {
    logo: 'https://cdn.clikkle.com/images/swiprr/logo/2023/swiprr.png',
    name: 'Swiprr',
    link: 'https://swiprr.clikkle.com',
  },
  {
    logo: 'https://cdn.clikkle.com/images/kept-up/logo/2023/kept-up.png',
    name: 'KeptUp',
    link: 'https://keptup.app',
  },
  {
    logo: 'https://cdn.clikkle.com/images/news/logo/2023/news.png',
    name: 'News',
    link: 'https://news.clikkle.com',
  },
  {
    logo: logo,
    name: 'Hivrr',
    link: 'https://hivrr.clikkle.com',
  },
];

const AppListToggler: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  

  
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <div className='sm:flex items-center gap-2'>
      <IconButton onClick={handleButtonClick}>
        <Apps />
      </IconButton>
      

      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='w-[350px] p-4 flex items-center justify-center flex-wrap gap-4'>
          {appList.map((app) => (
            <div
              key={app.logo}
              className='flex flex-col items-center w-[80px] cursor-pointer'
            >
              <Link to={app.link} onClick={handleLinkClick}>
                <img
                  src={app.logo}
                  alt={app.name}
                  className='h-[35px] w-[35px]'
                />
              </Link>
              <Link to={app.link} onClick={handleLinkClick}>
                <Typography sx={{ p: 1 }}>{app.name}</Typography>
              </Link>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default AppListToggler;
