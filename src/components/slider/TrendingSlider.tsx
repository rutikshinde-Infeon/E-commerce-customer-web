import { Box } from '@mui/material';
import Slider from 'react-slick';
import TrendingCard from '../cards/TrendingCard';
import './Sliders.css';

function TrendingSlider({ trendingData }: any) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '10px',
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    arrows: true,
  };

  return (
    <Box className='slider-container'>
      <Slider {...settings}>
        {trendingData.map((item: any) => (
          <div key={item.id} className='slide-item'>
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
    </Box>
  );
}

export default TrendingSlider;
