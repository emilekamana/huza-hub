import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CardElement from "../component/CardElement";
import LoadingBox from "../component/LoadingBox";
import Navbar from "../component/Navbar";
import PopularProjects from "../component/ProjectCard";
import SearchInputEl from "../component/SearchInputEl";
import SelectComponent from "../component/SelectComponent";
import { jobLoadAction } from "../redux/actions/jobAction";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";
import DrawerLeft from "../component/DrawerLeft";
import Footer from "../component/Footer";

const HomeTasker = () => {
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
    <DrawerLeft>
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
          }}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              component="h1"
              color="primary.main"
              gutterBottom
              sx={{ fontWeight: "bold" }}>
              Welcome Tasker!
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mb: 2,
                color: "black",
                fontWeight: "bold",
                marginBottom: "100px",
              }}>
              Discover trusted handyman services near you.
            </Typography>
          </Container>
        </Box>
      </Box>
      <Footer />
      </DrawerLeft>
    </>
  );
};

export default HomeTasker;
