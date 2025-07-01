export interface ProductDataProps {
  id: string;
  imageSrc: string;
  title: string;
  brand: string;
  rating: string;
  price: number;
  originalPrice: number;
  discount: number;
}

export interface BrandDealProps {
  id: number;
  image: string;
  brandLogo: string;
  tagline: string;
  priceRange: string;
}
