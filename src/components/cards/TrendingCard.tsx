import { Box, Button, Grid, Typography } from '@mui/material';
import styles from './TrendingCard.module.css';

export interface trendingItem {
  id: number;
  brandLogo: string;
  discountText: string;
  buttonText: string;
  imageUrl: string;
}

function TrendingCard(props: trendingItem) {
  const { brandLogo, discountText, buttonText, imageUrl } = props;

  return (
    <Box className={styles.trendingCard}>
      <Grid container className={styles.cardContainer}>
        {/* Left Side */}
        <Grid className={styles.leftSide}>
          <Box
            component='img'
            src={brandLogo}
            alt='Brand Logo'
            className={styles.brandLogo}
          />
          <Typography
            variant='h4'
            fontWeight={600}
            className={styles.discountText}
          >
            {discountText}
          </Typography>
          <Button
            variant='outlined'
            onClick={() => console.log('Button Clicked')}
            className={styles.cardButton}
          >
            {buttonText}
          </Button>
        </Grid>

        {/* Right Side */}
        <Grid className={styles.rightSide}>
          <Box
            component='img'
            src={imageUrl}
            alt='Promo'
            className={styles.promoImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TrendingCard;
