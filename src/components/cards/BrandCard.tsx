import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import styles from './BrandCard.module.css';
interface BrandCardProps {
  image: string;
  brandLogo: string;
  tagline: string;
  priceRange: string;
}

function BrandCard(props: BrandCardProps) {
  const { image, brandLogo, tagline, priceRange } = props;

  return (
    <Card className={styles.brandCard}>
      <CardMedia
        component='img'
        sx={{ objectFit: 'cover', maxHeight: 300, width: '100%' }}
        image={image}
        alt='Product image'
        className='product-image'
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Box sx={{ px: 1, justifyItems: 'center' }}>
          <img
            src={brandLogo}
            alt='Brand logo'
            style={{ height: 62, width: 152 }}
          />
        </Box>
        <Typography
          variant='h6'
          sx={{
            mt: 3,
            fontSize: 43,
            fontFamily: 'Libre Baskerville',
            fontWeight: 700,
          }}
        >
          {tagline}
        </Typography>
        <Typography variant='body2' sx={{ fontSize: 24, fontWeight: 700 }}>
          {priceRange}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BrandCard;
