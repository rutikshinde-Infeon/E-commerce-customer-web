import React from 'react';
import { Typography, Button } from '@mui/material';

const Success: React.FC = () => {
  return (
    <div className='cart-section' style={{ textAlign: 'center' }}>
      <Typography variant='h4'>Order Successful 🎉</Typography>
      <Typography>Your items will be delivered soon.</Typography>
      <Button href='/' variant='outlined' sx={{ marginTop: 2 }}>
        Go to Home
      </Button>
    </div>
  );
};

export default Success;
