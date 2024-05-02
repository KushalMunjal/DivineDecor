// SingleProduct.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import OrdersList from '../../pages/orders/OrdersList'; // Import OrdersList component
import dummyData from './dummydata'; // Importing dummy data here

const SingleProduct = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook
  const [showOrdersList, setShowOrdersList] = useState(false); // State to toggle showing OrdersList

  // Dummy product data
  const product = dummyData[0]; // Assume the first product in dummy data

  // Function to handle "Buy Now" button click
  const handleBuyNow = () => {
    // Set the state to show OrdersList component
    setShowOrdersList(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 md:pl-4">
          <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
          <div className="flex items-center text-sm text-gray-700 mb-4">
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
              <path d="M9 0h3v24H9V0zM0 0h24v24H0V0z" />
            </svg>
            <span>{product.reviews} reviews</span>
          </div>
          {/* Buttons */}
          <div className="flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">Add to Cart</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
      {/* If showOrdersList is true, render OrdersList component */}
      {showOrdersList && <OrdersList product={product} setShowOrdersList={setShowOrdersList} />}
    </div>
  );
};

export default SingleProduct;
