// src/components/FeaturedBlogCard.tsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./FeaturedBlogCard.css";

export interface FeaturedBlog {
  image: string;
  title: string;
  description: string;
  author: string;
  tag?: string;
}

function FeaturedBlogCard({
  image,
  title,
  description,
  author,
  tag,
}: FeaturedBlog) {
  return (
    <>
      <Card className="featured-blog-card">
        <CardMedia
          component="img"
          className="featured-blog-image"
          image={image}
          alt={title}
        />
        <CardContent className="featured-blog-content">
          {tag && <Typography className="featured-blog-tag">{tag}</Typography>}
          <Typography className="featured-blog-title">{title}</Typography>
          <Typography className="featured-blog-description">
            {description}
          </Typography>
          <Box className="featured-blog-footer">
            <Typography className="featured-blog-author">
              By {author}
            </Typography>
            <ArrowForwardIcon className="featured-blog-arrow" />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default FeaturedBlogCard;
