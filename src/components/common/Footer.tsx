import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Link,
  IconButton,
  List,
  ListItem,
  InputAdornment,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  MailOutline,
} from "@mui/icons-material";
import { footerLogo } from "../../assets";
import type { JSX } from "react/jsx-runtime";

const FOOTER_LINKS = {
  women: ["All Women", "Stars", "T-Stars", "Type", "Jackets"],
  men: ["All Men", "Stars", "T-Stars", "Sports", "Jackets"],
  kids: ["All Kids", "Stars", "T-Stars", "Sports", "Jackets"],
  shopping: [
    "Your cart",
    "Your orders",
    "Compared items",
    "Wishlist",
    "Shipping Details",
  ],
  moreLinks: [
    "Blogs",
    "Gift Center",
    "Buying Guides",
    "New Arrivals",
    "Clearance",
  ],
};

const SOCIAL_ICONS = [
  { icon: <Facebook />, label: "Facebook" },
  { icon: <Instagram />, label: "Instagram" },
  { icon: <WhatsApp />, label: "WhatsApp" },
  { icon: <Twitter />, label: "Twitter" },
];

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#020823",
  color: "#fff",
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  interface LinkColumnProps {
    title: string;
    links: string[];
  }
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const renderLinkColumn = ({ title, links }: LinkColumnProps): JSX.Element => (
    <Grid
      item
      xs={6}
      sm={4}
      md={2}
      sx={{
        px: { xs: 1, sm: 2 },
        mb: { xs: 2, sm: 0 },
        textAlign: { xs: "left", sm: "left", md: "left" },
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        fontWeight="bold"
        sx={{
          fontSize: "20px",
        }}
      >
        {title}
      </Typography>
      <List sx={{ p: 0 }}>
        {links.map((link: string) => (
          <ListItem
            key={link}
            sx={{
              p: 0,
              mb: 1,
              fontSize: "12px",
            }}
          >
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
        py: { xs: 2, sm: 2, md: 2 },
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: { xs: 1, sm: 4 },
          mr: 1,
          flexShrink: 0,
          mb: { xs: 2, sm: 6 },
          mt: { xs: 1, sm: 2 },
        }}
      >
        <img
          src={footerLogo}
          alt="Logo"
          style={{
            height: "100%",
            maxHeight: isXs ? 28 : 40,
            width: "auto",
          }}
          loading="lazy"
        />
        <Typography
          variant={isXs ? "h5" : "h4"}
          sx={{
            ml: 2,
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "2rem" },
          }}
        >
          Globex
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="flex-start">
          {Object.entries(FOOTER_LINKS).map(([title, links]) =>
            renderLinkColumn({
              title: capitalize(title),
              links,
            })
          )}

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              mt: { xs: 2, sm: 0 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "20px" },
                }}
              >
                Stay In Touch
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: "12px",
                }}
              >
                Stay in touch to get special offers, free giveaways <br />
                and once in a lifetime deals
              </Typography>

              <Box component="form" sx={{ mt: 2 }}>
                <StyledTextField
                  variant="outlined"
                  size="small"
                  placeholder="Enter your email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutline sx={{ color: "#fff", mr: 2 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          mt: { xs: 2, sm: 4 },
          pt: 2,
          fontSize: { xs: "0.75rem", sm: "0.8rem" },
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1, sm: 4, md: 16 },
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Terms & Conditions
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Box sx={{ mt: { xs: 1, sm: 0 } }}>
          {SOCIAL_ICONS.map(({ icon, label }) => (
            <IconButton
              key={label}
              aria-label={label}
              sx={{
                color: "#fff",
                mx: 0.5,
                p: { xs: "6px", sm: "8px" },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
