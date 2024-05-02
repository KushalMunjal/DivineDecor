// SingleProduct.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dummyData from './dummydata'; // Importing dummy data here

const SingleProduct = () => {
  const { id } = useParams(); // Extracting product ID from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID
    const fetchedProduct = dummyData.find(product => product.id === id);
    setProduct(fetchedProduct);
  }, [id]);

  // If product is still loading, display a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center">
        <div className="max-w-lg">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-700 mb-2">Reviews: {product.reviews}</p>
          {/* Add more details as needed */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
