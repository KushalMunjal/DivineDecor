import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dummyData from './dummydata'; // Importing dummy data here

const SingleProduct = () => {
  const { id } = useParams(); // Extracting product ID from URL params
  const [product, setProduct] = useState(null);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showShippingDetails, setShowShippingDetails] = useState(false);

  useEffect(() => {
    // Convert the id parameter to a number
    const productId = parseInt(id);

    // Fetch product details based on the ID
    const fetchedProduct = dummyData.find(product => product.id === productId);
    setProduct(fetchedProduct);
  }, [id]);

  // If product is still loading, display a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

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
          {/* Features Dropdown */}
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowFeatures(!showFeatures)}>
              <h3 className="text-lg font-semibold text-gray-900">Features</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${showFeatures ? 'transform rotate-180' : ''}`}>
                <path fill="currentColor" d="M17.293 7.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L12 10.586l5.293-5.293a1 1 0 011.414 0z"></path>
              </svg>
            </div>
            {showFeatures && (
              <div className="text-sm text-gray-700 ml-6">
                {/* Render features here */}
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  {/* Add more features as needed */}
                </ul>
              </div>
            )}
          </div>
          {/* Shipping Details Dropdown */}
          <div className="mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowShippingDetails(!showShippingDetails)}>
              <h3 className="text-lg font-semibold text-gray-900">Shipping Details</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${showShippingDetails ? 'transform rotate-180' : ''}`}>
                <path fill="currentColor" d="M17.293 7.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L12 10.586l5.293-5.293a1 1 0 011.414 0z"></path>
              </svg>
            </div>
            {showShippingDetails && (
              <div className="text-sm text-gray-700 ml-6">
                {/* Render shipping details here */}
                <p>Shipping Information:</p>
                <p>Estimated delivery time: 3-5 business days</p>
                <p>Shipping cost: Free</p>
                {/* Add more shipping details as needed */}
              </div>
            )}
          </div>
          {/* Buttons */}
          <div className="flex">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">Add to Cart</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
