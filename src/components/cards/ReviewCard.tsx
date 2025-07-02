import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Box,
} from '@mui/material';
import './ReviewCard.css';

export interface Review {
  image: string;
  name: string;
  review: string;
  rating: number;
}

function ReviewCard(props: Review) {
  const { image, name, review, rating } = props;

  return (
    <Card className='review-card'>
      <CardContent className='review-content'>
        <Avatar alt={name} src={image} className='review-avatar' />
        <Typography className='review-name'>{name}</Typography>
        <Box className='rating-wrapper'>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography className='rating-value'>{rating.toFixed(1)}</Typography>
        </Box>

        <Typography className='review-text'>{review}</Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
