import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import Navbarr from "../component/Navbar2";
import SlickSlider from "../component/SlickSlider";
import TaskerSuggestions from "../component/TaskerSuggestions";
import HowItWorks from "../component/HowItWorks";

const LandingPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ minHeight: "100vh"}}>
        <Navbarr />
        <Box
          sx={{
            position: 'relative', // Needed for absolute positioning of children
            textAlign: "center",
            py: 8,
            color: "white",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* SlickSlider as a background */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <SlickSlider />
          </Box>

          <Typography variant="h2" sx={{ mb: 10, zIndex: 1, fontWeight: 'bold' }}>
            Welcome to HuzaHub!
          </Typography>
          <Button
            variant="contained"
            sx={{ mb: 10, bgcolor: theme.palette.primary.main, zIndex: 1 }}
          >
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              Request for taskers
            </Link>
          </Button>
        </Box>
        
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={8}>
              <HowItWorks />
              {/* The SlickSlider is moved to the top Box */}
            </Grid>
            <Grid item xs={12} md={4}>
              <TaskerSuggestions />
            </Grid>
          </Grid>
        </Container>
        {/* Add additional content sections here as needed */}
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
