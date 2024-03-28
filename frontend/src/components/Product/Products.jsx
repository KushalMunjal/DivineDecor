import React from 'react';
import dummyData from './dummydata'; 

const ProductCard = ({ name, reviews, price, image }) => {
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
      </div>
    </div>
  )
}

export default ProductCard