import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  FavoriteBorder as FavoriteIcon,
  ShoppingCartOutlined as CartIcon,
  AccountCircle as ProfileIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { navLogo } from '../../assets/index';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Men', path: '/' },
  { label: 'Women', path: '/' },
  { label: 'Kids', path: '/' },
  { label: 'Shop', path: '/product' },
  { label: 'Contact Us', path: '/' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(!isSmallScreen);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log('handleProfileMenuOpen ', anchorEl);
  };
  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setShowSearch(!isSmallScreen);
  }, [isSmallScreen]);

  const menuId = 'primary-search-account-menu';
  const userName = 'John Doe';

  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      className={styles.appBar}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters className={styles.toolbar}>
          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box className={styles.logoBox} onClick={() => navigate('/')}>
            <img src={navLogo} alt='Logo' className={styles.logoImg} />
          </Box>

          {/* Navigation Links (Desktop) */}
          <Box
            className={styles.navLinks}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color='inherit'
                className={styles.navButton}
                onClick={() => {
                  navigate(link.path || '/');
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Search Bar */}
          <Box
            className={styles.searchBarBox}
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <SearchBar />
          </Box>

          {/* Icons */}
          <Box
            className={styles.iconsBox}
            // sx={{
            //   ml: { xs: showSearch ? 0 : 1, md: 2 },
            // }}
          >
            <IconButton
              size='large'
              color='inherit'
              sx={{
                mx: { xs: 0, md: 0, lg: 1 },
                display: { xs: showSearch ? 'none' : 'flex', sm: 'flex' },
              }}
            >
              <Badge badgeContent={4} color='error'>
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              color='inherit'
              sx={{
                mx: { xs: 0.5, md: 1 },
                display: { xs: showSearch ? 'none' : 'flex', sm: 'flex' },
              }}
            >
              <Badge badgeContent={2} color='error'>
                <CartIcon />
              </Badge>
            </IconButton>
            {/* User Name and Profile Icon */}
            <Box className={styles.profileBox} onClick={handleProfileMenuOpen}>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                color='inherit'
                sx={{
                  display: { xs: showSearch ? 'none' : 'flex', sm: 'flex' },
                }}
              >
                <ProfileIcon />
              </IconButton>
              {!isMobile && <span className={styles.userName}>{userName}</span>}
            </Box>
          </Box>

          {/* Profile Menu */}
          {/* <ProfileMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          /> */}
        </Toolbar>
      </Container>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
        classes={{ paper: styles.drawerPaper }}
      >
        <Box
          sx={{
            width: 250,
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
          role='presentation'
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Box className={styles.drawerLogoBox}>
            <img src={navLogo} alt='Logo' className={styles.drawerLogoImg} />
          </Box>
          <Divider />
          <List className={styles.drawerList}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton className={styles.drawerListItemButton}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box className={styles.drawerProfileBox}>
            <Button
              variant='outlined'
              fullWidth
              startIcon={<ProfileIcon />}
              onClick={handleProfileMenuOpen}
            >
              {userName}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
