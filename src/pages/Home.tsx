import { Box, Typography } from '@mui/material';
import { brandDeals, productData } from '../components/cards/brandData';
import { trendingData } from '../components/cards/trendingData';
import CustomerReviews from '../components/slider/CustomerReviews';
import FeaturesSection from '../components/slider/FeaturesSection';
import HeroCarousel from '../components/slider/HeroCarousel';
import ProductSlider from '../components/slider/ProductSlider';
import { heroBanner } from '../assets';
import DealSlider from '../components/slider/DealSlider';
import TrendingSlider from '../components/slider/TrendingSlider';
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

  const settings = {
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
        <DealSlider settings={brandSliderSettings} brandDeals={brandDeals} />
      </Box>

      <Box p={2} className='trending-slider-wrapper'>
        <Typography
          variant='h5'
          sx={{ mb: 3, fontWeight: 700, marginLeft: '50px' }}
        >
          Trending Offers
        </Typography>
        <TrendingSlider trendingData={trendingData} />
      </Box>

      <CustomerReviews />
      <FeaturesSection />
    </>
  );
};

export default Home;
