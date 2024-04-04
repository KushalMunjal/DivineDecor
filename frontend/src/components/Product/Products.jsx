import React, { useState } from 'react';
import dummyData from './dummydata'; // Importing dummy data here

const ProductCard = ({ name, reviews, price, image }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // Here you can implement logic to add the product to the cart
    // For now, just toggle the state to simulate adding to cart
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-64 bg-cover" style={{ backgroundImage: `url(${image})` }} />
      <div className="p-4 flex flex-col justify-between">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <div className="flex items-center text-sm text-gray-700">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-1"
          >
            <path d="M9 0h3v24H9V0zM0 0h24v24H0V0z" />
          </svg>
          <span>{reviews} reviews</span>
        </div>
        <span className="text-gray-900 font-bold mt-2">${price}</span>
        <button
          className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded-md ${isAddedToCart ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          onClick={handleAddToCart}
          disabled={isAddedToCart}
        >
          {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-5 gap-4">
        {dummyData.map((product, index) => (
          <ProductCard key={index} {...product} /> // Removed the Link and used ProductCard directly
        ))}
      </div>
    </div>
  );
};

export default ProductList;
