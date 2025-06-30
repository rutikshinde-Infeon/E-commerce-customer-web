import { Box, Typography } from '@mui/material';
import { brandDeals, productData } from '../components/cards/brandData';
import Slider from 'react-slick';
import { trendingData } from '../components/cards/trendingData';
import TrendingCard from '../components/cards/TrendingCard';
import CustomerReviews from '../components/slider/CustomerReviews';
import FeaturesSection from '../components/slider/FeaturesSection';
import HeroCarousel from '../components/slider/HeroCarousel';
import ProductSlider from '../components/slider/ProductSlider';

import { heroBanner } from '../assets';
import DealSlider from '../components/slider/DealSlider';
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
export interface BrandData {
  id: number;
  image: string;
  brandLogo: string;
  tagline: string;
  priceRange: string;
}

const Home = () => {
  const BannerData = [
    {
      id: 1,
      imageSrc: heroBanner,
      path: '/',
    },
    {
      id: 2,
      imageSrc: heroBanner,
      path: '/',
    },
    {
      id: 3,
      imageSrc: heroBanner,
      path: '/',
    },
  ];

  const centerSlider = {
    // width: "100%",
    arrows: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
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
    arrows: false,
  };

  const brandSliderSettings = {
    ...settings,
    slidesToShow: 3,
    arrows: false,
  };
  return (
    <>
      <Box className='hero-carousel-wrapper'>
        <HeroCarousel BannerData={BannerData} />
      </Box>

      <Box p={2} className='product-slider-wrapper'>
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 700 }}>
          Trending Now
        </Typography>
        <ProductSlider
          settings={productSliderSettings}
          productData={productData}
        />
      </Box>

      <Box p={2} className='deal-slider-wrapper'>
        <Typography variant='h5' sx={{ mb: 2, fontWeight: 600 }}>
          Deals of the Day
        </Typography>
      </Box>
      <Box p={2} className='Trending-slider-wrapper'>
        <DealSlider settings={brandSliderSettings} brandDeals={brandDeals} />
      </Box>

      <Typography
        variant='h5'
        sx={{ mb: 3, fontWeight: 700, marginLeft: '50px' }}
      >
        Trending Offers
      </Typography>

      <div className='slider-container'>
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
      <CustomerReviews />
      <FeaturesSection />
    </>
  );
};

export default Home;
