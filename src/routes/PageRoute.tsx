import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/mainLayout/index';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default PageRoute;
