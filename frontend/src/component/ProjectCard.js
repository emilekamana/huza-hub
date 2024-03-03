import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid
} from '@mui/material';

// Define a single project card component
const ProjectCard = ({ title, image, startingPrice }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Projects starting at ${startingPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// Main component for the Popular Projects section
const PopularProjects = () => {
  // Dummy data for the projects
  const projects = [
    { title: 'Furniture Assembly', startingPrice: 49, image: 'https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?w=900&t=st=1709380581~exp=1709381181~hmac=6db72d32fe96444c7fd21195d8c2b24bcfe2861e44113d8cc1734eed606c3a4c' },
    { title: 'Mount Art or Shelves', startingPrice: 65, image: 'https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?w=900&t=st=1709380581~exp=1709381181~hmac=6db72d32fe96444c7fd21195d8c2b24bcfe2861e44113d8cc1734eed606c3a4c' },
    { title: 'Mount Art or Shelves', startingPrice: 65, image: 'https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?w=900&t=st=1709380581~exp=1709381181~hmac=6db72d32fe96444c7fd21195d8c2b24bcfe2861e44113d8cc1734eed606c3a4c' },
    { title: 'Mount Art or Shelves', startingPrice: 65, image: 'https://img.freepik.com/free-photo/plumbing-repair-service_181624-27146.jpg?w=900&t=st=1709380581~exp=1709381181~hmac=6db72d32fe96444c7fd21195d8c2b24bcfe2861e44113d8cc1734eed606c3a4c' },// ... more projects
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Typography variant="h4" gutterBottom>
        Popular Projects
      </Typography> */}
      <Grid container spacing={4} marginLeft={10}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
      <CardActionArea
          sx={{
            transition: "transform 0.15s ease-in-out",
            "&:hover": {
              transform: "scale3d(1.05, 1.05, 1)"
            }
          }}
        >
        </CardActionArea>
    </Box>
  );
};
// export { ProjectCard };
export default PopularProjects;

