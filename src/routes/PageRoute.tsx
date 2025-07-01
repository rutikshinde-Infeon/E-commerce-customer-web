import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/mainLayout/index';
import Home from '../pages/Home';
// import ProductDetails from '../pages/productDetails';
import ProductListing from '../pages/productListing';
import Cart from '../pages/cart';

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductListing />} />
        {/* <Route path='/product/:id' element={<ProductDetails />} /> */}

        <Route path='/cart' element={<Cart />} />
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default PageRoute;
