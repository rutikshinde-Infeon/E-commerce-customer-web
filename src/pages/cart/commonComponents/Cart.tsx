import { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Paper,
  IconButton,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { dummyProducts } from '../productDummyJason';

interface Props {
  cart: typeof dummyProducts;
  updateQuantity: (id: number, delta: number) => void;
  nextStep: () => void;
}

const Cart = ({ cart, updateQuantity, nextStep }: Props) => {
  const [offersExpanded, setOffersExpanded] = useState(false);
  const [couponExpanded, setCouponExpanded] = useState(false);

  const totalMRP = cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = totalMRP - total;
  const couponDiscount = 400;
  const finalTotal = total - couponDiscount;

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box className='cart-section'>
      <Stack direction={isMdUp ? 'row' : 'column'} spacing={4}>
        <Box flex={1}>
          <Accordion
            expanded={offersExpanded}
            onChange={() => setOffersExpanded(!offersExpanded)}
            className='cart-accordion'
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display='flex' alignItems='center'>
                <DiscountIcon fontSize='small' sx={{ mr: 1 }} />
                <Typography>Available Offers</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>10% off on select products</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={couponExpanded}
            onChange={() => setCouponExpanded(!couponExpanded)}
            className='cart-accordion'
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display='flex' alignItems='center'>
                <LocalOfferIcon fontSize='small' sx={{ mr: 1 }} />
                <Typography>Apply Coupons</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>No coupons available</Typography>
            </AccordionDetails>
          </Accordion>
          <Typography variant='h6' className='cart-section-title' mb={1}>
            My Cart ({cart.length})
          </Typography>
          <Stack spacing={2}>
            {cart.map((item) => (
              <Paper key={item.id} className='cart-item'>
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  width='100%'
                >
                  {/* Image */}
                  <Box className='cart-item-image'>
                    <img src={item.image || ''} alt={item.name} />
                  </Box>

                  {/* Info */}
                  <Box className='cart-item-info'>
                    <Typography fontWeight={500}>{item.name}</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Save for Later | Remove
                    </Typography>
                  </Box>

                  {/* Qty & Price */}
                  <Box className='cart-item-price'>
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='flex-end'
                      spacing={2}
                    >
                      <IconButton
                        className='cart-icon'
                        size='small'
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        className='cart-icon'
                        size='small'
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                    <Box display={'flex'} alignItems={'center'} gap={2} mt={3}>
                      <Typography fontWeight={600}>₹{item.price}</Typography>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{ textDecoration: 'line-through' }}
                      >
                        ₹{item.originalPrice}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Right Column */}
        <Box flex={isMdUp ? '0 0 320px' : '1'}>
          <Box>
            <Box className='cart-summary-box' mb={2}>
              <Typography fontWeight={600} mb={1}>
                Delivery Address
              </Typography>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                mb={2}
              >
                <Typography>
                  Bangalore <strong>530086</strong>
                </Typography>
                <Button size='small' variant='text'>
                  Change
                </Button>
              </Stack>
            </Box>
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
                  <span style={{ color: 'green' }}>-₹{couponDiscount}</span>
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
                <span>₹{finalTotal}</span>
              </Box>

              <Button
                fullWidth
                variant='contained'
                className='place-order-button'
                onClick={() => nextStep()}
              >
                PLACE ORDER
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
