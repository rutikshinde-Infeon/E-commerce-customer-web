import Slider from 'react-slick';
import './Sliders.css';

interface BannerDataProps {
  id: number;
  imageSrc: string;
  path: string;
}
interface BannerProps {
  BannerData: BannerDataProps[];
}

function HeroCarousel({ BannerData }: BannerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='hero-carousel-wrapper slider-container'>
      <Slider {...settings}>
        {BannerData?.map((banner, index) => (
          <div className='slide-item' key={index}>
            <a href={banner.path}>
              <img
                src={banner.imageSrc}
                alt={`Hero Slide ${index + 1}`}
                className='slide-image'
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroCarousel;
