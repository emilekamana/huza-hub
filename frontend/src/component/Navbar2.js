import { AppBar, Toolbar, Button, useTheme } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const Navbarr = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ justifyContent: 'flex-start', padding: '0 24px' }}>
        {/* Logo and brand name */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '1000px' }}>
            {/* Adjust the right margin as needed */}
          <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              color: 'black',
              textDecoration: 'none',
            }}
          >
            HuzaHub
          </Typography>
        </Box>
        
        {/* Navigation Links */}
        <nav>
          <Button component={RouterLink} to="/about" sx={{ my: 1, mx: 1.5 , color: 'black', fontWeight: 'bold'}}>
            About us
          </Button>
        </nav>

        {/* Action buttons */}
        <Button component={RouterLink} to="/login" sx={{
          my: 1,
          mx: 1.5,
          color: 'black',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: theme.palette.primary.main, // On hover the Login button changes to the primary color
            color: 'white',
            transition: theme.transitions.create(['background-color', 'color'], {
              duration: theme.transitions.duration.standard,
            }),
          },
        }}>
          Log in
        </Button>
        <Button component={RouterLink} to="/register" variant="contained" sx={{
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
          Get started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbarr;
