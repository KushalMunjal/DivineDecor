// SearchBar.js
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ products, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filtering products based on search query
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Showing only top 3 results
    const topResults = filteredResults.slice(0, 3);
    setSearchResults(topResults);

    // Passing filtered results to parent component
    onSearch(filteredResults);
  };

  return (
    <div className="relative flex items-center">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <AiOutlineSearch className="text-gray-500" />
      </span>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {/* Dropdown to show similar results */}
      {searchQuery && searchResults.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-md rounded-md border border-gray-300">
          {searchResults.map((result) => (
            <div key={result.id} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <img src={result.image} alt={result.name} className="h-8 w-8 rounded-full mr-2" />
              <span>{result.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
