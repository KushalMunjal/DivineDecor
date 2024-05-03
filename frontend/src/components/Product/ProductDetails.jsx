import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://divinedecorbackend.onrender.com/api/products/${id}`);
        setProduct(response.data); // Set product data
        setLoading(false); // Update loading status
      } catch (error) {
        console.error('Error fetching product:', error.message);
        setLoading(false); // Update loading status in case of error
      }
    };

    fetchProduct();
  }, [id]); // Fetch product data when ID changes

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  if (!product) {
    return <div>Product not found</div>; // Render message if product data is not available
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 md:pl-4">
          <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
          <p className="text-gray-700 mt-2">{product.category}</p>
          <p className="text-gray-700 mt-2">Price: ₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
