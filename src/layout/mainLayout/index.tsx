import { Outlet } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { Box } from '@mui/material';

const MainLayout = () => {
  return (
    <Box maxWidth={'100%'} margin={'auto'}>
      <Navbar />
      <div className='body-wrapper'>
        <Outlet />
      </div>
      <Footer />
    </Box>
  );
};

export default MainLayout;
