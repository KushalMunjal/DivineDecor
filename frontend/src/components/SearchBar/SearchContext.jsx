// SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query, results) => {
    setSearchQuery(query);
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
