import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/Navbar2";
import SlickSlider from "../component/SlickSlider";
import TaskerSuggestions from "../component/TaskerSuggestions";
import HowItWorks from "../component/HowItWorks";
import Services from "../component/Services"; 
import Footer from "../component/Footer";
import Services2 from "../component/Services2";

const LandingPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ minHeight: "100vh"}} >
        <NavBar />

        {/* bgcolor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay */}



      <Box
          sx={{
            position: 'relative', // Needed for absolute positioning of children
            textAlign: "center",
            py: 8,
            color: "white",
            height: "80vh",
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

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{ mb: 10, bgcolor: theme.palette.primary.main, zIndex: 1,  }}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Request for service 
              </Link>
            </Button>

            <Button
              variant="outlined"

              sx={{ mb: 10, zIndex: 1, borderColor: 'white', ":hover": { bgcolor: theme.palette.primary.main, color: 'white'} }}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Start Working
              </Link>
            </Button>
          </Box>
        </Box>
        

            
        
        <Container maxWidth="xl" sx={{ py: 10 }}>
          <Grid container  alignItems="stretch">
            {/* <Services />  */}
            <Services2 /> 
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
      <Footer />
    </>
  );
};

export default LandingPage;
