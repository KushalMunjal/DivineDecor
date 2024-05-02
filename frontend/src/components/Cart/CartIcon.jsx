import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const [cartCount, setCartCount] = useState(0); // State to hold the count of items in the cart

  // Function to add an item to the cart
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex items-center">
      <button onClick={addToCart} className="text-white mr-4">
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        {/* Display cart count if it's greater than 0 */}
        {cartCount > 0 && <span className="bg-blue-500 text-white rounded-full px-2 py-1 ml-1">{cartCount}</span>}
      </button>
    </div>
  );
};

export default Cart;
