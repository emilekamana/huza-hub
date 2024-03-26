import { Box, Typography, Avatar, Chip, Button, Rating } from "@mui/material";
import React from "react";
import DrawerLeft from "../../component/DrawerLeft";
import Footer from "../../component/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { id } from "date-fns/locale";
// import jwtDecode from 'jwt-decode';


const AdminDashboard = () => {
  // Assume user data is fetched from the backend and set here
  // const user = {
  //   username: 'Kim Parkinson',
  //   bio: 'I will inspire 10 million people to do what they love the best they can!',
  //   rating: 5,
  //   reviews: 26,
  //   price: 3.00,
  //   sessionTime: 5,
  //   sessions: 36,
  //   email: 'katein@mail.com',
  // };
  const { keyword, location } = useParams();

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const getTokenFromCookie = () => {
          const token = Cookies.get('token'); // Replace 'token' with your cookie's name
          console.log('Token retrieved:', token);
          return token;
        };
        console.log(getTokenFromCookie());
        // Ensure the token is a string and exists
        if (typeof token !== 'string' || !getTokenFromCookie()) {
          throw new Error('Token is not available or not a string');
        }
        
        // Decode the token
        const jwtDecode = require('jwt-decode');
        const decodedToken = jwtDecode.jwtDecode(getTokenFromCookie());
    
        // Assuming your token structure has an 'id' field
        const userId = decodedToken.id;
        if (!userId) {
          throw new Error('User ID not found in token');
        }
    
        const response = await fetch(`/api/user/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getTokenFromCookie()}`,
          },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not okay');
        }
    
        const data = await response.json();
        setUser(data.user); // Assuming the user data is in data.user
      } catch (error) {
        setError('Failed to fetch user: ' + error.message);
      }
    };

    fetchUser();
  }, [id]); // Only re-run the effect if new id is provided

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DrawerLeft>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            bgcolor: "background.paper",
            py: 8,
          }}>
          <Avatar
            sx={{ width: 140, height: 140, mb: 2 }}
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {user.username}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
            {user.description}
          </Typography>
          <Rating name="read-only" value={user.rating} readOnly />
          {/* <Typography variant="subtitle1" sx={{ mt: 1 }}>
            {user.reviews} reviews
          </Typography> */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Chip
              label={`$${user.fee} per min`}
              variant="outlined"
              sx={{ mb: 1 }}
            />
            {/* <Chip label={`${user.sessionTime} mins min talk time`} variant="outlined" sx={{ mb: 1 }} />
            <Chip label={`${user.sessions} sessions`} variant="outlined" /> */}
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <Button variant="contained" sx={{ alignSelf: "flex-start" }}>
              Change profile
            </Button>
          </Box>
        </Box>
        <Footer />
      </DrawerLeft>
    </>
  );
};

export default AdminDashboard;
