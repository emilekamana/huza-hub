import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from "react-google-charts";
import { data, options } from './data/data'
// import ChartComponent from '../../component/ChartComponent';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextField } from '@mui/material';
import DrawerLeft from '../../component/DrawerLeft';
import React, { useState } from 'react';
import Footer from '../../component/Footer';


const AdminDashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <>
        <DrawerLeft>
            <Box sx={{
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh',
            }}>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value="$5"
                        icon={<SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Price"
                        money=''
                    />
                    <StatComponent
                        value="450"
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Tasks"
                        money=''
                    />
                    <StatComponent
                        value="Pumbling"
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Service"
                        money=''
                    />

                </Stack>

                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        label="Booked Dates"
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        shouldDisableDate={date => {
                            // Logic to disable dates goes here
                            // For example, to disable weekends:
                            // return date.day() === 0 || date.day() === 6;
                        }}
                    />
                </LocalizationProvider>
            </Box>
            <Footer />
        </DrawerLeft>
        </>
    )
}

export default AdminDashboard