import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import type { ProductData } from "../../pages/Home";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  imageSrc,
  title,
  brand,
  rating,
  price,
  originalPrice,
  discount,
}: ProductData) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // navigate(`/product-detail`);
  };
  return (
    <Card
      sx={{
        maxWidth: "410px",
        minHeight: "420px",
        borderRadius: "8px",
        boxShadow: 3,
        marginLeft: 4,
        marginTop: 5,
        marginBottom: 5,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
      className="product-card"
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        image={imageSrc}
        alt={title}
        sx={{ objectFit: "cover", maxHeight: 300, width: "100%" }}
        className="product-image"
      />
      <CardContent>
        <Typography variant="subtitle1" fontSize={24} fontWeight={700}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {brand}
          </Typography>
          <Typography variant="body2" sx={{ ml: 1, color: "text.primary" }}>
            {rating} ⭐
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mr: 1 }}>
            Rs.{price}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
              mr: 1,
            }}
          >
            Rs.{originalPrice}
          </Typography>
          (
          <Chip
            label={`${discount}% off`}
            size="small"
            sx={{
              backgroundColor: "#f5f5f5",
              color: " #0A8200",
              fontSize: "0.75rem",
              height: "20px",
            }}
          />
          )
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
