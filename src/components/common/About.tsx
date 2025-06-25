import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const aboutImage =
    "https://assets.entrepreneur.com/content/3x2/2000/essential-elements-building-ecommerce-website.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Left - Content Section */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 4, md: 6 },
          overflowY: "auto",
          width: { xs: "100%", md: "50%" },
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{ fontSize: { xs: "24px", sm: "28px", md: "36px" } }}
        >
          About Us
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "24px", sm: "28px", md: "36px" },
          }}
        >
          Business Name
        </Typography>

        <Typography
          paragraph
          sx={{ mb: 3, fontSize: { xs: "16px", sm: "20px", md: "24px" } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
          cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
          tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis
          eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
          Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
          sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
          ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed.
          Sapien et montes, duis tempor euismod augue cras eu eget. Risus
          suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
          molestie proin dictum gravida. Porttitor maecenas
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "20px", md: "24px" },
          }}
        >
          Contact Information
        </Typography>

        <Typography
          paragraph
          sx={{ mb: 1, fontSize: { xs: "16px", sm: "20px", md: "24px" } }}
        >
          +91 1256378409
        </Typography>

        <Typography
          paragraph
          sx={{ mb: 2, fontSize: { xs: "16px", sm: "20px", md: "24px" } }}
        >
          Someting@random.com
        </Typography>

        <Button
          sx={{
            mb: 4,
            border: "1px solid black",
            borderRadius: "10px",
            color: "black",
            textTransform: "none",
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 0.5, sm: 1 },
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Directions
        </Button>
      </Box>

      {/* Right - Image Section */}
    <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: isMobile ? 2 : 0,
          backgroundColor: "#f5f5f5",
          mt: isMobile ? 0 : 14,
          mb: isMobile ? 0 : 8,
          mr: isMobile ? 0 : 8,
          borderRadius: "8px",
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="About Us"
          sx={{
            width: "100%",
            height: isMobile ? "auto" : "100%",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: theme.shadows[5],
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
