import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Brand from './brand';
import SidebarDrawer from './sidebarDrawer';
import AppListToggler from './appList';
import { useTheme } from '../atoms/theme';

const Header = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600); 

  const toggleLeftDrawer = () => setLeftDrawerOpen((prev) => !prev);

  const updateIsMobileView = () => {
    setIsMobileView(window.innerWidth < 600); 
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobileView);
    return () => window.removeEventListener('resize', updateIsMobileView);
  }, []);

  const isCrewPage = location.pathname === '/crew';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          boxShadow: 'none',
          height: '55px',
          ...(theme === 'light' ? { backgroundColor: '#fff' } : {}),
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleLeftDrawer}
            style={{ ...(theme === 'light' ? { color: '#000' } : {}) }}
          >
            <MenuIcon />
          </IconButton>

          <Brand />
          
          {!isMobileView && isCrewPage && (
            <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
              <button className='text-zinc-700 dark:text-zinc-300 text-sm font-bold'>
                <Link to={"https://accounts.clikkle.com/login"}>
                  Sign In
                </Link>
              </button>
              <Button
                size="large"
                variant="outlined"
                style={{ marginLeft: '16px' }}
              >
                <Link
                  to="https://accounts.clikkle.com/register?redirectto=https%3A%2F%2Fapps.clikkle.com%2F"
                  style={{ textDecoration: 'none' }}
                >
                  Join a meeting
                </Link>
              </Button>
              <Button
                size="large"
                variant="contained"
                style={{ marginLeft: '16px' }}
              >
                <Link
                  to="https://accounts.clikkle.com/register?redirectto=https%3A%2F%2Fapps.clikkle.com%2F"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Start a meeting
                </Link>
              </Button>
            </Box>
          )}
          <AppListToggler />
        </Toolbar>
      </AppBar>
      <Divider/>

      <SidebarDrawer open={leftDrawerOpen} toggle={toggleLeftDrawer} />
    </Box>
  );
};

export default Header;
