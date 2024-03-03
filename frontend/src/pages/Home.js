import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
  useTheme,
  Button,
  CardContent,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CardElement from "../component/CardElement";
import Footer from "../component/Footer";
import Header from "../component/Header";
import LoadingBox from "../component/LoadingBox";
import Navbar from "../component/Navbar";
import SelectComponent from "../component/SelectComponent";
import { jobLoadAction } from "../redux/actions/jobAction";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";
import SearchInputEl from "../component/SearchInputEl";
import PopularProjects from "../component/ProjectCard";

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
}, [dispatch, page, keyword, cat, location]);

useEffect(() => {
    dispatch(jobTypeLoadAction());
}, [dispatch]);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            // background: 'url("https://cdn.pixabay.com/photo/2018/03/10/11/54/tool-3213915_960_720.jpg")',
            // background: 'url("https://images.pexels.com/photos/4491918/pexels-photo-4491918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with your actual image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              component="h1"
              color="primary.main"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Welcome to HuzaHub!
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 2, color: 'black', fontWeight: 'bold', marginBottom: '100px' }}>
              Discover trusted handyman services near you.
            </Typography>
            <SearchInputEl />
            {/* <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Search Now
            </Button> */}
            {/* <Box mt={2}>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "secondary.main" }}>
                  Don't have an account? Sign up
                </Typography>
              </Link>
            </Box> */}
          </Container>
        </Box>
        <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        {/* ... existing search bar Box ... */}

        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid container spacing={4}>
            {/* Jobs and Popular Projects Section */}
            <Grid item xs={12} md={8} lg={9} >
              {/* Popular Projects Section */}
              <Box display="flex" justifyContent="center" marginBottom="50px">
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                  Popular Projects
                </Typography>
              </Box>
              <Grid container spacing={4} justifyContent="center">
                <PopularProjects />
              </Grid>
              </Grid>

              <Grid item xs={12} lg={7}>
              {/* Jobs Listing */}
              {loading ? (
                <LoadingBox />
              ) : (
                <Box>
                  {/* Conditionally render jobs or no results message */}
                  {jobs && jobs.length === 0 ? (
                    <Typography variant="h6">No result found!</Typography>
                  ) : (
                    jobs.map((job, i) => (
                      <CardElement key={i} {...job} />
                    ))
                  )}
                  <Pagination
                    // Pagination props
                  />
                </Box>
              )}
            </Grid>

            {/* Filter by Section */}
            <Grid item xs={12} md={4} lg={3}>
            <Card sx={{ position: 'sticky', top: 80 }}> {/* Adjust top as necessary */}
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", mb: 2, color: palette.primary.main }}
                  >
                    Filter by
                  </Typography>
                  <SelectComponent
                    handleChangeCategory={handleChangeCategory}
                    cat={cat}
                  />
                  <MenuList>
                    {setUniqueLocation &&
                      setUniqueLocation.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            <LocationOnIcon fontSize="small" />
                          </ListItemIcon>
                          <Typography variant="body2">
                            <Link to={`/search/location/${location}`}>
                              {location}
                            </Link>
                          </Typography>
                        </MenuItem>
                      ))}
                  </MenuList>
                </CardContent>
              </Card>
            </Grid>
            </Grid>
          {/* </Grid> */}
        </Container>
      </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
