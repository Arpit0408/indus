import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
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
import Indussynergylogo from "../assets/images/logoimage.jpeg";

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

  const isActive = (path) => location.pathname.startsWith(path);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',

          //272c3f
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: theme.zIndex.drawer + 1,
          // Crucial for mobile width
          width: '100vw !important', // Use 100vw to ensure it covers the *viewport width*
          left: '0 !important',
          right: '0 !important',
          overflowX: 'hidden !important', // Ensure no horizontal overflow within AppBar
        }}
      >
        <Container
          // Using `disableGutters` if you want to control padding manually on the Container
          // and let the Toolbar manage its inner spacing.
          // Or keep it false if you rely on Material-UI's default Container padding.
          disableGutters={false} // Keeping default Material-UI gutters can be helpful
          sx={{
            width: '100%', // Take full width of AppBar
            // Max width for larger screens
            maxWidth: { xs: '100%', md: '90vw' },
            // Responsive padding
            px: { xs: 2, md: 3 }, // Example: 16px on mobile, 24px on desktop
            mx: 'auto', // Center the container horizontally
            // No overflowX here, rely on AppBar's overflowX: hidden
          }}
        >
          <Toolbar
            disableGutters // Remove Toolbar's default horizontal padding
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: { xs: 56, md: 64 },
              width: '100%',
              // The container's padding should handle spacing from edges, so Toolbar px:0
              px: 0, 
            }}
          >
            {/* <Typography
              variant="h6"
              component={Link}
              to="/"
              noWrap 
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                textTransform: 'uppercase',
                userSelect: 'none',
                flexShrink: 0, 
                mr: 2, 
              }}
            >
              IndUS Synergy Partners
            </Typography> */}
<Link to="/" className="flex items-center mr-2 flex-shrink-0">
  <img
    src={Indussynergylogo}
    alt="IndUS Synergy Logo"
    className="w-[6rem] h-[6rem] rounded-sm object-cover"
  />
</Link>
            {isMobile ? (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
                size="large"
                aria-label="menu"
                sx={{ ml: 'auto' }} // Push menu icon to the far right
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
                      color: isActive(item.path) ? '#272c3f' : '#272c3f',
                      fontSize: '1.1rem',
                      textTransform: 'capitalize',
                      '&:hover': { color: '#272c3f' },
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
            overflowX: 'hidden', // Drawer content overflow handling
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            pt: 6, // Padding top to clear AppBar
            px: 3,
            overflowY: 'auto', // Scrollable if list is long
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
                  color: 'black',
                  fontSize: '1.15rem',
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

      {/* This Toolbar creates a placeholder to push content down below the fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Header;