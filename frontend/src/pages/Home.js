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
import DrawerLeft from "../component/DrawerLeft";

const Home = () => {
  const { setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Include credentials with the request
        const response = await fetch("http://localhost:9000/api/allUsers", {
          credentials: "include", // This line is added to include cookies with the request
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response)
        const data = await response.json();
        console.log(data)
        const taskers = data.users.filter((user) => user.role === 'service provider');

        // console.log("data", data.users.filter((user) => user.role !== "admin"));
        setUsers(taskers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log("all users", users);

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
  const itemsPerPage = 2;
const [currentPage, setCurrentPage] = useState(1);

// Calculate total pages
const totalPages = Math.ceil(users.length / itemsPerPage);

// Calculate the users to display on the current page
const indexOfLastUser = currentPage * itemsPerPage;
const indexOfFirstUser = indexOfLastUser - itemsPerPage;
const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

// Handle change page
const handleChangePage = (event, newPage) => {
  setCurrentPage(newPage);
};

  return (
   <>
      <DrawerLeft>
        <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
          {/* Welcome section remains unchanged */}
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
          </Container>
        </Box>
          <Container maxWidth="lg" sx={{ py: 5 }}>
            <Grid container spacing={4}>
              {/* Popular Projects Section */}
              <Grid item xs={12} md={8} lg={9}>
                <Box display="flex" justifyContent="center" marginBottom="50px">
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                    Popular Projects
                  </Typography>
                </Box>
                <Grid container spacing={4} justifyContent="center">
                  <PopularProjects />
                </Grid>
              </Grid>

              {/* Service Providers Section */}
              <Grid item xs={12} md={8} lg={9}>
                <Grid container spacing={2}>
                  {currentUsers.map((user) => (
                    <Grid item xs={12} sm={6} key={user._id}>
                      <Card
                        sx={{
                          ':hover': {
                            transform: 'scale(1.01)',
                            transition: 'transform 1s ease-in-out',
                          },
                        }}
                      >
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                          {/* Location above the username */}
                          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 12, color: palette.primary.main, mt: 1, mb: 2 }}>
                            <LocationOnIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />
                            <Typography component="span" sx={{ fontWeight: 'bold' }}>
                              {user.location}
                            </Typography>
                          </Box>
                          
                          {/* Username with larger size */}
                          <Typography variant="h6" sx={{ mt: 1, mb: 2, fontWeight: 'bold' }}>
                            {user.username}
                          </Typography>
                          
                          {/* Additional user details */}
                          <Typography variant="body2">Fee: {user.fee}</Typography>
                          <Typography variant="body2">Service Type: {user.serviceType}</Typography>
                          <Typography variant="body2">Description: {user.description}</Typography>
                          
                          {/* Book Now button */}
                          <Button 
                            variant="contained" 
                            sx={{ mt: 2, textDecoration: 'none', color: 'white' }} 
                            component={Link} 
                            to="/booking"
                          >
                            Book Now
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                {/* Pagination Control */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
                </Box>
              </Grid>

              {/* Filter Section */}
              <Grid item xs={12} md={4} lg={3}>
              <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 2, p: 2 }}>
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter service provider by category
                                    </Typography>
                                </Box>
                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />

                            </Card>

                            {/* jobs by location */}
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                                <Box sx={{ pb: 2 }}>
                                    {/* <h4>Filter by category</h4> */}
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter service provider by location
                                    </Typography>
                                    <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                        <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    <Link style={{ color: palette.secondary.main }} to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>

                                            ))
                                        }

                                    </MenuList>

                                </Box>
                            </Card>
                        </Box>
                      </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DrawerLeft>
      <Footer />
    </>
  );
};

export default Home;
