import './ProductDetails.scss';
import PDPImages from '../../assets/images/PDP-image.png';

interface Review {
  user: string;
  rating: number;
  description: string;
  images: string[];
  date: string;
}

const reviews: Review[] = [
  {
    user: 'Rahul',
    rating: 5,
    description: 'Great quality! Perfect fit and stylish.',
    images: [PDPImages, PDPImages],
    date: 'Jan 5, 2024',
  },
  {
    user: 'Omkar',
    rating: 4,
    description: 'Nice jacket but the size runs a bit small.',
    images: [PDPImages],
    date: 'Feb 10, 2024',
  },
  {
    user: 'Shivam',
    rating: 5,
    description: 'Love the fabric and design, totally worth it!',
    images: [PDPImages],
    date: 'Mar 2, 2024',
  },
  {
    user: 'saru',
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean tristique felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque arcu accumsan sollicitudin Read More',
    images: [PDPImages, PDPImages, PDPImages],
    date: '28 September',
  },
  {
    user: 'Aniket',
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean tristique felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque arcu accumsan sollicitudin Read More',
    images: [],
    date: '28 September',
  },
  {
    user: 'Ajit',
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean tristique felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. neque arcu accumsan sollicitudin Read More',
    images: [PDPImages],
    date: '28 September',
  },
];

const RatingsReviews = () => {
  return (
    <div className='ratings-reviews-container'>
      {' '}
      <div className='overall-rating'>
        <div className='rating-value'>
          4.4 <span className='out-of-5'>★★★★☆</span>
        </div>
        <div className='verified-buyers'>40 Verified Buyers</div>
      </div>
      {/* User Reviews */}
      <div className='user-reviews'>
        {reviews.map((review, index) => (
          <div key={index} className='review-card'>
            <div className='review-header'>
              <div className='user-info'>
                <span className='user-name'>{review.user}</span>
                <span className='review-date'>{review.date}</span>
              </div>
              <div className='rating'>
                {'★'.repeat(Math.floor(review.rating))}
                {'☆'.repeat(5 - Math.floor(review.rating))}
              </div>
            </div>

            <div className='review-description'>
              {review.description.length > 150
                ? review.description.substring(0, 150) + ' Read More'
                : review.description}
            </div>

            {/* User Images */}
            {review.images.length > 0 && (
              <div className='review-images'>
                {review.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt='User review'
                    className='review-image'
                  />
                ))}
                {review.images.length > 3 && (
                  <span className='image-count'>
                    +{review.images.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='view-all-reviews'>View all Reviews</button>
    </div>
  );
};

export default RatingsReviews;
