import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";

const features = [
  {
    icon: <OutlinedFlagIcon fontSize="large" />,
    title: "Locally Owned",
    description: "We have local business and sell best quality clothes",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Fast Delivery",
    description: "We provide fast delivery to our customers",
  },
  {
    icon: <Inventory2OutlinedIcon fontSize="large" />,
    title: "Easy Return",
    description: "We provide easy return policy.",
  },
  {
    icon: <HeadsetMicOutlinedIcon fontSize="large" />,
    title: "Online Support",
    description: "We give 24/7 online support",
  },
  {
    icon: <LocalOfferOutlinedIcon fontSize="large" />,
    title: "Best Offers",
    description: "We give best offers to our customers",
  },
];

const FeaturesSection = () => {
  return (
    <Box mb={8}>
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6, lg: 9 }}
        justifyContent="center"
      >
        {features.map((feature, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                width: { xs: 320, sm: 220, md: 240, lg: 260 },
                height: { xs: 180, sm: 170, md: 180 },
                textAlign: "center",
                p: 3,
                borderRadius: "10px",
                backgroundColor: "#F0F0F0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box color="#2d3a4b">{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {feature.title}
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
