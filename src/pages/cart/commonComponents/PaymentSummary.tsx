import React from 'react';
import { Box, Typography, Divider, Stack } from '@mui/material';

interface SummaryProps {
  totalMRP: number;
  discount: number;
  coupon: number;
  gst: number;
  delivery: number;
}

const PaymentSummary = ({
  totalMRP,
  discount,
  coupon,
  gst,
  delivery,
}: SummaryProps) => {
  const total = totalMRP - discount - coupon + gst + delivery;

  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 3,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography variant='h4' fontWeight={600} mb={2}>
        Payment Summary
      </Typography>

      <Stack spacing={1.5}>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6'>Total MRP</Typography>
          <Typography variant='h6'>₹{totalMRP}</Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6' color='green'>
            Discount on MRP
          </Typography>
          <Typography variant='h6' color='green'>
            -₹{discount}
          </Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6' color='green'>
            Coupon savings
          </Typography>
          <Typography variant='h6' color='green'>
            -₹{coupon}
          </Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6'>Applicable GST</Typography>
          <Typography variant='h6'>₹{gst}</Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6'>Delivery</Typography>
          <Typography variant='h6'>
            {delivery === 0 ? 'Free' : `₹${delivery}`}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h5' fontWeight={600}>
            Total
          </Typography>
          <Typography variant='h5' fontWeight={600}>
            ₹{total}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PaymentSummary;
