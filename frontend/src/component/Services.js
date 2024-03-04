import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
// import { CardInfo } from '@mui/material';

// Dummy data for the projects
const projects = [
{
    title: 'Connect clients and service providers',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam diam, imperdiet quis odio vitae, iaculis tempor nibh. Phasellus sem neque, auctor vel maximus eu, interdum rutrum nisl. Aliquam erat.',
    
},
  {
    title: 'Facilitate easy payment',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam diam, imperdiet quis odio vitae, iaculis tempor nibh. Phasellus sem neque, auctor vel maximus eu, interdum rutrum nisl. Aliquam erat.',
    
  },
  {
    title: 'Make booking easy and fast',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam diam, imperdiet quis odio vitae, iaculis tempor nibh. Phasellus sem neque, auctor vel maximus eu, interdum rutrum nisl. Aliquam erat.',
    
  },
  {
    title: 'Make booking easy and fast',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam diam, imperdiet quis odio vitae, iaculis tempor nibh. Phasellus sem neque, auctor vel maximus eu, interdum rutrum nisl. Aliquam erat.',
    
  },
  {
    title: 'Make booking easy and fast',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam diam, imperdiet quis odio vitae, iaculis tempor nibh. Phasellus sem neque, auctor vel maximus eu, interdum rutrum nisl. Aliquam erat.',
    
  },
  {
    title: 'Make booking easy and fast',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam diam, imperdiet quis odio vitae, iaculis tempor nibh. Phasellus sem neque, auctor vel maximus eu, interdum rutrum nisl. Aliquam erat.',
    
  },

  // Add more projects as needed
];

const Services = () => {
    return (
            <Box sx={{ flexGrow: 1, padding: 3 }}>
              <Box textAlign="center" sx={{ marginBottom: 4 }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  What we do
                </Typography>
              </Box>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
                {projects.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ height: '100%', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <CardActionArea sx={{ height: '100%' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="div">
                            {service.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {service.info}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        };

export default Services;
