import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Stack } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link} from "react-router-dom";
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [address, setAddress] = useState('');
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const handleBooking = () => {
    // Here you'd normally validate the form fields
    // For the sake of this example, let's assume they are all filled in
    if (address && selectedDate && selectedTime) {
      // Trigger the Snackbar
      setBookingSuccess(true);
  
      // Here you would usually send the booking data to your server
      // ...
  
      // Optionally reset the form or navigate the user to another page
      setTimeout(() => {
        navigate('/payment');
      }, 3000);
    }
  }
  const handleCloseSnackbar = () => {
    setBookingSuccess(false);
  };
  
  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto', bgcolor: 'background.paper', borderRadius: 2, mt: 10 }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Book a service provider
      </Typography>
      {/* <Typography gutterBottom>Plumbing Services</Typography> */}
      <Stack direction="column" spacing={2}>
        <TextField
          label="address"
          value={address} 
          onChange={handleAddressChange}
          helperText="Please enter your address"
        >
        </TextField>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Prefer"
            inputFormat="MM/dd/yyyy"
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={selectedTime}
            onChange={setSelectedTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleBooking}>
          {/* <Link
              to="/payment"
              style={{ textDecoration: "none", color: "white" }}
          > */}
            Book
          {/* </Link> */}
        </Button>
        <Snackbar
          open={bookingSuccess}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Booking successful!"
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // This positions the snackbar at the top center.
        />
      </Stack>
    </Box>
  );
};

export default BookingPage;
