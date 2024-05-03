import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={product.imageUrl} alt={product.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
            <h2 className="mt-2 text-gray-900 text-2xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-600">${product.price}</p>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Payment Options</h3>
          <div className="grid grid-cols-1 gap-4">
            {/* Payment options go here */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-gray-800 font-semibold">Credit Card</h4>
              {/* Credit card form fields */}
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-gray-800 font-semibold">PayPal</h4>
              {/* PayPal checkout button */}
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-gray-800 font-semibold">Stripe</h4>
              {/* Stripe checkout button */}
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${product.price}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">Tax:</span>
              <span className="font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold">${product.price}</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          {/* Proceed to checkout button */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
