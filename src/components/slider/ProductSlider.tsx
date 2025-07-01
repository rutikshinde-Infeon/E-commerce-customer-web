import { Box } from '@mui/material';
import Slider from 'react-slick';
import ProductCard from '../cards/ProductCard';
import type { ProductDataProps } from '../../utils/types/interface';
import type { Settings } from 'react-slick';
interface ProductSliderProps {
  settings: Settings;
  productData: ProductDataProps[];
}
function ProductSlider({ settings, productData }: ProductSliderProps) {
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
