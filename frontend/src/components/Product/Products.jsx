import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from "../Category/Category";
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://divinedecorbackend.onrender.com/api/products/all');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setCurrentPage(1);
  };

  const applyFilter = (product) => {
    switch (selectedFilter) {
      case 'price-low':
        return product.price <= 50;
      case 'price-medium':
        return product.price > 50 && product.price <= 100;
      case 'price-high':
        return product.price > 100;
      default:
        return true;
    }
  };

  const filteredProducts = products.filter((product) =>
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
        </div>
        <div className="relative">
          <label htmlFor="filter" className="sr-only">Filter:</label>
          {/* Filter select */}
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
          </select>
        </div>
      </div>
      {/* Category component */}
      <Category />
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentProducts.map((product, index) => (
          <div key={index} className="flex flex-col rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
            {/* Product image */}
            <div className="w-full h-64 bg-cover" style={{ backgroundImage: `url(${product.imageUrl})` }} />
            <div className="p-4 flex flex-col justify-between">
              {/* Product name */}
              <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
              <div className="flex items-center text-sm text-gray-700">
                {/* Product reviews */}
                <span>{product.reviews} reviews</span>
              </div>
              {/* Product price */}
              <span className="text-gray-900 font-bold mt-2">₹{product.price}</span>
              <div className="flex mt-4">
                {/* View details button */}
                <Link
                  to={`/products/${product.productId}`}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-700">
          Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results
        </p>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded-full focus:outline-none ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              style={{ marginRight: '5px' }} // Added spacing
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
