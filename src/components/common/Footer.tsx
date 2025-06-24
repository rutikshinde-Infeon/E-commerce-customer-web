import React from "react";
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Link, 
  IconButton,
  List,
  ListItem 
} from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";
import { footerLogo } from "../../assets";

const footerLinks = {
  women: ["All Women", "Stars", "T-Stars", "Type", "Jackets"],
  men: ["All Men", "Stars", "T-Stars", "Sports", "Jackets"],
  kids: ["All Kids", "Stars", "T-Stars", "Sports", "Jackets"],
  shopping: ["Your cart", "Your orders", "Compared items", "Wishlist", "Shipping Details"],
  moreLinks: ["Blogs", "Gift Center", "Buying Guides", "New Arrivals", "Clearance"]
};

const socialIcons = [
  { icon: <Facebook />, label: "Facebook" },
  { icon: <Twitter />, label: "Twitter" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <Pinterest />, label: "Pinterest" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderLinkColumn = (title, links) => (
    <Grid item xs={6} sm={4} md={2} sx={{ px: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <List sx={{ p: 0 }}>
        {links.map((link) => (
          <ListItem key={link} sx={{ p: 0, mb: 1, fontSize: "0.875rem" }}>
            <Link href="#" color="inherit" underline="hover">
              {link}
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#00071B",
        color: "#fff",
        py: 1,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 4,
          mr: 2,
          flexShrink: 0,
          mb: 4,
          mt: 2,
        }}
      >
        <img
          src={footerLogo}
          alt="Logo"
          style={{ height: "100%", maxHeight: 40 }}
        /> 
        <Typography variant="h4" sx={{ ml: 2, fontWeight: "bold" }}>
          Globex
        </Typography>
      </Box>
      
      <Container maxWidth="lg" >
        <Grid container spacing={4} >
          {renderLinkColumn("Women", footerLinks.women)}
          {renderLinkColumn("Men", footerLinks.men)}
          {renderLinkColumn("Kids", footerLinks.kids)}
          {renderLinkColumn("Shopping", footerLinks.shopping)}
          {renderLinkColumn("More Links", footerLinks.moreLinks)}

          <Grid item xs={12} sm={8} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Stay In Touch
            </Typography>
            <Typography variant="body2" >
              Stay in touch to get special offers,
            </Typography>
            <Box component="form" sx={{ display: "flex", mt: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter your email"
                sx={{
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px 0 0 4px",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "0 4px 4px 0",
                  boxShadow: "none",
                  minWidth: "auto",
                  px: 2,
                }}
              >
                Subscribe
              </Button>
            </Box>
            
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2">
            © {currentYear} Globex. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="#" color="inherit" underline="hover">
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            {/* <Box sx={{ mt: 2, display: "flex", gap: 2 }}> */}
              {socialIcons.map((social) => (
                <IconButton key={social.label} aria-label={social.label}>
                  {social.icon}
                </IconButton>
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;