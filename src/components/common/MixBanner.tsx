import { Box, Button, Typography } from '@mui/material';
import HeroCarousel from '../slider/HeroCarousel';
import '../common/MixBanner.css';
import mixBannerImg from '../../assets/images/mixBannerImg.jpg';
function MixBanner() {
  const BannerData = [
    {
      id: 1,
      imageSrc: mixBannerImg,
      path: '/',
    },
    {
      id: 2,
      imageSrc: mixBannerImg,
      path: '/',
    },
    {
      id: 3,
      imageSrc: mixBannerImg,
      path: '/',
    },
  ];
  return (
    <>
      <Box className='hero-carousel-wrapper' position='relative'>
        <HeroCarousel BannerData={BannerData} />
        <Box className='carousel-overlay'>
          <Typography className='carousel-title' variant='h1'>
            FOREVER 21
          </Typography>
          <Typography className='carousel-subtitle' variant='h5'>
            Big Fashion Festival
          </Typography>
          <Typography className='carousel-offer' variant='h5'>
            70% - 80% off
          </Typography>
          <Button variant='outlined' className='carousel-button'>
            Explore
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default MixBanner;
