import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, IconButton, Container } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { keyframes } from "@emotion/react";

const slides = [
  {
    img: "Assets/img1.jpg",
    title: "THETA",
    topic: "2024",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    buttons: ["SEE MORE", "SUBSCRIBE"],
    thumbnailtitle: "Day",
    thumbnaildesc: "Some Things",
  },
  {
    img: "Assets/img1.jpg",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    buttons: ["SEE MORE", "SUBSCRIBE"],
    thumbnailtitle: "Day 1",
    thumbnaildesc: "DJ and Team Swaraag",
  },
  {
    img: "Assets/img1.jpg",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    buttons: ["SEE MORE", "SUBSCRIBE"],
    thumbnailtitle: "Day 2",
    thumbnaildesc: " DJ and Team Recoil",
  },
  {
    img: "Assets/img1.jpg",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    buttons: ["SEE MORE", "SUBSCRIBE"],
    thumbnailtitle: "Day 3",
    thumbnaildesc: "Pro Nite",
  },
];
const AUTO_PLAY_INTERVAL = 7000;
const TRANSITION_DURATION = 3000;

const progressAnimation = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#eee",
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px",
        margin: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            height: "100%",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "90%", md: "80%" },
                  paddingRight: { xs: 0, md: "30%" },
                  boxSizing: "border-box",
                  color: "#fff",
                  textShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    letterSpacing: 2.5,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    color: "#f1683a",
                  }}
                >
                  {slide.topic}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginTop: "20px", lineHeight: "1.5em" }}
                >
                  {slide.des}
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 130px)" },
                    gridTemplateRows: "40px",
                    gap: "5px",
                    marginTop: "20px",
                  }}
                >
                  {slide.buttons.map((btn, idx) => (
                    <Button
                      key={idx}
                      variant={idx === 1 ? "outlined" : "contained"}
                      sx={{
                        border: idx === 1 ? "1px solid #fff" : "none",
                        backgroundColor: idx === 1 ? "transparent" : "#eee",
                        color: idx === 1 ? "#eee" : "#000",
                        letterSpacing: "3px",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor:
                            idx === 1 ? "rgba(238,238,238,0.1)" : "#ddd",
                        },
                      }}
                    >
                      {btn}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: ["20px", "50px"],
            left: ["80%", "50%"],
            transform: "translateX(-50%)",
            display: "flex",
            gap: "20px",
            zIndex: 100,
            padding: "0 20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: { xs: "100px", sm: "150px" },
                height: { xs: "150px", sm: "220px" },
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                borderRadius: "20px",
                overflow: "hidden",
                border:
                  index === currentIndex
                    ? "2px solid #f1683a"
                    : "2px solid transparent",
                transition: "transform 0.3s",
                scrollSnapAlign: "start",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Thumbnail ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  {slide.thumbnailtitle}
                </Typography>
                <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
                  {slide.thumbnaildesc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 100,
            maxWidth: "30%",
            width: "300px",
          }}
        >
          <IconButton
            onClick={prevSlide}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(238, 238, 238, 0.25)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(238, 238, 238, 0.25)",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            width: "100%",
            height: "3px",
            backgroundColor: "#333",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f1683a",
              animation: `${progressAnimation} ${TRANSITION_DURATION}ms linear forwards`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
