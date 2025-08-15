import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useTheme } from '@mui/material/styles';
import Indussynergylogo from "../assets/images/logoindus.jpeg";

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Service', path: '/service' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: theme.zIndex.drawer + 1,
          width: '100vw !important',
          left: '0 !important',
          right: '0 !important',
          overflowX: 'hidden !important',
        }}
      >
        <Container
          disableGutters={false}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '90vw' },
            px: { xs: 2, md: 3 },
            mx: 'auto',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: { xs: 56, md: 64 },
              width: '100%',
              px: 0,
            }}
          >
            <Link to="/" className="flex items-center mr-2 flex-shrink-0">
            <img
  src={Indussynergylogo}
  alt="IndUS Synergy Logo"
  className="w-[9rem] lg:w-[14rem] py-1 rounded-sm object-cover"
/>

            </Link>

            {isMobile ? (
              <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                aria-label="menu"
                sx={{ ml: 'auto', color: '#151a30' }} // <-- Set hamburger icon color
              >
                <AiOutlineMenu />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: '#151a30',
                      fontSize: '1.1rem',
                      textTransform: 'capitalize',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal', // <-- Active item bold
                      '&:hover': { color: '#151a30' },
                      minWidth: 80,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: 'white',
            overflowX: 'hidden',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            pt: 12,
            px: 3,
            overflowY: 'auto',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                selected={isActive(item.path)}
                sx={{
                  mb: 1.5,
                  color: '#151a30',
                  fontSize: '1.15rem',
                  fontWeight: isActive(item.path) ? 'bold' : 'normal', // <-- Active item bold
                  borderRadius: 1,
                  '&.Mui-selected': {
                    backgroundColor: '#f0e8d5',
                    color: '#c0b596',
                  },
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Header;
