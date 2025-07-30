import React, { useState, useRef } from 'react';
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
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Container,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { ArrowDropDown } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
    { label: 'Service', path: '/service' },

  // {
  //   label: 'Services',
  //   submenu: [
  //     { label: 'Legal Services', path: '/services/legal' },
  //     { label: 'NRI Assistance', path: '/services/nri' },
  //     { label: 'Corporate Law', path: '/services/corporate' },
  //     { label: 'Wealth & Legacy', path: '/services/wealth' },
  //   ],
  // },
  // { label: 'Founders', path: '/founders' },
  // { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const ServicesDropdown = ({ isActive }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const services = navItems.find((item) => item.label === 'Services').submenu;

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{ display: 'inline-block', position: 'relative' }}
    >
      <Button
        ref={anchorRef}
        endIcon={<ArrowDropDown />}
        disableRipple
        sx={{
          color: isActive('/services') ? '#c0b596' : 'white',
          fontSize: '1.1rem',
          textTransform: 'capitalize',
          backgroundColor: 'transparent !important',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#c0b596',
          },
          minWidth: 100,
        }}
      >
        Services
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ]}
        sx={{ zIndex: 9999 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
            <Paper
              elevation={2}
              sx={{ minWidth: 180, border: '1px solid #eee' }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList autoFocusItem={open}>
                  {services.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      sx={{
                        fontSize: '1.05rem',
                        color: '#333',
                        '&:hover': {
                          backgroundColor: '#f4f4f4',
                          color: '#272c3f',
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

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
          backgroundColor: '#272c3f',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: theme.zIndex.drawer + 1,
          width: '100%',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '90vw' },
            pl: { xs: 1, md: 3 },
            pr: { xs: 5, md: 3 },
            mx: { xs: 0, md: 'auto' },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: { xs: 56, md: 64 },
              px: 0,
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                textTransform: 'uppercase',
                userSelect: 'none',
                flexShrink: 0,
              }}
            >
              IndUS Synergy
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
                size="large"
                aria-label="menu"
              >
                <AiOutlineMenu />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {navItems.map((item) =>
                  item.label === 'Services' ? (
                    <ServicesDropdown key={item.label} isActive={isActive} />
                  ) : (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: isActive(item.path) ? '#c0b596' : 'white',
                        fontSize: '1.1rem',
                        textTransform: 'capitalize',
                        '&:hover': { color: '#c0b596' },
                        minWidth: 80,
                      }}
                    >
                      {item.label}
                    </Button>
                  )
                )}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 260,
            backgroundColor: 'white',
            height: '100%',
            pt: 6,
            px: 3,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <Box key={item.label} sx={{ mb: 3 }}>
                    <ListItem>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                          color: 'black',
                        }}
                      />
                    </ListItem>
                    {item.submenu.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.label}
                        component={Link}
                        to={subItem.path}
                        selected={isActive(subItem.path)}
                        sx={{
                          pl: 4,
                          mb: 1,
                          color: 'black',
                          fontSize: '1.1rem',
                          borderRadius: 1,
                          '&.Mui-selected': {
                            backgroundColor: '#f0e8d5',
                            color: '#c0b596',
                            fontWeight: 'bold',
                          },
                          '&:hover': {
                            backgroundColor: '#f4f4f4',
                          },
                        }}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                  </Box>
                );
              } else {
                return (
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
                );
              }
            })}
          </List>
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Header;
