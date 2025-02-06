import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import React from 'react';
import Navbar from '.././Component/Navbar';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '.././Component/Footer';

const Developers = () => {
    const developers = [
        { name: 'Hari haran', role: 'Full Stack Developer', description: 'Expert in React and UI/UX design.', image: '/Assets/hari.png', github: 'https://github.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe', instagram: 'https://instagram.com/johndoe' },
        { name: 'Manoj kumar', role: 'Backend Developer', description: 'Specialist in Node.js.', image: '/Assets/manoj.png', github: 'https://github.com/janesmith', linkedin: 'https://linkedin.com/in/janesmith', instagram: 'https://instagram.com/janesmith' },
        { name: 'Manirathnam', role: 'Frontend Developer', description: 'Proficient in frontend development.', image: '/Assets/mani.png', github: 'https://github.com/alicejohnson', linkedin: 'https://linkedin.com/in/alicejohnson', instagram: 'https://instagram.com/alicejohnson' },
        { name: 'Jayasurya', role: 'DevOps Engineer', description: 'Experienced in cloud computing and CI/CD pipelines.', image: '/Assets/surya.png', github: 'https://github.com/bobbrown', linkedin: 'https://linkedin.com/in/bobbrown', instagram: 'https://instagram.com/bobbrown' },
        { name: 'Harish', role: 'Cybersecurity Specialist', description: 'Passionate about ethical hacking and security analysis.', image: '/Assets/harish.png', github: 'https://github.com/charliewhite', linkedin: 'https://linkedin.com/in/charliewhite', instagram: 'https://instagram.com/charliewhite' },
        { name: 'Mohamed Haaron', role: 'AI/ML Engineer', description: 'Focused on deep learning and data science applications.', image: '/Assets/haaroon.jpeg', github: 'https://github.com/emilydavis', linkedin: 'https://linkedin.com/in/emilydavis', instagram: 'https://instagram.com/emilydavis' }
    ];

    return (
        <>
            <Box sx={{ backgroundColor: "#0B1121", color: "white", padding: "50px 10rem", textAlign: 'center' }}>
                <Navbar color="#fff" />
                <Typography sx={{ fontWeight: "bold", fontSize: "36px", my: 2 }}>Our Developers</Typography>
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', pb: 5 }}>
                    <Link to="/" style={{ textDecoration: "none" }}><Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>Home</Typography></Link>
                    <ArrowRightAltIcon sx={{ color: "#9A9EA1" }} />
                    <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>Developers</Typography>
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, padding: 4 }}>
                    {developers.map((dev, index) => (
                        <Box key={index} sx={{ width: { xs: '100%', sm: '90%', md: '30%' }, bgcolor: '#E6F3FB', p: 3, border: '3px solid #EF3D4E', borderRadius: '10px', textAlign: 'center', transition: 'transform 0.3s ease, box-shadow 0.5s ease-in-out', '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)' } }}>
                            <Box component="img" src={dev.image} alt={dev.name} sx={{ width: '200px', height: '200px', borderRadius: '50%', mb: 2 }} />
                            <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', mb: 1 }}>{dev.name}</Typography>
                            <Typography sx={{ fontSize: '1.1rem', color: '#333', fontWeight: 600, mb: 2.5 }}>{dev.role}</Typography>
                            <Typography sx={{ fontSize: '1.3rem', color: '#9C79A1', fontWeight:700, mb: 3 }}>{dev.description}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                <IconButton href={dev.github} target="_blank" sx={{ color: '#333' }}><GitHub /></IconButton>
                                <IconButton href={dev.linkedin} target="_blank" sx={{ color: '#0077B5' }}><LinkedIn /></IconButton>
                                <IconButton href={dev.instagram} target="_blank" sx={{ color: '#E1306C' }}><Instagram /></IconButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Developers;
