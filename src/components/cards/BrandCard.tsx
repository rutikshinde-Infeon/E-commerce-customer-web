import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface BrandCardProps {
  image: string; // product/banner image
  brandLogo: string; // brand logo image
  tagline: string;
  priceRange: string;
}

function BrandCard(props: BrandCardProps) {
  const { image, brandLogo, tagline, priceRange } = props;

  return (
    <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 2 }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Product image"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Box mb={1}>
          <img src={brandLogo} alt="Brand logo" style={{ height: 30 }} />
        </Box>
        <Typography variant="h6">{tagline}</Typography>
        <Typography variant="body2" color="text.secondary">
          {priceRange}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BrandCard;
