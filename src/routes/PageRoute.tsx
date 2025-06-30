import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/mainLayout/index';
import Home from '../pages/Home';
import About from '../components/common/About';

const PageRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default PageRoute;
