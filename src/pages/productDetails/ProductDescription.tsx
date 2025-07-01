import './ProductDetails.scss';

const ProductDescription = () => {
  return (
    <div className='product-description-container'>
      <h2 className='product-description-title'>Product Details</h2>
      <p className='product-description-text'>
        Blue washed jacket, has a spread collar, 4 pockets, button closure, long
        sleeves, straight hem
      </p>

      <h3 className='product-description-subtitle'>Size & Fit</h3>
      <p className='product-description-text'>
        The model (height 5'8") is wearing a size S
      </p>

      <h3 className='product-description-subtitle'>Material & Care</h3>
      <p className='product-description-text'>
        100% cotton
        <br />
        Machine Wash
      </p>
    </div>
  );
};

export default ProductDescription;
