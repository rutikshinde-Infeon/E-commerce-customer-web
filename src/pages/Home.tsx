import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import { Box, Container, flex, Grid, styled } from "@mui/system";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import BrandCard from "../components/cards/BrandCard";
import { brandDeals } from "../components/cards/brandData";

export interface ProductData {
  id: number;
  imageSrc: string;
  title: string;
  brand: string;
  rating: string;
  price: string;
  originalPrice: string;
  discount: string;
}
const ScrollContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  gap: "16px",
  padding: "20px 16px",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  cursor: "grab",
  "&:active": {
    cursor: "grabbing",
  },
});
const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const dummyData = [
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Womens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Womens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Womens Denim Pant",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 6,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
    {
      id: 7,
      imageSrc:
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mens Denim Jacket",
      brand: "Brand Name",
      rating: "4.4",
      price: "700",
      originalPrice: "1000",
      discount: "30",
    },
  ];
  const cardWidth = `calc((100% - 3 * 16px) / 4)`;
  useEffect(() => {
    const handleResize = () => {
      // Adjust visible cards based on screen size if needed
      if (window.innerWidth < 900) {
        setVisibleCards(3);
      } else if (window.innerWidth < 600) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    const startX = e.pageX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
      updateButtonVisibility();
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
      setTimeout(updateButtonVisibility, 300); // Wait for scroll to complete
    }
  };

  const updateButtonVisibility = () => {
    if (!scrollRef.current) return;
    setShowLeftButton(scrollRef.current.scrollLeft > 0);
    setShowRightButton(
      scrollRef.current.scrollLeft <
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 1
    );
  };

  // return (
  //   <>
  //     <Box display={"flex"}>
  //       {dummyData.length > 0 &&
  //         dummyData.map((product: ProductData) => (
  //           <ProductCard
  //             key={product.title}
  //             imageSrc={product.imageSrc}
  //             title={product.title}
  //             brand={product.brand}
  //             rating={product.rating}
  //             price={product.price}
  //             originalPrice={product.originalPrice}
  //             discount={product.discount}
  //           />
  //         ))}
  //     </Box>
  //   </>
  // );
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {" "}
        <Typography
          variant="h6"
          fontWeight={700}
          mb={0}
          fontSize={36}
          marginLeft={6}
        >
          Trending Now
        </Typography>
        {/* Left scroll button - only show when needed */}
        {showLeftButton && (
          <IconButton
            onClick={() => scroll(-300)}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.8)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}
        {/* Scrollable container */}
        <ScrollContainer
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onScroll={updateButtonVisibility}
          sx={{
            "& > *": {
              minWidth: cardWidth,
              flexShrink: 0,
            },
          }}
        >
          {dummyData.map((product: ProductData) => (
            <ProductCard
              key={`${product.title}-${Math.random()}`}
              {...product}
              sx={{
                minWidth: cardWidth,
                flexShrink: 0,
              }}
            />
          ))}
        </ScrollContainer>
        {/* Right scroll button - only show when needed */}
        {showRightButton && (
          <IconButton
            onClick={() => scroll(300)}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.8)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </Box>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Deals of the Day
        </Typography>
        <Grid container spacing={2}>
          {brandDeals.map((deal, index) => (
            <Grid item key={index} xs={12} sm={6} md={2.4}>
              <BrandCard
                image={deal.image}
                brandLogo={deal.brandLogo}
                tagline={deal.tagline}
                priceRange={deal.priceRange}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
