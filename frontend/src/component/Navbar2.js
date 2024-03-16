import { AppBar, Toolbar, Button, useTheme } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

const Navbarr = () => {
  const theme = useTheme();
  const { palette } = useTheme();


  return (
    <AppBar position="static" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: palette.primary.main}}>
      {/* justifyContent: 'flex-start', */}
      <Toolbar sx={{  padding: '0 24px', justifyContent: 'space-between', }}>
        {/* Logo and brand name */}
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
            {/* Adjust the right margin as needed */}
          <WorkIcon sx={{ display: { xs: 'none', md: 'flex', color: 'white' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            HuzaHub
          </Typography>
        </Box>
        
        {/* Navigation Links */}
        <nav>
          <Button sx={{ my: 1, mx: 1.5 , color: 'white', fontWeight: 'bold'}}>
            <a
            href="#footer"
              style={{ textDecoration: "none", color: "white" }}
            >
                About us
            </a>
          </Button>
            {/* Action buttons */}
        <Button component={RouterLink} to="/login" sx={{
          my: 1,
          mx: 1.5,
          color: 'white',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: 'white', // On hover the Login button changes to the primary color
            color: theme.palette.primary.main,
            transition: theme.transitions.create(['background-color', 'color'], {
              duration: theme.transitions.duration.standard,
            }),
          },
        }}>
          Log in
        </Button>
        <Button component={RouterLink} to="/signup" variant="contained" sx={{
          my: 1,
          mx: 1.5,
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: 'white', // On hover the Get Started button changes to white
            color: theme.palette.primary.main,
            transition: theme.transitions.create(['background-color', 'color'], {
              duration: theme.transitions.duration.standard,
            }),
          },
        }}>
          Start Working
        </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbarr;
