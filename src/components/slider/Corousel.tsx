import React, { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const Carousel = () => {
  const [images] = useState([
    "https://cdn.prod.website-files.com/605826c62e8de87de744596e/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg",
    "https://static.vecteezy.com/system/resources/thumbnails/048/912/287/small/excited-girl-open-up-shopping-bags-and-gasping-amazed-checking-out-gifts-for-her-with-happy-face-standing-against-pink-background-photo.jpg",
    "https://www.sliderrevolution.com/wp-content/uploads/2023/03/websites-with-carousels.jpg",
    "https://motopress.com/wp-content/uploads/2024/12/Best-Elementor-Carousel-Widgets-Plugins-915x524.jpg",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Determine carousel height based on screen size
  const getCarouselHeight = () => {
    if (isMobile) return "30vh";
    if (isTablet) return "60vh";
    return "70vh";
  };

  return (
    <Box sx={{ maxWidth: "100vw", overflow: "hidden" }}>
      {/* Image container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: getCarouselHeight(),
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Indicators shown below image */}
      <Box
        sx={{
          mt: isMobile ? 1 : 2,
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {images.map((_, index) => {
          const isActive = currentIndex === index;
          return (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: isActive ? (isMobile ? "10px" : "12px") : isMobile ? "6px" : "8px",
                height: isActive ? (isMobile ? "10px" : "12px") : isMobile ? "6px" : "8px",
                borderRadius: "50%",
                backgroundColor: isActive ? "#002482" : "grey.500",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: isActive ? "primary.dark" : "grey.600",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Carousel;