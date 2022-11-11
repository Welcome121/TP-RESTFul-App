import React from 'react';

import { alpha, Box } from '@mui/system';

export default function Home() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",

                    paddingTop: "15px",

                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "justify",
                    textJustify:"inter-word",

                    backgroundColor: "black",
                    color: "white",
                }}
            >
                <Box
                    sx={{
                        width: "98%",
                        height: "100%",
                        backgroundColor: alpha("#FFF", 0.05)
                    }}
                >
                    
                </Box>
            </Box>
        </>
    )
}
