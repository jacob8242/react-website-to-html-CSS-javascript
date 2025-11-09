
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  // This is a placeholder for cart state. In a real app, this would come from a global state management solution.
  const cartItems: any[] = [];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h1 className="font-bebas text-5xl md:text-7xl text-gray-800 tracking-wider text-center mb-8">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-gray-100 rounded-2xl">
          <i className="ri-shopping-cart-line text-6xl text-gray-400"></i>
          <h2 className="text-3xl font-bold text-gray-700 mt-4">Your cart is currently empty</h2>
          <p className="text-gray-500 mt-2 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gray-800 text-white font-bebas text-2xl tracking-wider py-3 px-12 rounded-md hover:bg-gray-900 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          {/* Cart items will be rendered here in the future */}
        </div>
      )}
    </div>
  );
};

export default CartPage;