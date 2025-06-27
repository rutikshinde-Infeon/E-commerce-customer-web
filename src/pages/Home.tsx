import ProductCard from "../components/cards/ProductCard";
import { Box, Container, flex, styled } from "@mui/system";
import { Grid, IconButton, Typography } from "@mui/material";
import BrandCard from "../components/cards/BrandCard";
import { brandDeals } from "../components/cards/brandData";
import Slider from "react-slick";

export interface ProductData {
  id: number;
  imageSrc: string;
  title: string;
  brand: string;
  rating: string;
  price: string;
  originalPrice: string;
  discount: string;
}

const Home = () => {
  const dummyData = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Womens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Womens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Womens Denim Pant",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 6,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 7,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Box sx={{ width: "100%", overflowX: "visible" }}>
        <Slider {...settings}>
          {dummyData.map((product: ProductData) => (
            <ProductCard
              key={`${product.title}-${Math.random()}`}
              {...product}
            />
          ))}
        </Slider>
      </Box>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Deals of the Day
        </Typography>
        <Grid container spacing={2}>
          {brandDeals.map((deal, index) => (
            <Grid item key={index} xs={12} sm={6} md={2.4}>
              <BrandCard
                image={deal.image}
                brandLogo={deal.brandLogo}
                tagline={deal.tagline}
                priceRange={deal.priceRange}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
