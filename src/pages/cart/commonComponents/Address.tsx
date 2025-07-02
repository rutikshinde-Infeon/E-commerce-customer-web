import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

interface Props {
  nextStep: () => void;
}

const Address: React.FC<Props> = ({ nextStep }) => {
  return (
    <div className='cart-section'>
      <Typography variant='h5'>Delivery Address</Typography>
      <TextField fullWidth margin='normal' label='Full Name' />
      <TextField fullWidth margin='normal' label='Address Line 1' />
      <TextField fullWidth margin='normal' label='City' />
      <TextField fullWidth margin='normal' label='Pincode' />
      <Button variant='contained' onClick={nextStep}>
        Proceed to Payment
      </Button>
    </div>
  );
};

export default Address;
