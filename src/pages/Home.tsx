import ProductCard from "../components/cards/ProductCard";
import { Box, Container, flex, styled, width } from "@mui/system";
import { Grid, IconButton, Typography } from "@mui/material";
import BrandCard from "../components/cards/BrandCard";
import { brandDeals } from "../components/cards/brandData";
import Slider from "react-slick";
import { trendingData } from "../components/cards/trendingData";
import TrendingCard from "../components/cards/TrendingCard";
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

  const centerSlider = {
    // width: "100%",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const productSliderSettings = {
    ...settings,
    slidesToShow: 4,
  };

  const brandSliderSettings = {
    ...settings,
    slidesToShow: 3,
  };
  return (
    <>
      <Box Container>
        <Box sx={{ width: "100%", marginLeft: "50px" }}>
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: 700, fontFamily: "Libre Baskerville" }}
          >
            Trending Now
          </Typography>
          <Slider {...productSliderSettings}>
            {dummyData.map((product: ProductData) => (
              <Box key={product.id} px={1}>
                <ProductCard {...product} />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{ width: "100%", marginLeft: "50px" }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Deals of the Day
          </Typography>

          <Slider {...brandSliderSettings}>
            {brandDeals.map((deal, index) => (
              <Box key={index} px={1}>
                <BrandCard
                  key={index}
                  image={deal.image}
                  brandLogo={deal.brandLogo}
                  tagline={deal.tagline}
                  priceRange={deal.priceRange}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: 700, marginLeft: "50px" }}
          >
            Trending Offers
          </Typography>
          <div className="slider-container">
            <Slider {...centerSlider}>
              {trendingData.map((item) => (
                <div key={item.id}>
                  <TrendingCard
                    id={item.id}
                    brandLogo={item.brandLogo}
                    discountText={item.discountText}
                    buttonText={item.buttonText}
                    imageUrl={item.imageUrl}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
