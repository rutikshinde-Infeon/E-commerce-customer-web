export const mapProductToCardData = (product: any) => {
  const price = product?.price || 0;
  const originalPrice = product.comparePrice || price;
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return {
    id: product._id,
    imageSrc:
      product?.media?.videos?.[0]?.media?.resolutions?.thumbnail?.url ||
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: product?.title?.defaultValue || 'No Title',
    brand: product?.brand?.defaultValue || 'No Brand',
    rating: '4.4',
    price,
    originalPrice,
    discount,
  };
};
