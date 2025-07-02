import React from 'react';
import { dummyProducts } from '../productDummyJason';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Props {
  cart: typeof dummyProducts;
  updateQuantity: (id: number, delta: number) => void;
  nextStep: () => void;
}

const Cart: React.FC<Props> = ({ cart, updateQuantity, nextStep }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='cart-section'>
      <h2>My Cart ({cart.length})</h2>
      {cart.map((item) => (
        <Card key={item.id} className='cart-card'>
          <CardContent className='cart-card-content'>
            <div>
              <Typography variant='subtitle1'>{item.name}</Typography>
              <Typography variant='body2'>₹{item.price} each</Typography>
            </div>
            <div className='qty-controls'>
              <IconButton onClick={() => updateQuantity(item.id, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, 1)}>
                <AddIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className='cart-summary'>
        <h3>Total: ₹{total}</h3>
        <Button variant='contained' onClick={nextStep}>
          Continue to Address
        </Button>
      </div>
    </div>
  );
};

export default Cart;
