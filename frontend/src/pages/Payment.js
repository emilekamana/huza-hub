import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import mtn from "../images/image 2.png";
import airte from "../images/image 3.png";
import visa from "../images/visa.PNG";
// import nesa from '../images/nesa.png';

const Payment = () => {
  // State to keep track of the selected payment method
  const [paymentMethod, setPaymentMethod] = useState('VISA');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Add your form submit handler here
  // ...

  return (
    <Box sx={{ margin: "auto", width: "80%", maxWidth: 400, paddingTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Payment
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: 4,
        }}>
        {/* Images as button icons */}
        <IconButton onClick={() => handlePaymentMethodChange('VISA')} color={paymentMethod === 'VISA' ? "primary" : "default"}>
          <img src={visa} alt="VISA" style={{ width: 70, height: 50 }} />
        </IconButton>
        <IconButton onClick={() => handlePaymentMethodChange('MTN')} color={paymentMethod === 'MTN' ? "primary" : "default"}>
          <img src={mtn} alt="MTN" style={{ width: 50, height: 50 }} />
        </IconButton>
        <IconButton onClick={() => handlePaymentMethodChange('AIRTEL')} color={paymentMethod === 'AIRTEL' ? "primary" : "default"}>
          <img src={airte} alt="AIRTEL" style={{ width: 50, height: 50 }} />
        </IconButton>
      </Box>

      {/* Conditionally rendering form fields */}
      {paymentMethod === 'VISA' && (
        <>
          <TextField
            fullWidth
            label="Card holder name"
            placeholder="eg. Mike Augustin"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Card number"
            placeholder="XXXX XXXX XXXX XXXX"
            margin="normal"
            variant="outlined"
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Exp date"
              placeholder="eg. 10/10"
              margin="normal"
              variant="outlined"
              sx={{ width: "48%" }}
            />
            <TextField
              label="CVV"
              placeholder="eg. 123"
              margin="normal"
              variant="outlined"
              sx={{ width: "48%" }}
            />
          </Box>
        </>
      )}

      {['MTN', 'AIRTEL'].includes(paymentMethod) && (
        <TextField
          fullWidth
          label="Phone number"
          placeholder="eg. 0777123456"
          margin="normal"
          variant="outlined"
        />
      )}

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <Button variant="text">Back</Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<CreditCardIcon />}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
