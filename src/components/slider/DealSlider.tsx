import { Box } from '@mui/material';
import Slider from 'react-slick';
import BrandCard from '../cards/BrandCard';
import type { BrandData } from '../../pages/Home';

function DealSlider({ settings, brandDeals }: any) {
  return (
    <>
      <Slider {...settings}>
        {brandDeals.map((deal: BrandData) => (
          <Box key={deal.id} px={1}>
            <BrandCard
              key={deal.id}
              image={deal.image}
              brandLogo={deal.brandLogo}
              tagline={deal.tagline}
              priceRange={deal.priceRange}
            />
          </Box>
        ))}
      </Slider>
    </>
  );
}

export default DealSlider;
