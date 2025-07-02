// import { Container } from '@mui/material';

// const Cart = () => {
//   return (
//     <Container sx={{ p: 1 }} maxWidth='xl'>
//       Cart
//     </Container>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import Cart from './commonComponents/Cart';
import Address from './commonComponents/Address';
import Payment from './commonComponents/Payment';
import Success from './commonComponents/Success';
import { dummyProducts } from './productDummyJason';
import './Cart.css';

const CartFlow: React.FC = () => {
  const [step, setStep] = useState<'cart' | 'address' | 'payment' | 'success'>(
    'cart'
  );
  const [cart, setCart] = useState(dummyProducts);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <div className='cart-flow-container'>
      {step === 'cart' && (
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          nextStep={() => setStep('address')}
        />
      )}
      {step === 'address' && <Address nextStep={() => setStep('payment')} />}
      {step === 'payment' && (
        <Payment
          cart={cart}
          nextStep={() => setStep('success')}
          resetCart={resetCart}
        />
      )}
      {step === 'success' && <Success />}
    </div>
  );
};

export default CartFlow;
