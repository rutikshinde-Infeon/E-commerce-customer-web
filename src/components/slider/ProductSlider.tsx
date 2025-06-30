import { Box } from '@mui/material';
import Slider from 'react-slick';
import type { ProductData } from '../../pages/Home';
import ProductCard from '../cards/ProductCard';

function ProductSlider({ settings, productData }: any) {
  return (
    <>
      <Box sx={{ width: '100%' }}>
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
