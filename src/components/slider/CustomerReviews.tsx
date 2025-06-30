import React from "react";
import type { Review } from "../cards/ReviewCard";
import Slider from "react-slick";
import ReviewCard from "../cards/ReviewCard";

const testReview: Review[] = [
  {
    image:
      "https://images.unsplash.com/photo-1661695423331-817b8aadd1a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priya Sharma",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales...",
    rating: 4.5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1619943045321-a06ecc8cb942?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ravi Joshi",
    review:
      "Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet...",
    rating: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1656019674844-3040aba0350b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anita Deshmukh",
    review:
      "Duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper...",
    rating: 4.7,
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rutik Shinde",
    review:
      "Duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper...",
    rating: 4.7,
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
};
function CustomerReviews() {
  return (
    <>
      <div className="testimonials-section" style={{ padding: "40px 0" }}>
        <Slider {...sliderSettings}>
          {testReview.map((testimonial, index) => (
            <div key={index}>
              <ReviewCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CustomerReviews;
