import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import Navbarr from "../component/Navbar2";
import SlickSlider from "../component/SlickSlider";
const HandymanBox = () => {
  const { palette } = useTheme();
};
const LandingPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <Navbarr />
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            backgroundImage:
              'url("https://images.pexels.com/photos/4491918/pexels-photo-4491918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with your actual image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Button
            variant="contained"
            sx={{ mb: 2, color: theme.palette.primary.main }}>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}>
              Request for taskers
            </Link>
          </Button>
        </Box>
        {/* Title Section */}
        <Container sx={{ py: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
            HuzaHub Services
          </Typography>
          {/* Slideshow Placeholder */}
          <SlickSlider />
        </Container>
        {/* Add additional content sections here as needed */}
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
