import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Importing search icon from react-icons library
import dummyData from './dummydata'; // Importing dummy data here

const ProductCard = ({ name, reviews, price, image }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  const handleBuyNow = () => {
    alert(`You bought ${name} for $${price}`);
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-64 bg-cover" style={{ backgroundImage: `url(${image})` }} />
      <div className="p-4 flex flex-col justify-between">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <div className="flex items-center text-sm text-gray-700">
          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
            <path d="M9 0h3v24H9V0zM0 0h24v24H0V0z" />
          </svg>
          <span>{reviews} reviews</span>
        </div>
        <span className="text-gray-900 font-bold mt-2">${price}</span>
        <div className="flex mt-4">
          <button
            className={`flex-1 bg-blue-500 text-white px-4 py-2 rounded-md ${isAddedToCart ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            onClick={handleAddToCart}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <button
            className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setCurrentPage(1);
  };

  const applyFilter = (product) => {
    if (selectedFilter === 'price-low') {
      return product.price <= 50;
    } else if (selectedFilter === 'price-medium') {
      return product.price > 50 && product.price <= 100;
    } else if (selectedFilter === 'price-high') {
      return product.price > 100;
    } else if (selectedFilter === 'reviews-low') {
      return product.reviews <= 5;
    } else if (selectedFilter === 'reviews-medium') {
      return product.reviews > 5 && product.reviews <= 10;
    } else if (selectedFilter === 'reviews-high') {
      return product.reviews > 10;
    } else {
      return true;
    }
  };

  const filteredProducts = dummyData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) && applyFilter(product)
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-between w-full max-w-lg mx-auto my-4">
        <div className="relative flex items-center w-full max-w-[calc(50%-1rem)]">
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
        </div>
        <div className="relative">
          <label htmlFor="filter" className="sr-only">Filter:</label>
          <select
            id="filter"
            className="px-2 py-2 border border-gray-300 rounded-md"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-medium">Price: Medium</option>
            <option value="price-high">Price: High to Low</option>
            <option value="reviews-low">Reviews: Low to High</option>
            <option value="reviews-medium">Reviews: Medium</option>
            <option value="reviews-high">Reviews: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded-full focus:outline-none ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
