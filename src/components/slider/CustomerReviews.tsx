import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Rating,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";

type Review = {
  id: number;
  image: string;
  rating: number;
  count: number;
  comment: string;
};

const reviews: Review[] = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    count: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie.",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    count: 7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper ",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4.5,
    count: 5,
    comment:
      "Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper.",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 3.5,
    count: 2,
    comment:
      "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 4,
    count: 1,
    comment: "Curabitur gravida arcu ac tortor dignissim convallis.",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    count: 9,
    comment:
      "Egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
  },
];

const CustomerReviews: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [showButtons, setShowButtons] = useState<boolean>(true);

  // Hide buttons on mobile since we'll show full-width cards
  useEffect(() => {
    setShowButtons(!isMobile);
  }, [isMobile]);

  // Determine card width based on screen size
  const getCardWidth = (): string => {
    if (isMobile) return "90vw";
    if (isTablet) return "70vw";
    return "600px";
  };

  // Determine avatar size based on screen size
  const getAvatarSize = (): number => {
    if (isMobile) return 100;
    return 180;
  };

  // react-slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    arrows: showButtons,
    nextArrow: showButtons ? (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          zIndex: 2,
          bgcolor: "grey.900",
          color: "white",
          "&:hover": { bgcolor: "grey.800" },
          borderRadius: "50px",
          display: isMobile ? "none" : "flex",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    ) : null,
    prevArrow: showButtons ? (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          zIndex: 2,
          bgcolor: "grey.900",
          color: "white",
          "&:hover": { bgcolor: "grey.800" },
          borderRadius: "50px",
          display: isMobile ? "none" : "flex",
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
    ) : null,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 6, position: "relative", px: isMobile ? 2 : 0 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        fontSize={isMobile ? "28px" : "36px"}
        textAlign={isMobile ? "center" : "left"}
        ml={isMobile ? 0 : 5}
      >
        What Our Customer Says
      </Typography>

      <Box sx={{ position: "relative" }}>
        <Slider {...settings}>
          {reviews.map((review) => (
            <Box key={review.id} sx={{ px: 1, mx: 8 ,  }}>
              <Paper
                elevation={3}
                sx={{
                  height: isMobile ? "auto" : 476,
                  minWidth: getCardWidth(),
                  maxWidth: 900,
                  width: isMobile ? getCardWidth() : "auto",
                  flex: "0 0 auto",
                  textAlign: "center",
                  p: isMobile ? 2 : 3,
                  borderRadius: 2,
                  position: "relative",
                  my: isMobile ? 2 : 0,
                  mx: "auto",
                }}
              >
                <Avatar
                  src={review.image}
                  alt="Customer"
                  sx={{
                    width: getAvatarSize(),
                    height: getAvatarSize(),
                    mx: "auto",
                    mb: 2,
                  }}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{ mb: 2 }}
                >
                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "black",
                      },
                    }}
                  />
                  <Typography variant="subtitle1" fontWeight="bold">
                    +{review.count}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  mt={2}
                  color="text.primary"
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: isMobile ? 3 : 4,
                    WebkitBoxOrient: "vertical",
                    fontSize: isMobile ? "16px" : "20px",
                  }}
                >
                  {review.comment}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CustomerReviews;
