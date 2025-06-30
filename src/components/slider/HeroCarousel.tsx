import Slider from 'react-slick';
import './Sliders.css';
import { Box } from '@mui/material';

interface BannerDataProps {
  id: number;
  imageSrc: string;
  path: string;
}
interface BannerProps {
  BannerData: BannerDataProps[];
}

function HeroCarousel({ BannerData }: BannerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box className='slider-container' width={'100%'}>
      <Slider {...settings}>
        {BannerData?.map((banner, index) => (
          <div className='slide-item' key={index}>
            <a href={banner.path}>
              <img
                src={banner.imageSrc}
                alt={`Hero Slide ${index + 1}`}
                className='slide-image'
              />
            </a>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default HeroCarousel;
