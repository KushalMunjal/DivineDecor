import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <span className="text-gray-700 font-bold">${product.price}</span>
        </div>
        <div className="mt-4">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="mt-4">
          <p className="text-gray-700">{product.description}</p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
