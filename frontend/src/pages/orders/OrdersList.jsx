import React, { useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import {loadStripe} from '@stripe/stripe-js';

const OrdersList = ({ product, open, setOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(product.price); // Initialize total price with the product price

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckout = async () => {
    // Initialize Stripe with your publishable key
    const stripe = await loadStripe('pk_live_51OKApbSA6hMk1QnQZA6vy6KGdFGXxXz5m82tZMJjT15tJY3GZKNwo6Y7stpBqCQ5bgcuVzzOym96WQcMNo6KnB0N00w9t9340R');

    // Call the Stripe checkout session endpoint to create a new checkout session
    const response = await fetch('https://divinedecorbackend.onrender.com/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: product, // Pass the selected product data
        quantity: quantity,
      }),
    });

    const session = await response.json();

    // Redirect to Stripe checkout page
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  const handleContinueShopping = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    console.log('Product removed:', product);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    // Update the total price based on the new quantity
    setTotalPrice(product.price * newQuantity);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Product Details</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <div className="flex">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                          />
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-500">Price: ₹{totalPrice}</p> {/* Display total price */}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange} // Call handleQuantityChange on input change
                            className="appearance-none w-16 px-3 py-1 border border-gray-300 rounded-md text-sm leading-5 text-gray-900 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                          <button
                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                            onClick={handleRemove}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex justify-between items-center">
                      <button
                        type="button"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:text-indigo-500"
                        onClick={handleContinueShopping}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OrdersList;
