import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Component/Navbar'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '../../Component/Footer';
import EventNavbar from '../../Component/EventNavbar';
const Day1 = () => {

    const contestData = [
        {
            title: 'Theta 2k24 Film Festival',
            lastDate: '01:00 p.m. - 4:00 p.m. | Venue: 202',
            submissionDates: 'Film Studies',
        },
        {
            title: 'Photography Challenge',
            lastDate: '9:00 a.m. - 12:00 p.m. | Venue: 303',
            submissionDates: 'Art & Design',
        },
        {
            title: 'Innovative Tech Expo',
            lastDate: '2:00 p.m. - 5:00 p.m. | Venue: LAB-1',
            submissionDates: 'Technology',
        },
        {
            title: 'Creative Writing Contest',
            lastDate: '10:00 a.m. - 1:00 p.m. | Venue: 401',
            submissionDates: 'Literature',
        },
        {
            title: 'Science Fair',
            lastDate: '11:00 a.m. - 2:00 p.m. | Venue: 106 & 107',
            submissionDates: 'Science & Innovation',
        },
        {
            title: 'Music Band Competition',
            lastDate: '10:00 a.m. - 1:00 p.m. | Venue: Auditorium',
            submissionDates: 'Performing Arts',
        },
        {
            title: 'Math Olympiad',
            lastDate: '1:00 p.m. - 3:00 p.m. | Venue: 416',
            submissionDates: 'Mathematics',
        },
        {
            title: 'Coding Hackathon',
            lastDate: '10:00 a.m. - 1:00 p.m. | Venue: LAB-2',
            submissionDates: 'Computer Science',
        },
    ];
    
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: "url(Assets/Logo.png)",
                    backgroundSize: "40%",
                    backgroundPosition: "center",
                    backgroundRepeat:'no-repeat',
                    color: "white",
                    padding: { xs: "30px 1rem", md: "50px 10rem" },
                    height: { xs: "50vh", md: "55vh" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0B1121",
                        opacity: 0.85,
                        zIndex: -1,
                    },
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
                       Day 1 Events
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center',pb:5 }}>
                        <Link to="/" style={{ textDecoration: "none" }} ><Typography
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
                           Day 1 Events
                        </Typography>
                    </Box>
                    <EventNavbar />
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        padding: 4,
                    }}
                >
                    {contestData.map((contest, index) => (
                        <Box
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={`${100 * index}`}
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '30%' },
                                height: 'auto',
                                bgcolor: '#E6F3FB',
                                gap: 2,
                                p: 3,
                                border: '3px solid #EF3D4E',
                                borderRadius: '10px',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease, box-shadow 0.5s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
                                },
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    mb: 1
                                }}
                            >
                                {contest.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.1rem',
                                    color: '#333',
                                    fontWeight: 600,
                                    letterSpacing: 0.8,
                                    mb: 2.5
                                }}
                            >
                             {contest.lastDate}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.3rem',
                                    color: '#9C79A1',
                                    fontWeight:700,
                                    letterSpacing:1,
                                    mb: 3,
                                }}
                            >
                                {contest.submissionDates}
                            </Typography>
                            <Button
                                variant="contained"
                                 href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F1%2Fd%2Fe%2F1FAIpQLSdP5O-OMQqGbG16zy409Bez6kPIw8j1MxAmTigOEIIXJsbXtw%2Fviewform%3Fvc%3D0%26c%3D0%26w%3D1%26flr%3D0%26usp%3Dmail_form_link&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F1%2Fd%2Fe%2F1FAIpQLSdP5O-OMQqGbG16zy409Bez6kPIw8j1MxAmTigOEIIXJsbXtw%2Fviewform%3Fvc%3D0%26c%3D0%26w%3D1%26flr%3D0%26usp%3Dmail_form_link&ifkv=ARpgrqd7Ih4Y2zXG4npHhCFNw6BjAF5O1WvkUAln9qkdNIsJeGosz6oFAwAJcETP-i-WOxxrWySAYw&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1289135996%3A172923316670464'
                                sx={{
                                    background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
                                    width:'80%',
                                    textTransform: "none",
                                    borderRadius: "50px",
                                    fontSize: "1rem",
                                    px: [4],
                                    color: "#fff",
                                    border: "2px solid transparent",
                                    "&:hover": {
                                        background: "transparent",
                                        border: "2px solid #EF3D4E",
                                        color: '#EF3D4E'
                                    },
                                }}
                            >
                                Register Now
                            </Button>
                        </Box>
                    ))} 
                </Box>
            </Box>
            <Box sx={{ bgcolor: "#000212" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: "center", py: 5 }}>
                    <Divider
                        variant="middle"
                        component="li"
                        sx={{
                            borderColor: '#282828',
                            width: '92%',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scaleY(1.1)',
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                width: '30%',
                                height: '2px',
                                backgroundColor: '#FFD700',
                                top: '50%',
                                left: '0',
                                transform: 'translateY(-50%)',
                                transition: 'width 0.3s ease',
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '30%',
                                height: '2px',
                                backgroundColor: '#FFD700',
                                top: '50%',
                                right: '0',
                                transform: 'translateY(-50%)',
                                transition: 'width 0.3s ease',
                            },
                            '&:hover::before, &:hover::after': {
                                width: '40%',
                            },
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default Day1
