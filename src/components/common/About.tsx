import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./About.css"; // External CSS file for styling

const About = () => {
  const aboutImage =
    "https://assets.entrepreneur.com/content/3x2/2000/essential-elements-building-ecommerce-website.jpg";

  return (
    <Box className="about-container">
      {/* Left - Content Section */}
      <Box className="content-section">
        <Typography variant="h5" component="h5" className="about-title">
          About Us
        </Typography>

        <Typography variant="h5" component="h2" className="business-name">
          Business Name
        </Typography>

        <Typography paragraph className="about-text">
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

        <Typography variant="h6" component="h3" className="contact-title">
          Contact Information
        </Typography>

        <Typography paragraph className="contact-info">
          +91 1256378409
        </Typography>

        <Typography paragraph className="contact-info email">
          Someting@random.com
        </Typography>

        <Button className="directions-btn">Directions</Button>
      </Box>

      {/* Right - Image Section */}
      <Box className="image-section">
        <Box
          component="img"
          src={aboutImage}
          alt="About Us"
          className="about-image"
        />
      </Box>
    </Box>
  );
};

export default About;
