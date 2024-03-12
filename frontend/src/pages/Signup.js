import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { userSignUpAction } from "../redux/actions/userAction";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  repeatPassword: yup
    .string("Repeat your password")
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  location: yup.string("Enter your location").required("location is required"),
  fee: yup.string("Enter your fee").required("fee is required"),
  serviceType: yup
    .string("Enter your serviceType")
    .required("Service type is required"),
  description: yup
    .string("Enter your description")
    .required("description is required"),
});

const ServiceProvider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      repeatPassword: "",
      location: "",
      fee: "",
      serviceType: "",
      description: "",
      role: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      dispatch(userSignUpAction({ ...values, role: "service provider" }));
      actions.resetForm();
      navigate("/signin");
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        bgcolor: "background.default",
      }}>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: 3,
          width: "100%",
          maxWidth: "340px",
          bgcolor: "background.paper",
        }}
        component="form"
        onSubmit={formik.handleSubmit}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign up as a Service Provider
        </Typography>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          id="repeatPassword"
          name="repeatPassword"
          label="Repeat password"
          type="password"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.repeatPassword &&
            Boolean(formik.errors.repeatPassword)
          }
          helperText={
            formik.touched.repeatPassword && formik.errors.repeatPassword
          }
          sx={{ mb: 3 }}
        />
        <TextField
          margin="normal"
          fullWidth
          id="location"
          name="location"
          label="Location"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
        />
        <TextField
          margin="normal"
          fullWidth
          id="fee"
          name="fee"
          label="Fee"
          type="number"
          value={formik.values.fee}
          onChange={formik.handleChange}
          error={formik.touched.fee && Boolean(formik.errors.fee)}
          helperText={formik.touched.fee && formik.errors.fee}
        />
        <TextField
          select
          label="Service Type"
          id="serviceType"
          name="serviceType"
          value={formik.values.serviceType}
          onChange={formik.handleChange}
          margin="normal"
          fullWidth>
          {[
            "Appliance Maintenance",
            "Plumbing Services",
            "Electricity Services",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          id="description"
          name="description"
          label="Description"
          multiline
          rows={2}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Sign up
        </Button>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}></Box>
        <Typography variant="body2">
          Already a member?{" "}
          <Button href="/signin" color="primary">
            Sign in
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceProvider;
