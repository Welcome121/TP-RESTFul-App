import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    padding: "30px 0px",
                    textAlign: "center",

                    backgroundColor: "black",
                    color: "white",
                }}
            >
                <Typography
                    variant="h6"
                    fontFamily="Poppins"
                    fontSize="12px"
                    letterSpacing="2px"
                >
                    COPYRIGHT © 2022. CREATE BY ...
                </Typography>
            </Box>
        </>
    )
}
