// import React, { useState } from 'react';
// import Cart from './commonComponents/Cart';
// import Address from './commonComponents/Address';
// import Payment from './commonComponents/Payment';
// import Success from './commonComponents/Success';
// import { dummyProducts } from './productDummyJason';
// import './Cart.css';
// import { Box, Container } from '@mui/system';

// const CartFlow: React.FC = () => {
//   const [step, setStep] = useState<'cart' | 'address' | 'payment' | 'success'>(
//     'cart'
//   );
//   const [cart, setCart] = useState(dummyProducts);

//   const updateQuantity = (id: number, delta: number) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//           : item
//       )
//     );
//   };

//   const resetCart = () => {
//     setCart([]);
//   };

//   return (
//     <Container maxWidth='xl'>
//       <Box className='cart-flow-container'>
//         {step === 'cart' && (
//           <Cart
//             cart={cart}
//             updateQuantity={updateQuantity}
//             nextStep={() => setStep('address')}
//           />
//         )}
//         {step === 'address' && <Address nextStep={() => setStep('payment')} />}
//         {step === 'payment' && (
//           <Payment
//             cart={cart}
//             nextStep={() => setStep('success')}
//             resetCart={resetCart}
//           />
//         )}
//         {step === 'success' && <Success />}
//       </Box>
//     </Container>
//   );
// };

// export default CartFlow;

import React, { useState } from 'react';
import Cart from './commonComponents/Cart';
import Address from './commonComponents/Address';
import Payment from './commonComponents/Payment';
import Success from './commonComponents/Success';
import { dummyProducts } from './productDummyJason';
import './Cart.css';
import { Container, Box, Stepper, Step, StepLabel, Paper } from '@mui/material';

const steps = ['Cart', 'Address', 'Payment', 'Success'];

function CartFlow() {
  const [step, setStep] = useState<'cart' | 'address' | 'payment' | 'success'>(
    'cart'
  );
  const [cart, setCart] = useState(dummyProducts);

  const getStepIndex = () => {
    switch (step) {
      case 'cart':
        return 0;
      case 'address':
        return 1;
      case 'payment':
        return 2;
      case 'success':
        return 3;
      default:
        return 0;
    }
  };

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
    <Container maxWidth='xl'>
      {/* Stepper shown always */}
      <Paper elevation={1} sx={{ p: 2, my: 3 }}>
        <Stepper activeStep={getStepIndex()} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Section content based on step */}
      <Box className='cart-flow-container'>
        {step === 'cart' && (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            nextStep={() => setStep('address')}
          />
        )}
        {step === 'address' && (
          <Address
            nextStep={() => setStep('payment')}
            prevStep={() => setStep('cart')}
          />
        )}
        {step === 'payment' && (
          <Payment
            cart={cart}
            nextStep={() => setStep('success')}
            prevStep={() => setStep('address')}
            resetCart={resetCart}
          />
        )}
        {step === 'success' && <Success />}
      </Box>
    </Container>
  );
}

export default CartFlow;
