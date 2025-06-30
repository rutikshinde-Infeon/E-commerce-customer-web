import { Box, Button, Grid, Typography } from "@mui/material";

import React from "react";
import styles from "./TrendingCard.module.css";
export interface trendingItem {
  id: number;
  brandLogo: string;
  discountText: string;
  buttonText: string;
  imageUrl: string;
}
function TrendingCard(props: trendingItem) {
  const { id, brandLogo, discountText, buttonText, imageUrl } = props;
  return (
    <>
      <Box className={styles.trendingCard}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              width: "540px",
              height: "585px",
            }}
          >
            <Box
              component="img"
              src={brandLogo}
              alt="Brand Logo"
              sx={{ width: "120px", mb: 2 }}
            />
            <Typography variant="h4" fontWeight={600} mb={3}>
              {discountText}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => console.log("Button Clicked")}
              sx={{ px: 4, py: 1.2, fontSize: "16px", borderRadius: "8px" }}
            >
              {buttonText}
            </Button>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imageUrl}
              alt="Promo"
              sx={{ width: "605px", height: "585px", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default TrendingCard;
