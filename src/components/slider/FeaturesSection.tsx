import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';

const features = [
  {
    icon: <OutlinedFlagIcon fontSize='large' sx={{ fontSize: '56px' }} />,
    title: 'Locally Owned',
    description: 'We have local business and sell best quality clothes',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: '56px' }} />,
    title: 'Fast Delivery',
    description: 'We provide fast delivery to our customers',
  },
  {
    icon: <Inventory2OutlinedIcon sx={{ fontSize: '56px' }} />,
    title: 'Easy Return',
    description: 'We provide easy return policy.',
  },
  {
    icon: <HeadsetMicOutlinedIcon sx={{ fontSize: '56px' }} />,
    title: 'Online Support',
    description: 'We give 24/7 online support',
  },
  {
    icon: <LocalOfferOutlinedIcon sx={{ fontSize: '56px' }} />,
    title: 'Best Offers',
    description: 'We give best offers to our customers',
  },
];

const FeaturesSection = () => {
  return (
    <Box mb={2}>
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6, lg: 9 }}
        justifyContent='center'
      >
        {features.map((feature, idx) => (
          <Grid
            item
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: {
                xs: 320,
                sm: 220,
                md: 240,
                lg: 260,
              },
            }}
          >
            <Paper
              sx={{
                width: { xs: 320, sm: 220, md: 240, lg: 260 },
                height: { xs: 180, sm: 170, md: 180 },
                textAlign: 'center',
                p: 3,
                borderRadius: '10px',
                backgroundColor: '#F0F0F0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box color='#2d3a4b'>{feature.icon}</Box>
              <Typography
                variant='h6'
                sx={{ fontWeight: 700, mt: 2, fontSize: '24px' }}
              >
                {feature.title}
              </Typography>
              <Typography variant='body2' sx={{ mt: 1 }} color='text.secondary'>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
