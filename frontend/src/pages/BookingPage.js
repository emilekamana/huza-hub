import React from 'react';
import { Box, Typography, TextField, MenuItem, Button, Stack, Snackbar } from '@mui/material';
import { MobileDatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { bookAppointment } from '../redux/actions/bookingAction';
import { useNavigate } from 'react-router-dom';

// const { state } = useLocation();
// const serviceProviderId = state?.serviceProviderId;
// Adjust the validation schema if necessary
const informationSchema = yup.object({
  name: yup.string("Enter your username").required("Username is required"),
  address: yup.string("Enter your address").required("Address is required"),
  date: yup.date().required("Date is required"),
  time: yup.date().required("Time is required"),
});


const BookingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      date: new Date(),
      time: new Date(),
      // serviceProviderId: serviceProviderId,
    },
    validationSchema: informationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      dispatch(bookAppointment)
      actions.resetForm();
      navigate("/home");
    },
  });
  const handleBookingClick = (serviceProviderId) => {
    navigate(`/booking/${serviceProviderId}`); // For React Router v5
    // navigate(`/booking/${serviceProviderId}`); // For React Router v6
  };

  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto', bgcolor: 'background.paper', borderRadius: 2, mt: 10 }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Book a service provider
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField
            label="Name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            label="Address"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label="Date"
              inputFormat="MM/dd/yyyy"
              id="date"
              name="date"
              value={formik.values.date}
              onChange={(value) => formik.setFieldValue("date", value)}
              renderInput={(params) => <TextField {...params} error={formik.touched.date && Boolean(formik.errors.date)} helperText={formik.touched.date && formik.errors.date} />}
            />
            <TimePicker
              label="Time"
              id="time"
              name="time"
              value={formik.values.time}
              onChange={(value) => formik.setFieldValue("time", value)}
              renderInput={(params) => <TextField {...params} error={formik.touched.time && Boolean(formik.errors.time)} helperText={formik.touched.time && formik.errors.time} />}
            />
          </LocalizationProvider>

          <Button variant="contained" color="primary" type="submit">
            Book
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default BookingPage;
