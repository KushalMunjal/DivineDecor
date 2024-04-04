import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartIcon = ({ itemCount }) => {
  return (
    <div className="relative">
      <ShoppingCartIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
