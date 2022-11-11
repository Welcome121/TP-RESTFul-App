import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import { AppBar, Box, Toolbar, Typography, styled, alpha, InputBase } from '@mui/material';
import { Stack } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
            width: '20ch',
            },
        },
    },
}));

export default function Header() {
    return(
        <>
            <Box
                sx={{
                    width: "100%"
                }}
            >
                <AppBar
                    position="relative"
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        paddingX: "15px",
                        paddingY: "5px",
                    }}
                >
                    <Toolbar 
                        disableGutters
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                            <Stack
                                direction="column"
                                justifyContent="start"
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row"
                                    }}
                                >
                                    <Typography
                                        variant="h1"
                                        fontFamily="Anton"
                                        fontSize="35px"
                                        marginRight="5px"

                                        color="red"
                                    >
                                        COL
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        fontFamily="Anton"
                                        fontSize="35px"
                                    >
                                        MOVIE
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="p"
                                    fontFamily="Poppins"
                                    fontSize="12px"
                                    letterSpacing="5px"
                                >
                                    tudo da arte cinematográfica
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing="15px"
                            >
                                <Typography
                                    variant="p"
                                    fontFamily="Poppins"
                                    fontSize="15px"
                                    mr="25px"
                                    letterSpacing="3px"
                                >
                                    Home
                                </Typography>
                                <Typography
                                    variant="p"
                                    fontFamily="Poppins"
                                    fontSize="15px"
                                    letterSpacing="3px"
                                >
                                    Minha Lista
                                </Typography>
                            </Stack>
                            <Box>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon color="white"/>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Pesquisar..."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}