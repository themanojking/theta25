import React from "react";
import { Typography, Box } from "@mui/material";

const TitleWithDescription = ({ title, description, color }) => {
  return (
    <Box textAlign="center" marginBottom="40px">
      <Typography
        gutterBottom
        data-aos="fade-up"
        data-aos-duration="1000"
        sx={{
          fontSize: { xs: "30px", sm: "35px", md: "40px" },
          fontWeight: "bold",
          marginBottom: "10px",
          color: color || "white",
        }}
      >
        {title}
      </Typography>
      <Typography
        data-aos="zoom-in"
        data-aos-duration="1000"
        sx={{
          marginBottom: "40px",
          width: { xs: "100%", sm: "80%", md: "50%" },
          fontSize: ["15px", "15px", "17px"],
          lineHeight: 1.7,
          margin: "auto",
          color: color || "white",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default TitleWithDescription;
