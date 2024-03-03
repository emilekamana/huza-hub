import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Typography sx={{
                height: '70px',
                bgcolor: palette.primary.main,
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 700,
                color: palette.primary.contrastText,
                alignItems: 'center'
            }}>
                <Box component='span' >All rights reserved! 2024.</Box>

            </Typography>
        </>
    )
}

export default Footer