import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './icons.png';

export type BrandProps = {
  
};

const Brand: React.FC<BrandProps> = () => {
  const location = useLocation();

  const getBrandInfo = () => {
    const path = location.pathname;
    switch (path) {
      case '/campaigns':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/campaigns/logo/2023/campaigns.png',
          name: 'Clikkle',
          title: 'Campaigns',
          smallerText: true,
          paddingLeft: false,
          smallerSize: true,
        };
      case '/host':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/host/logo/2023/host.png',
          name: 'Clikkle',
          title: 'Host',
          paddingLeft: false,
          smallerText: false,
        };
      case '/files':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/files/logo/2023/files.png',
          name: 'Clikkle',
          title: 'Files',
          paddingLeft: false,
          smallerText: false,
        };
      case '/esign':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/e-sign/logo/2023/e-sign.png',
          name: 'Clikkle',
          title: 'E-Sign',
          paddingLeft: false,
          smallerText: false,
        };
      case '/ads':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/ads/logo/2023/ads.png',
          name: 'Clikkle',
          title: 'Ads',
          paddingLeft: false,
          smallerText: false,
        };
      case '/pitch':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/pitch/logo/2023/pitch.png',
          name: 'Clikkle',
          title: 'Pitch',
          paddingLeft: false,
          smallerText: false,
        };
      case '/mail':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/cmail/logo/2023/cmail.png',
          name: 'Clikkle',
          title: 'C-Mail',
          paddingLeft: false,
          smallerText: false,
        };
      case '/projects':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects.png',
          name: 'Clikkle',
          title: 'Projects',
          smallerText: true,
          paddingLeft: false,
          smallerSize: true,
        };
      case '/launch':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/launch/logo/2023/launch.png',
          name: 'Clikkle',
          title: 'Launch',
          smallerText: true,
          paddingLeft: false,
          smallerSize: true,
        };
      case '/hr':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/hr/logo/2023/hr.png',
          name: 'Clikkle',
          title: 'Hr',
          paddingLeft: true,
          smallerText: false,
        };
      case '/tax':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/tax/logo/2023/tax.png',
          name: 'Clikkle',
          title: 'Tax',
          paddingLeft: true,
          smallerText: false,
        };
      case '/chat':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/chat/logo/2023/chat.png',
          name: 'Clikkle',
          title: 'Chat',
          paddingLeft: true,
          smallerText: false,
        };
      case '/social':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/social/logo/2023/social.png',
          name: 'Clikkle',
          title: 'social',
          paddingLeft: true,
          smallerText: false,
        };
      case '/watsup':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/sms/logo/2023/sms.png',
          name: 'Clikkle',
          title: 'watsup',
          smallerText: true,
          paddingLeft: false,
          smallerSize: true,
        };
      case '/crew':
        return {
          logoSrc: 'https://cdn.clikkle.com/images/crew/logo/2023/crew.png',
          name: 'Clikkle',
          title: 'Crew',
          paddingLeft: true,
          smallerText: false,
        };
        case '/swiprr':
          return {
            logoSrc: 'https://cdn.clikkle.com/images/swiprr/logo/2023/swiprr.png',
            name: 'Clikkle',
            title: 'Swiprr',
            paddingLeft: false,
            smallerText: false,
          };
          case '/keptup':
          return {
            logoSrc: 'https://cdn.clikkle.com/images/kept-up/logo/2023/kept-up.png',
            name: 'Clikkle',
            title: 'KeptUp',
            paddingLeft: false,
            smallerText: false,
          };
        
      default:
        return {
          logoSrc: Icon,
          name: 'Shahid Shaik',
          title: '',
          paddingLeft: true,
          smallerText: false,
        };
    }
  };

  const { logoSrc, name, title, smallerText, paddingLeft, smallerSize } = getBrandInfo();

  return (
    <div className={`flex items-center flex-grow gap-2 ${paddingLeft ? 'pl-4' : ''}`}>
      <Link to={'https://clikkle.com'}>
        <img
          className={`w-[35px] h-[35px] sm:${smallerSize ? 'w-[33px] h-[33px]' : 'w-[20px] h-[20px]'} `}
          src={logoSrc}
          alt={name}
        />
      </Link>
      <Link to={'https://clikkle.com'}>
        <h1 className={`text-black dark:text-white text-base sm:text-3xl md:text-3xl lg:text-3xl font-bold ${smallerText ? 'text-sm' : ''}`}>
          {name}
        </h1>
      </Link>
      <Link to={'https://clikkle.com'}>
        <h1 className={`text-black dark:text-white text-base sm:text-2xl md:text-2xl lg:text-3xl ${smallerText ? 'text-sm' : ''}`}>
          {title}
        </h1>
      </Link>
    </div>
  );
};

export default Brand;
