import React, { useState, useEffect, use } from "react";
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
} from "@mui/material";
import {
  FavoriteBorder as FavoriteIcon,
  ShoppingCartOutlined as CartIcon,
  AccountCircle as ProfileIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { navLogo } from "../../assets/index";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Men", path: "/about" },
  { label: "Women" },
  { label: "Kids" },
  { label: "Shop" },
  { label: "Contact Us" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(!isSmallScreen);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setShowSearch(!isSmallScreen);
  }, [isSmallScreen]);

  const menuId = "primary-search-account-menu";
  const userName = "John Doe";

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        borderBottom: "none",
      }}
    >
      <Container maxWidth="2xl" >
        <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 84 }, py: 2 }}>
          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 2,
              ml: 3,
              flexShrink: 0,

            }}
            onClick={() => navigate("/")}
          >
            <img
              src={navLogo}
              alt="Logo"
              style={{ height: "100%", maxHeight: 40 }}
            />
          </Box>

          {/* Navigation Links (Desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                sx={{
                  mx: 1,
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                  px: 1.5,
                  fontSize:"18px",
                  textTransform: "none",
                }}
                onClick={() => {
                  navigate(link.path || "/");
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              mx: 2,
              flexGrow: { xs: 1, md: 0 },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <SearchBar />
          </Box>

          {/* Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: { xs: showSearch ? 0 : 1, md: 2 },
              flexShrink: 0,
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              sx={{
                mx: { xs: 0.5, md: 1 },
                display: { xs: showSearch ? "none" : "flex", sm: "flex" },
              }}
            >
              <Badge badgeContent={4} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              sx={{
                mx: { xs: 0.5, md: 1 },
                display: { xs: showSearch ? "none" : "flex", sm: "flex" },
              }}
            >
              <Badge badgeContent={2} color="error">
                <CartIcon />
              </Badge>
            </IconButton>
            {/* User Name and Profile Icon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // ml: 1,
                cursor: "pointer",
              }}
              onClick={handleProfileMenuOpen}
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                sx={{
                  display: { xs: showSearch ? "none" : "flex", sm: "flex" },
                }}
              >
                <ProfileIcon />
                
              </IconButton>
              {!isMobile && (
                <span
                  style={{
                    marginRight: 8,
                    marginLeft: 6,
                    fontWeight: 500,
                    color: "#222",
                  }}
                >
                  {userName}
                </span>
              )}
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
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            pt: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2, px: 2 }}>
            <img src={navLogo} alt="Logo" style={{ height: 36 }} />
          </Box>
          <Divider />
          <List sx={{ flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton sx={{ px: 3 }}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <Button
              variant="outlined"
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
