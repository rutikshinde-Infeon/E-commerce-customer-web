import { Box } from '@mui/material';
import Slider from 'react-slick';
import ProductCard from '../cards/ProductCard';
import type { ProductDataProps } from '../../utils/types/interface';

function ProductSlider({ settings, productData }: any) {
  return (
    <>
      <Box className='slider-container' sx={{ width: '100%' }}>
        <Slider {...settings}>
          {productData?.map((product: ProductDataProps) => (
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
