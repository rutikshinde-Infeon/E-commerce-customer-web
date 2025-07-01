import { useState } from 'react';
import './ProductDetails.scss';
import ProductInfo from './ProductInfo';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { productData } from '../../utils/data';
import PDPImages from '../../assets/images/PDP-image.png';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const { id } = useParams();

  const product: any = productData?.find((product: any) => product._id === id);

  const { title, brand, media, price, comparePrice, attributes } = product;

  const name = title?.defaultValue || 'No Name';
  const brandName = brand?.defaultValue || 'No Brand';
  const seller = 'Sellers Name';
  const rating = 4.4;
  const reviewsCount = 36;

  const discount =
    comparePrice && price
      ? Math.round(((comparePrice - price) / comparePrice) * 100)
      : 0;

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors =
    attributes
      ?.filter((att: any) => att.attribute === 'color')
      ?.map((att: any) => att.value) || [];

  const images =
    media?.videos?.map((v: any) => v?.media?.resolutions?.thumbnail?.url) || [];

  const bestOffers = [
    'Special offer: Get 25% off',
    'Bank offer: 30% off on Axis Bank Credit card',
    'Wallet offer: 40% cashback via Paytm wallet on 1st transaction',
  ];

  return (
    <>
      <div className='product-details-page'>
        <div className='product-gallery'>
          <div className='thumbnails'>
            {images.length > 1 ? (
              images?.map((img: string, index: number) => (
                <img key={index} src={img} alt={`Product Thumbnail ${index}`} />
              ))
            ) : (
              <img src={PDPImages} alt='Product' />
            )}
          </div>
          <img
            className='main-image'
            src={images[0] || PDPImages}
            alt='Product'
          />
        </div>

        <div className='product-info'>
          <h1>{name}</h1>
          <p>Brand: {brandName}</p>
          <p>Sold By: {seller}</p>
          <p>
            Rating: {rating} ⭐ ({reviewsCount} Reviews)
          </p>
          <p>
            <strong>Rs. {price}</strong> <del>Rs. {comparePrice}</del>
            <span className='discount'>({discount}% off)</span>
          </p>

          <div className='size-selector'>
            <h3>Select Size</h3>
            <div className='sizes'>
              {sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? 'selected' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className='color-selector'>
            <h3>Select Color</h3>
            <div className='colors'>
              {colors.map((color: string) => (
                <button
                  key={color}
                  className={selectedColor === color ? 'selected' : ''}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className='best-offers'>
            <h3>Best Offers</h3>
            <ul>
              {bestOffers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <button className='add-to-cart primary-button'>Add to Cart</button>
          </Box>
        </div>
      </div>

      <div className='additional-info'>
        <ProductInfo />
      </div>
    </>
  );
};

export default ProductDetails;
