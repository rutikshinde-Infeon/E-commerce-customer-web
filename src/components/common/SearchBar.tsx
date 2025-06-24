import React, { useState } from 'react';
import { 
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search Here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: searchQuery && (
            <InputAdornment position="start">
              <IconButton
                edge="start"
                size="small"
                onClick={handleClear}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                size="small"
                type="submit"
              >
                <SearchIcon color="action" />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            backgroundColor: '#f5f5f5', // Grey background
            borderRadius: 2,
            minWidth: 300,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove border on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove border when focused
            }
          }
        }}
      />
    </form>
  );
};

export default SearchBar;