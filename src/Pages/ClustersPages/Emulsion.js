import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TitleWithDescription from '../../Component/TitleWithDescription ';
const Emulsion = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${"Assets/Emulsion.png"})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: ['372px'],
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Navbar color="#fff" />
                <Box>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: ["20px", "22px", "36px"],
                            my: 1,
                            textAlign: 'center'
                        }}
                    >
                        Emulsion
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Link to="/home" style={{ textDecoration: "none" }} ><Typography
                            sx={{
                                color: "#9A9EA1",
                                fontWeight: "bold",
                                fontSize: '18px',
                            }}
                        >
                            Home
                        </Typography></Link>
                        <ArrowRightAltIcon sx={{
                            color: "#9A9EA1",
                            fontWeight: "bold",
                            fontSize: '36px',
                        }} />
                        <Typography
                            sx={{
                                color: "#9A9EA1",
                                fontWeight: "bold",
                                fontSize: '18px',
                            }}
                        >
                            About us
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <TitleWithDescription
                    title="About Emlusion"
                    description="Emulsion celebrates creativity and innovation in various forms of media and art. It includes contests such as photography, videography, AD, and short films. Participants showcase their skills and creativity in friendly competition."
                />
                <Typography
                    gutterBottom
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    sx={{
                        fontSize: { xs: "30px", sm: "35px", md: "32px" },
                        fontWeight: "semibold",
                        marginTop: "-2rem",
                        color: '#847D77',
                        textAlign: 'center',
                        letterSpacing: 2
                    }}
                >"We Speak Cinema"</Typography>
            </Box>
        </>
    )
}

export default Emulsion
