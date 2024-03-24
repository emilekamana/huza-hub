import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Tooltip,
  Popover, 
  List, 
  ListItem, 
  ListItemText,
} from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { isSameDay } from 'date-fns';
import Footer from "../component/Footer";
import DrawerLeft from "../component/DrawerLeft";

// Sample bookings for the demonstration
// This should come from your backend API in a real application
const sampleBookings = {
  '2024-12-14': ['Morning 9-12', 'Afternoon 12-5'],
  '2024-12-15': ['Evening 5-7'],
};

const HomeTasker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderDayContent = (day, selectedDate, inCurrentMonth, dayComponent) => {
    const formattedDate = day.toISOString().split('T')[0];
    const isBooked = sampleBookings[formattedDate];

    return (
      <Tooltip title={isBooked ? 'Booked' : 'Available'}>
        {dayComponent}
      </Tooltip>
    );
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, date) => {
    setAnchorEl(event.currentTarget);
    setSelectedDate(date);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const formattedDate = selectedDate.toISOString().split('T')[0];
  const bookingsForSelectedDate = sampleBookings[formattedDate];

  return (
    <>
      <DrawerLeft>
        <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
            <Box
              sx={{
                textAlign: "center",
                py: 8,
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
                  Welcome Service Provider!
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
                  Provide services easily with HuzaHub.
                </Typography>
              
              <Box>
                {/* <Typography variant="h4" gutterBottom>
                  Availability
                </Typography> */}
                <Typography variant="subtitle1" gutterBottom sx={{
                  fontWeight: 'bold',
                  color: 'black'
                }}>
                  What's your daily availability to take bookings with potential clients?
                </Typography>

                {/* Availability Preview - Calendar */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={selectedDate}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                    }}
                    onDayClick={(newValue, event) => handleClick(event, newValue)}
                    renderDay={(day, selectedDate, inCurrentMonth, dayComponent) => {
                      const formattedDate = day.toISOString().split('T')[0];
                      const isBooked = !!sampleBookings[formattedDate];
                      const style = isBooked ? { backgroundColor: 'lightblue', borderRadius: '50%' } : {};

                      return (
                        <Box sx={{ ...style }}>
                          {dayComponent}
                        </Box>
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <List sx={{ minWidth: 220 }}>
                    {bookingsForSelectedDate ? bookingsForSelectedDate.map((timeSlot, index) => (
                      <ListItem button key={index}>
                        <ListItemText primary={timeSlot} />
                      </ListItem>
                    )) : <ListItem button><ListItemText primary="No bookings" /></ListItem>}
                  </List>
                </Popover>
              </Box>
            </Container>
          </Box>
        </Box>
        <Footer />
      </DrawerLeft>
    </>
  );
};

export default HomeTasker;
