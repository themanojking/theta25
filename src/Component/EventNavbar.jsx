import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const EventNavbar = () => {
  const location = useLocation();
  const items = [
    { link: "/AllEvents", name: "All Events" },
    { link: "/Day1", name: "Day 1" },
    { link: "/Day2", name: "Day 2" },
    { link: "/Day3", name: "Day 3" },
  ];
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: { xs: "auto", sm: "hidden" },
        whiteSpace: "nowrap",
        width: "100%",
        height: { xs: "auto", sm: "auto" },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          overflowX: "auto",
          flexWrap: "nowrap",
        }}
      >
        {items.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link
              key={index}
              to={item.link}
              onClick={ScrollToTop}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <ListItem
                onClick={ScrollToTop}
                sx={{
                  width: "auto",
                  py: 0,
                  px: { xs: "1rem", sm: "2.3rem" },
                  borderBottom: isActive ? "2px solid #FFB700" : "none",
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: isActive ? "#FFB700" : "inherit",
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                  }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default EventNavbar;
