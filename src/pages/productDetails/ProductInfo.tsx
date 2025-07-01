import { useState } from 'react';
// import ProductDetails from './ProductDetails';
import Specification from './Specification';
import RatingsReviews from './RatingsReviews';
import './ProductDetails.scss';
import ProductDescription from './ProductDescription';

// type TabType = 'productDetails' | 'specification' | 'ratingsReviews';
const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState('productDetails');

  return (
    <div className='productInfo-tab-container'>
      <div className='tab-buttons'>
        <button
          className={activeTab === 'productDetails' ? 'active' : ''}
          onClick={() => setActiveTab('productDetails')}
        >
          Product Details
        </button>
        <button
          className={activeTab === 'specification' ? 'active' : ''}
          onClick={() => setActiveTab('specification')}
        >
          Specification
        </button>
        <button
          className={activeTab === 'ratingsReviews' ? 'active' : ''}
          onClick={() => setActiveTab('ratingsReviews')}
        >
          Ratings & Reviews
        </button>
      </div>

      <div className='tab-content'>
        {activeTab === 'productDetails' && <ProductDescription />}
        {activeTab === 'specification' && <Specification />}
        {activeTab === 'ratingsReviews' && <RatingsReviews />}
      </div>
    </div>
  );
};

export default ProductInfo;
