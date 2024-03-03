import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { userSignUpAction } from '../redux/actions/userAction';

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('Username is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    repeatPassword: yup
        .string('Repeat your password')
        .required('Please confirm your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Signup = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            repeatPassword: '',
            rememberMe: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userSignUpAction(values));
            actions.resetForm();
        },
    });

    return (
        <>
            <Box sx={{ /* Styles to match the image */ }}>
                <form onSubmit={formik.handleSubmit}>
                    <LockOpenIcon />
                    <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
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
                    />
                    <TextField
                        fullWidth
                        id="repeatPassword"
                        name="repeatPassword"
                        label="Repeat password"
                        type="password"
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                        helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="rememberMe"
                                name="rememberMe"
                                color="primary"
                                checked={formik.values.rememberMe}
                                onChange={formik.handleChange}
                            />
                        }
                        label="Remember me"
                    />
                    <Button fullWidth variant="contained" type="submit">
                        Sign up
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default Signup;
