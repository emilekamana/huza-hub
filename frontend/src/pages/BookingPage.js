import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Stack } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link} from "react-router-dom";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto', bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center' }}>
        Book a handyman
      </Typography>
      {/* <Typography gutterBottom>Plumbing Services</Typography> */}
      <Stack direction="column" spacing={2}>
        <TextField
          select
          label="Number"
          value="1"
          // handleChange function here
          helperText="Please select the number of items to be worked on"
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          {/* More menu items */}
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

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          <Link
              to="/payment"
              style={{ textDecoration: "none", color: "white" }}
          >
            Book
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingPage;
