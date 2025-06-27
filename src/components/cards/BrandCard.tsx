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
    <Card sx={{ maxWidth: 489, borderRadius: 10, boxShadow: 2 }}>
      <CardMedia
        component="img"
        height="298"
        image={image}
        alt="Product image"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Box mb={1}>
          <img src={brandLogo} alt="Brand logo" style={{ height: 62 }} />
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
