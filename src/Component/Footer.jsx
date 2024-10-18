import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Event", path: "/AllEvents" },
  { title: "Contact Us", path: "/contact" },
];
const UsefulLinks = [
  { title: "Sastra University", path: "/https://www.sastra.edu/" },
  { title: "Rules & Regulation", path: "/about" },
];
const ScrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 600 && window.innerWidth < 960
  );
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
    setIsTablet(window.innerWidth >= 600 && window.innerWidth < 960);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box sx={{ bgcolor: "#000212", color: "white", px: { xs: 2 } }}>
      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-right"
            data-aos-duration={isMobile || isTablet ? "1000" : "1500"}
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Techno-management fest of SASTRA Deemed to be University
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <HomeIcon />
              <Typography sx={{ ml: 2 }}>
                4XX7 Middle Street. Thanjavur, India 39495.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon />
              <Typography sx={{ ml: 2 }}>(406) 5XX-012X</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon />
              <Typography sx={{ ml: 2 }}>exampleX@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            data-aos="fade-right"
            data-aos-duration={isMobile || isTablet ? "1000" : "2000"}
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {navLinks.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  mb: 1,
                  "& a": {
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#EF3D4E",
                      transition: "color 0.3s ease",
                    },
                  },
                }}
              >
                <Link to={item.path} onClick={ScrollToTop}>
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            data-aos="fade-right"
            data-aos-duration={isMobile || isTablet ? "1000" : "2000"}
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Useful links
            </Typography>
            {UsefulLinks.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  mb: 1,
                  "& a": {
                    color: "#fff",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#EF3D4E",
                      transition: "color 0.3s ease",
                    },
                  },
                }}
              >
                <Link href={item.path} onClick={ScrollToTop}>
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="fade-right"
            data-aos-duration={isMobile || isTablet ? "1000" : "3000"}
            data-aos-easing="ease-in-sine"
          >
            <Typography variant="h6" gutterBottom>
              Newsletter Subscribe
            </Typography>
            <Typography gutterBottom>Subscribe for latest upadates</Typography>
            <Box display="flex" mt={2}>
              <TextField
                variant="outlined"
                placeholder="Your Email"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: "4px",
                  mr: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFB700",
                  "&:hover": {
                    bgcolor: "#FFB700",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                →
              </Button>
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-start">
              {[FacebookIcon, TwitterIcon, PinterestIcon, YouTubeIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    color="inherit"
                    sx={{
                      mr: 1,
                      "&:hover": {
                        color: "#FFB700",
                        transition: "color 0.3s ease",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={5}>
          <Typography variant="body2">
            Copyright © 2024 Theta | Designed and Developed by{" "}
            <a
              href="https://harihara.vercel.app/"
              style={{
                color: "#fff",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Hari Hara & JayaSurya
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
