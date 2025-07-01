import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../styles/ShopCategoriesSection.css';

export interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: 'Women',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Men',
    image:
      'https://images.unsplash.com/photo-1508243771214-6e95d137426b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1506169894395-36397e4aaee4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Streetwear',
    image:
      'https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Casual',
    image:
      'https://images.unsplash.com/photo-1656786779124-3eb10b7014a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Activewear',
    image:
      'https://images.unsplash.com/photo-1645318801217-143533cb559f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

interface CategoryTileProps {
  category: Category;
  variant: 'large' | 'tall' | 'small';
}

function CategoryTile(props: CategoryTileProps) {
  const { category, variant } = props;
  return (
    <Box
      className={`category-tile ${variant}`}
      sx={{ backgroundImage: `url(${category.image})` }}
    >
      <Typography className='category-label'>{category.name}</Typography>
    </Box>
  );
}

function ShopCategoriesSection() {
  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={2}>
        {/* Left large image */}
        <Grid item xs={12} md={6}>
          <CategoryTile category={categories[0]} variant='large' />
        </Grid>

        {/* Two stacked images */}
        <Grid item xs={12} md={6}>
          <Grid container direction='column' spacing={2}>
            {[categories[1], categories[2]].map((cat, i) => (
              <Grid item xs={12} key={i}>
                <CategoryTile category={cat} variant='tall' />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Bottom stacked and side-by-side tiles */}
        <Grid item xs={12} md={6}>
          <Grid container direction='column' spacing={2}>
            <Grid item xs={12}>
              <CategoryTile category={categories[3]} variant='tall' />
            </Grid>
            <Grid container spacing={2}>
              {[categories[4], categories[5]].map((cat, i) => (
                <Grid item xs={6} key={i}>
                  <CategoryTile category={cat} variant='small' />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShopCategoriesSection;
