import { useState } from 'react';
import './ProductListing.scss';
import CloseIcon from '@mui/icons-material/Close';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Drawer } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { productData } from '../../utils/data';
import { mapProductToCardData } from '../../utils/mapProduct';
import ProductCard from '../../components/cards/ProductCard';

const brands = ['Tokyo Talkies', 'Roadster', 'Here&Now'];
const prices = ['Rs 500 - Rs 700', 'Rs 700 - Rs 1000'];
const colors = ['Blue', 'Black'];

const ProductListing = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [brandCount, setBrandCount] = useState(2);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));
  };

  const formattedProductData = productData?.map(mapProductToCardData);

  return (
    <>
      <div className='filter-btn-group'>
        <span
          className='filter-btn mobile-filter-btn'
          onClick={() => setIsDrawerOpen(true)}
        >
          Filters <TuneIcon />
        </span>
        <span className='filter-btn' onClick={() => setIsDrawerOpen(true)}>
          Sort by <KeyboardArrowDownIcon />
        </span>
      </div>
      <div className='product-page'>
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <div className='filters-sidebar'>
            <div className='filters-header'>
              <h3>Filters</h3>
              <CloseIcon
                className='close-icon'
                onClick={() => setIsDrawerOpen(false)}
              />
            </div>

            {selectedFilters.length > 0 && (
              <div className='selected-filters'>
                <Box
                  fontSize={14}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <h4>Selected Filters:</h4>{' '}
                  <span
                    style={{ float: 'right' }}
                    className='anchor '
                    onClick={clearFilters}
                  >
                    Clear all
                  </span>
                </Box>
                <Box display={'flex'} gap={1} flexWrap={'wrap'}>
                  {selectedFilters.map((filter) => (
                    <span key={filter} className='filter-tag'>
                      <span
                        onClick={() => removeFilter(filter)}
                        className='filter-close'
                      >
                        <CloseIcon />
                      </span>
                      {filter}
                    </span>
                  ))}
                </Box>
              </div>
            )}
            <div className='filter-group'>
              <h4>Brand</h4>
              {brands.slice(0, brandCount).map((brand) => (
                <label key={brand}>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(brand)}
                    onChange={() => handleFilterChange(brand)}
                  />
                  {brand}
                </label>
              ))}
              {brandCount !== brands.length ? (
                <label
                  onClick={() => setBrandCount(brands.length)}
                  className='add-more anchor'
                >
                  See more +
                </label>
              ) : (
                <label
                  onClick={() => setBrandCount(2)}
                  className='add-more anchor'
                >
                  See less -
                </label>
              )}
            </div>
            <div className='filter-group'>
              <h4>Price</h4>
              {prices.map((price) => (
                <label key={price}>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(price)}
                    onChange={() => handleFilterChange(price)}
                  />
                  {price}
                </label>
              ))}
            </div>
            <div className='filter-group'>
              <h4>Color</h4>
              {colors.map((color) => (
                <label key={color}>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(color)}
                    onChange={() => handleFilterChange(color)}
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>
        </Drawer>

        {/* Sidebar for Desktop */}
        {/* <aside className='filters-sidebar desktop-only'>
            <div className='filters-header'>
              <h3>Filters</h3>
              <span className='anchor' onClick={clearFilters}>
                Clear all
              </span>
            </div>
            {selectedFilters.length > 0 && (
              <div className='selected-filters'>
                <h4>Selected Filters:</h4>
                <Box display={'flex'} gap={1} flexWrap={'wrap'}>
                  {selectedFilters.map((filter) => (
                    <span key={filter} className='filter-tag'>
                      <span
                        onClick={() => removeFilter(filter)}
                        className='filter-close'
                      >
                        <CloseIcon />
                      </span>
                      {filter}
                    </span>
                  ))}
                </Box>
              </div>
            )}
            <div className='filter-group'>
              <h4>Brand</h4>
              {brands.slice(0, brandCount).map((brand) => (
                <label key={brand}>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(brand)}
                    onChange={() => handleFilterChange(brand)}
                  />
                  {brand}
                </label>
              ))}
              {brandCount !== brands.length ? (
                <label
                  onClick={() => setBrandCount(brands.length)}
                  className='add-more anchor'
                >
                  See more +
                </label>
              ) : (
                <label
                  onClick={() => setBrandCount(2)}
                  className='add-more anchor'
                >
                  See less -
                </label>
              )}
            </div>{' '}
            <div className='filter-group'>
              <h4>Price</h4>
              {prices.map((price) => (
                <label key={price}>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(price)}
                    onChange={() => handleFilterChange(price)}
                  />
                  {price}
                </label>
              ))}
            </div>
            <div className='filter-group'>
              <h4>Color</h4>
              {colors.map((color) => (
                <label key={color}>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(color)}
                    onChange={() => handleFilterChange(color)}
                  />
                  {color}
                </label>
              ))}
            </div>
          </aside> */}

        <section className='product-grid'>
          {formattedProductData?.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>
      </div>
    </>
  );
};

export default ProductListing;
