import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Link,
  IconButton,
  List,
  ListItem,
  InputAdornment,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  MailOutline,
} from '@mui/icons-material';
import { footerLogo } from '../../assets';
import type { JSX } from 'react/jsx-runtime';

const FOOTER_LINKS = {
  women: ['All Women', 'Stars', 'T-Stars', 'Type', 'Jackets'],
  men: ['All Men', 'Stars', 'T-Stars', 'Sports', 'Jackets'],
  kids: ['All Kids', 'Stars', 'T-Stars', 'Sports', 'Jackets'],
  shopping: [
    'Your cart',
    'Your orders',
    'Compared items',
    'Wishlist',
    'Shipping Details',
  ],
  moreLinks: [
    'Blogs',
    'Gift Center',
    'Buying Guides',
    'New Arrivals',
    'Clearance',
  ],
};

const SOCIAL_ICONS = [
  { icon: <Facebook />, label: 'Facebook' },
  { icon: <Instagram />, label: 'Instagram' },
  { icon: <WhatsApp />, label: 'WhatsApp' },
  { icon: <Twitter />, label: 'Twitter' },
];

const StyledTextField = styled(TextField)(({}) => ({
  backgroundColor: '#020823',
  color: '#fff',
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    borderRadius: '4px',
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#aaa',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  // const isSm = useMediaQuery(theme.breakpoints.down('md'));

  interface LinkColumnProps {
    title: string;
    links: string[];
  }
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const renderLinkColumn = ({ title, links }: LinkColumnProps): JSX.Element => (
    <Grid
    // item
    // xs={12}
    // sm={6}
    // md={4}
    // sx={{
    //   px: { xs: 2, sm: 3 },
    //   mb: { xs: 2, sm: 3 },
    //   textAlign: { xs: 'left', sm: 'left', md: 'left' },
    // }}
    >
      <Typography
        variant='h6'
        gutterBottom
        fontWeight='bold'
        sx={{
          fontSize: '24px',
        }}
      >
        {title}
      </Typography>
      <List sx={{ p: 0 }}>
        {links.map((link: string) => (
          <ListItem
            key={link}
            sx={{
              p: 0,
              mb: 1,
              fontSize: '18px',
            }}
          >
            <Link href='#' color='inherit' underline='hover'>
              {link}
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#00071B',
        color: '#fff',
        py: { xs: 2, sm: 2, md: 2 },
        borderTop: '1px solid #e0e0e0',
      }}
    >
      {/* Responsive logo and title */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          ml: { xs: 0, sm: 4 },
          mr: 1,
          flexShrink: 0,
          mb: { xs: 2, sm: 6 },
          mt: { xs: 1, sm: 2 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <img
          src={footerLogo}
          alt='Logo'
          style={{
            height: isXs ? '48px' : '64px',
            width: isXs ? '56px' : '76px',
          }}
          loading='lazy'
        />
        <Typography
          variant={isXs ? 'h5' : 'h4'}
          sx={{
            ml: { xs: 0, sm: 3 },
            mt: { xs: 1, sm: 0 },
            fontWeight: 'bold',
            fontSize: { xs: '1.3rem', sm: '64px' },
          }}
        >
          Globex
        </Typography>
      </Box>

      <Container maxWidth='xl' sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 6 }}
          marginLeft={{ xs: 0, sm: 2, md: 4 }}
          alignItems='flex-start'
          marginBottom={{ xs: 2, sm: 4, md: 8 }}
        >
          {/* Responsive columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) =>
            renderLinkColumn({
              title: capitalize(title),
              links,
            })
          )}

          <Grid
            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}

            // item
            // xs={12}
            // sm={6}
            // md={4}
            // sx={{
            //   mt: { xs: 2, sm: 0 },
            //   display: 'flex',
            //   flexDirection: 'column',
            //   justifyContent: 'flex-start',
            //   alignItems: { xs: 'flex-start', md: 'flex-end' },
            //   // width: "100%",
            // }}
          >
            <Box sx={{ width: { xs: '100%', md: '100%' } }}>
              <Typography
                variant='h6'
                gutterBottom
                fontWeight='bold'
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '24px' },
                }}
              >
                Stay In Touch
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                }}
              >
                Stay in touch to get special offers, free giveaways <br />
                and once in a lifetime deals
              </Typography>

              <Box component='form' sx={{ mt: 2, width: '100%' }}>
                <StyledTextField
                  variant='outlined'
                  size='small'
                  placeholder='Enter your email'
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <MailOutline sx={{ color: '#fff', mr: 2 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Responsive bottom bar */}
      <Box
        sx={{
          mt: { xs: 2, sm: 4 },
          pt: 4,
          pb: 2,
          fontSize: { xs: '0.75rem', sm: '0.8rem' },
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1, sm: 4, md: 16 },
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: { xs: 1, sm: 2 },
            mb: { xs: 1, sm: 0 },
          }}
        >
          <Link
            href='#'
            color='inherit'
            underline='hover'
            sx={{ mx: 1, fontSize: { xs: '16px', sm: '18px' } }}
          >
            Terms & Conditions
          </Link>
          <Link
            href='#'
            color='inherit'
            underline='hover'
            sx={{ mx: 1, fontSize: { xs: '16px', sm: '18px' } }}
          >
            Privacy Policy
          </Link>
        </Box>
        <Box sx={{ mt: { xs: 1, sm: 0 } }}>
          {SOCIAL_ICONS.map(({ icon, label }) => (
            <IconButton
              key={label}
              aria-label={label}
              sx={{
                color: '#fff',
                mx: 0.5,
                p: { xs: '6px', sm: '8px' },
                '& svg': {
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
