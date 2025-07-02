import React from 'react';
import { Box, Typography, Divider, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SummaryProps {
  totalMRP: number;
  discount: number;
  coupon: number;
  gst: number;
  delivery: number;
  type: string;
}

const PaymentSummary = ({
  totalMRP,
  discount,
  coupon,
  gst,
  delivery,
  type,
}: SummaryProps) => {
  const total = totalMRP - discount - coupon + gst + delivery;
  const navigate = useNavigate();
  const nextStep = () => {
    navigate(-1);
  };
  return (
    // <Box
    //   sx={{
    //     borderRadius: 2,
    //     padding: 3,
    //     backgroundColor: '#fafafa',
    //   }}
    // >
    //   <Typography variant='h4' fontWeight={600} mb={2}>
    //     Payment Summary
    //   </Typography>

    //   <Stack spacing={1.5}>
    //     <Box display='flex' justifyContent='space-between'>
    //       <Typography variant='h6'>Total MRP</Typography>
    //       <Typography variant='h6'>₹{totalMRP}</Typography>
    //     </Box>

    //     <Box display='flex' justifyContent='space-between'>
    //       <Typography variant='h6' color='green'>
    //         Discount on MRP
    //       </Typography>
    //       <Typography variant='h6' color='green'>
    //         -₹{discount}
    //       </Typography>
    //     </Box>

    //     <Box display='flex' justifyContent='space-between'>
    //       <Typography variant='h6' color='green'>
    //         Coupon savings
    //       </Typography>
    //       <Typography variant='h6' color='green'>
    //         -₹{coupon}
    //       </Typography>
    //     </Box>

    //     <Box display='flex' justifyContent='space-between'>
    //       <Typography variant='h6'>Applicable GST</Typography>
    //       <Typography variant='h6'>₹{gst}</Typography>
    //     </Box>

    //     <Box display='flex' justifyContent='space-between'>
    //       <Typography variant='h6'>Delivery</Typography>
    //       <Typography variant='h6'>
    //         {delivery === 0 ? 'Free' : `₹${delivery}`}
    //       </Typography>
    //     </Box>

    //     <Divider sx={{ my: 1 }} />

    //     <Box display='flex' justifyContent='space-between'>
    //       <Typography variant='h5' fontWeight={600}>
    //         Total
    //       </Typography>
    //       <Typography variant='h5' fontWeight={600}>
    //         ₹{total}
    //       </Typography>
    //     </Box>
    //   </Stack>
    // </Box>

    <>
      <Box className='cart-summary-box'>
        <Typography fontWeight={600} mb={1}>
          Payment Summary
        </Typography>

        <Stack spacing={1}>
          <Box className='cart-summary-line'>
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </Box>
          <Box className='cart-summary-line'>
            <span>Discount on MRP</span>
            <span style={{ color: 'green' }}>-₹{discount}</span>
          </Box>
          <Box className='cart-summary-line'>
            <span>Coupon savings</span>
            <span style={{ color: 'green' }}>-₹{coupon}</span>
          </Box>
          <Box className='cart-summary-line'>
            <span>Applicable GST</span>
            <span>₹0.00</span>
          </Box>
          <Box className='cart-summary-line'>
            <span>Delivery</span>
            <span style={{ color: 'green' }}>Free</span>
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Box className='cart-summary-line cart-summary-total'>
          <span>Total</span>
          <span>₹{total}</span>
        </Box>

        {(type === 'cod' || type === 'saved') && (
          <Button
            fullWidth
            variant='contained'
            className='place-order-button'
            onClick={nextStep}
            sx={{ mt: 2 }}
          >
            PLACE ORDER
          </Button>
        )}
      </Box>
    </>
  );
};

export default PaymentSummary;
