import { Box, Typography } from '@mui/material';
import { trendingData } from '../components/cards/trendingData';
import CustomerReviews from '../components/slider/CustomerReviews';
import FeaturesSection from '../components/slider/FeaturesSection';
import HeroCarousel from '../components/slider/HeroCarousel';
import ProductSlider from '../components/slider/ProductSlider';
import { heroBanner } from '../assets';
import DealSlider from '../components/slider/DealSlider';
import TrendingSlider from '../components/slider/TrendingSlider';
import FeaturedBlog from '../components/slider/FeaturedBlog';
import About from '../components/common/About';
import { brandDeals, productData } from '../utils/data';
import { mapProductToCardData } from '../utils/mapProduct';

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

  const formattedProductData = productData?.map(mapProductToCardData);

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
          productData={formattedProductData}
        />
      </Box>

      <Box p={2} className='deal-slider-wrapper'>
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 700 }}>
          Deals of the Day
        </Typography>
        <DealSlider settings={brandSliderSettings} brandDeals={brandDeals} />
      </Box>

      <Box p={2} className='trending-slider-wrapper'>
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 700 }}>
          Trending Offers
        </Typography>
        <TrendingSlider trendingData={trendingData} />
      </Box>

      <Box p={2} className='Review-slider-wrapper'>
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 700 }}>
          What Our Customers Say
        </Typography>
        <CustomerReviews />
      </Box>

      <Box p={2} className='Featured-slider-wrapper'>
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 700 }}>
          Featured Blogs
        </Typography>
        <FeaturedBlog />
        <FeaturesSection />
      </Box>
      <Box p={2} className='AboutUs-wrapper'>
        <About />
      </Box>
    </>
  );
};

export default Home;
