import { Box, Typography } from '@mui/material';
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
  height: string;
  width?: string;
}

function CategoryTile({ category, height, width = '100%' }: CategoryTileProps) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 2,
        height,
        width,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Typography
        className='category-label'
        sx={{ color: 'white', fontWeight: 'bold' }}
      >
        {category.name}
      </Typography>
    </Box>
  );
}

function ShopCategoriesSection() {
  return (
    <Box sx={{ px: 2, py: 6 }}>
      {/* Row 1 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          height: '500px',
        }}
      >
        {/* Left tall tile */}
        <Box sx={{ flex: 1 }}>
          <CategoryTile category={categories[0]} height='100%' />
        </Box>

        {/* Right two stacked tiles */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CategoryTile category={categories[1]} height='50%' />
          <CategoryTile category={categories[2]} height='50%' />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <CategoryTile category={categories[3]} height='50%' />
          <CategoryTile category={categories[4]} height='50%' />
        </Box>
      </Box>

      {/* Row 2 */}
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          mt: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <CategoryTile category={categories[3]} height='100%' />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <CategoryTile category={categories[4]} height='100%' />
          </Box>
          <Box sx={{ flex: 1 }}>
            <CategoryTile category={categories[5]} height='100%' />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}

export default ShopCategoriesSection;
