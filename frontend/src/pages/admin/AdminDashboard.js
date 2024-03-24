import { Box, Typography, Avatar, Chip, Button, Rating } from '@mui/material';
import React from 'react';
import DrawerLeft from '../../component/DrawerLeft';
import Footer from '../../component/Footer';

const AdminDashboard = () => {
  // Assume user data is fetched from the backend and set here
  const user = {
    username: 'Kim Parkinson',
    bio: 'I will inspire 10 million people to do what they love the best they can!',
    rating: 5,
    reviews: 26,
    price: 3.00,
    sessionTime: 5,
    sessions: 36,
    email: 'katein@mail.com',
  };
  

  return (
    <>
      <DrawerLeft>
        <Box sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          minHeight: '100vh',
          bgcolor: 'background.paper',
          py: 8,
        }}>
          <Avatar sx={{ width: 140, height: 140, mb: 2 }} src="/static/images/avatar/1.jpg" />
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {user.username}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            {user.bio}
          </Typography>
          <Rating name="read-only" value={user.rating} readOnly />
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            {user.reviews} reviews
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Chip label={`$${user.price} per min`} variant="outlined" sx={{ mb: 1 }} />
            <Chip label={`${user.sessionTime} mins min talk time`} variant="outlined" sx={{ mb: 1 }} />
            <Chip label={`${user.sessions} sessions`} variant="outlined" />
          </Box>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>Change profile</Button>
          </Box>
        </Box>
        <Footer />
      </DrawerLeft>
    </>
  )
}

export default AdminDashboard;
