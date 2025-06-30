import type { FeaturedBlogProps } from '../cards/FeaturedBlogCard';
import { Box, Button } from '@mui/material';
import Slider from 'react-slick';
import FeaturedBlogCard from '../cards/FeaturedBlogCard';

const dummyBlogs: FeaturedBlogProps[] = [
  {
    image:
      'https://images.unsplash.com/photo-1583158165447-55f4590f184a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Discover new way to decorate your home',
    description:
      'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'Souha . H',
    tag: 'Blog',
  },
  {
    image:
      'https://images.unsplash.com/photo-1732028920982-7185f4b13d9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Discover new way to decorate your home',
    description:
      'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'Souha . H',
    tag: 'Blog',
  },
  {
    image:
      'https://images.unsplash.com/photo-1732028920982-7185f4b13d9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dx',
    title: 'Discover new way to decorate your home',
    description:
      'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'Souha . H',
    tag: 'Blog',
  },
];
function FeaturedBlog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box sx={{ py: 8 }}>
        <Slider {...settings}>
          {dummyBlogs?.map((blog, index) => (
            <Box key={index} px={1}>
              <FeaturedBlogCard {...blog} />
            </Box>
          ))}
        </Slider>

        <Box mt={4} display='flex' justifyContent='center'>
          <Button
            variant='outlined'
            sx={{
              textTransform: 'none',
              px: 4,
              color: '#272727',
              border: '1px solid #272727',
            }}
          >
            View all
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default FeaturedBlog;
