import React, { useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Collapse,
  TextField,
  Checkbox,
  Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PaymentSummary from './PaymentSummary';
import '../Cart.css';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DiscountIcon from '@mui/icons-material/Discount';
const Payment = () => {
  const [paymentMode, setPaymentMode] = useState('credit');

  const totalMRP = 2250;
  const discount = 500;
  const coupon = 400;
  const gst = 6;
  const delivery = 0;

  const total = totalMRP - discount - coupon + gst + delivery;

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiry: '',
      cvv: '',
      saveCard: false,
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Card number must be 16 digits')
        .required('Required'),
      expiry: Yup.string()
        .matches(/^(0[1-9]|1[0-2]) ?\/ ?\d{2}$/, 'Use MM/YY format')
        .required('Required'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV must be 3 digits')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values, 'Payment Successful!');
    },
  });

  return (
    <Box className='cart-section payment-wrapper'>
      <Box className='left-column'>
        {/* Available Offers */}
        {/* <Box className='offers-box'>
          <Typography variant='subtitle1' className='offers-title'>
            Available Offers
          </Typography>
          <ul className='offers-list'>
            <li>Get ₹100 OFF on Credit Card Payment</li>
            <li>10% Cashback on orders above ₹999</li>
            <li>No-cost EMI available for selected banks</li>
          </ul>
        </Box> */}
        <Accordion defaultExpanded sx={{ mb: 3, backgroundColor: '#ffffff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='offers-content'
            id='offers-header'
          >
            <DiscountIcon fontSize='small' />
            <Typography variant='subtitle1' fontWeight={600}>
              Available Offers
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary='Get ₹100 OFF on Credit Card Payment' />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary='10% Cashback on orders above ₹999' />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary='No-cost EMI available for selected banks' />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* Main Section with Flex Layout */}
        <Box className='payment-container'>
          {/* Left Section: Payment Options */}
          <Box className='payment-left'>
            <Typography
              variant='h5'
              fontWeight={600}
              mb={2}
              className='section-heading'
            >
              Select Payment Mode
            </Typography>
            <RadioGroup
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className='payment-options'
            >
              <FormControlLabel
                value='saved'
                control={<Radio />}
                label='Saved Cards/UPI'
              />
              <FormControlLabel
                value='cod'
                control={<Radio />}
                label='Cash on Delivery'
              />
              <FormControlLabel
                value='credit'
                control={<Radio />}
                label='Credit Card'
              />
              <Collapse
                in={paymentMode === 'credit'}
                timeout='auto'
                unmountOnExit
                className='card-form'
              >
                <form onSubmit={formik.handleSubmit}>
                  <Box display='flex' gap={2} mb={2}>
                    <TextField
                      fullWidth
                      label='Card Number'
                      name='cardNumber'
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cardNumber &&
                        Boolean(formik.errors.cardNumber)
                      }
                      helperText={
                        formik.touched.cardNumber && formik.errors.cardNumber
                      }
                      className='form-input'
                    />
                  </Box>
                  <Box display='flex' gap={2}>
                    <TextField
                      fullWidth
                      label='Card Expiry Date'
                      placeholder='MM / YY'
                      name='expiry'
                      value={formik.values.expiry}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.expiry && Boolean(formik.errors.expiry)
                      }
                      helperText={formik.touched.expiry && formik.errors.expiry}
                      className='form-input'
                    />
                    <TextField
                      fullWidth
                      label='CVV'
                      name='cvv'
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                      helperText={formik.touched.cvv && formik.errors.cvv}
                      className='form-input'
                    />
                  </Box>
                  <Box display='flex' alignItems='center' mt={1}>
                    <Checkbox
                      name='saveCard'
                      checked={formik.values.saveCard}
                      onChange={formik.handleChange}
                    />
                    <Typography variant='body2'>
                      Save this card securely
                    </Typography>
                  </Box>
                  <Button
                    type='submit'
                    variant='contained'
                    className='pay-button'
                  >
                    PAY NOW ₹{total}
                  </Button>
                </form>
              </Collapse>
              <FormControlLabel
                value='debit'
                control={<Radio />}
                label='Debit Card'
              />
              <Collapse
                in={paymentMode === 'debit'}
                timeout='auto'
                unmountOnExit
                className='card-form'
              >
                <form onSubmit={formik.handleSubmit}>
                  <Box display='flex' gap={2} mb={2}>
                    <TextField
                      fullWidth
                      label='Card Number'
                      name='cardNumber'
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cardNumber &&
                        Boolean(formik.errors.cardNumber)
                      }
                      helperText={
                        formik.touched.cardNumber && formik.errors.cardNumber
                      }
                      className='form-input'
                    />
                  </Box>
                  <Box display='flex' gap={2}>
                    <TextField
                      fullWidth
                      label='Card Expiry Date'
                      placeholder='MM / YY'
                      name='expiry'
                      value={formik.values.expiry}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.expiry && Boolean(formik.errors.expiry)
                      }
                      helperText={formik.touched.expiry && formik.errors.expiry}
                      className='form-input'
                    />
                    <TextField
                      fullWidth
                      label='CVV'
                      name='cvv'
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                      helperText={formik.touched.cvv && formik.errors.cvv}
                      className='form-input'
                    />
                  </Box>
                  <Box display='flex' alignItems='center' mt={1}>
                    <Checkbox
                      name='saveCard'
                      checked={formik.values.saveCard}
                      onChange={formik.handleChange}
                    />
                    <Typography variant='body2'>
                      Save this card securely
                    </Typography>
                  </Box>
                  <Button
                    type='submit'
                    variant='contained'
                    className='pay-button'
                  >
                    PAY NOW ₹{total}
                  </Button>
                </form>
              </Collapse>
            </RadioGroup>
          </Box>
        </Box>
      </Box>

      {/* Right Section: Summary */}
      <Box className='payment-right'>
        <PaymentSummary
          totalMRP={totalMRP}
          discount={discount}
          coupon={coupon}
          gst={gst}
          delivery={delivery}
          type={paymentMode}
        />
      </Box>
    </Box>
  );
};

export default Payment;
