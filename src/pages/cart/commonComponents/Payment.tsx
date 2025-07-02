import React from 'react';
import { dummyProducts } from '../productDummyJason';
import { Typography, Button } from '@mui/material';

interface Props {
  cart: typeof dummyProducts;
  nextStep: () => void;
  resetCart: () => void;
}

const Payment: React.FC<Props> = ({ cart, nextStep, resetCart }) => {
  const total =
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0) - 400;

  const handlePayment = () => {
    resetCart();
    nextStep();
  };

  return (
    <div className='cart-section'>
      <Typography variant='h5'>Payment</Typography>
      <Typography>Total Payable: ₹{total}</Typography>
      <Button variant='contained' onClick={handlePayment}>
        Pay Now
      </Button>
    </div>
  );
};

export default Payment;
