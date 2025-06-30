import { Box } from '@mui/material';
import Slider from 'react-slick';
import ProductCard from '../cards/ProductCard';
import type { ProductData } from '../../pages/Home';

function ProductSlider({ settings, productData }: any) {
  return (
    <>
      <Box className='slider-container' sx={{ width: '100%' }}>
        <Slider {...settings}>
          {productData?.map((product: ProductData) => (
            <Box key={product.id} px={1}>
              <ProductCard {...product} />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default ProductSlider;
