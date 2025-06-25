import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Stack
} from '@mui/material';

const ProductCard = ({
    imageSrc,
    title,
    brand,
    rating,
    price,
    originalPrice,
    discount
}) => {
    return (
        <Card
            sx={{
                width: 321,
                minHeight: 455,
                borderRadius: 2,
                boxShadow: 3,
                marginLeft: 10,
                marginTop: 5,
                marginBottom: 5,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.02)' }
            }}
        >
            <CardMedia
                component="img"
                height="300"
                image={imageSrc}
                alt={title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brand}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {rating} ⭐
                </Typography>

                <Box mt={1} display="flex" alignItems="baseline" gap={1}>
                    <Typography variant="h6" color="text.primary">
                        Rs. {price}
                    </Typography>
                    {originalPrice && (
                        <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
                            Rs. {originalPrice}
                        </Typography>
                    )}
                    {discount && (
                        <Typography variant="body2" sx={{ color: 'green', fontWeight: 600 }}>
                            ({discount}% off)
                        </Typography>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
