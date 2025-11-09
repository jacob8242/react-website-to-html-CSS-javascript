
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <div className="bg-gray-800 text-white text-xs md:text-sm font-bold p-2 flex justify-between items-center px-4 md:px-8">
        <div className="flex-1"></div>
        <div className="text-center">
          Free shipping on orders over $50
        </div>
        <div className="flex-1 flex justify-end items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300"><i className="ri-facebook-fill text-lg"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300"><i className="ri-instagram-fill text-lg"></i></a>
        </div>
      </div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-2 grid grid-cols-3 items-center">
          <div className="flex justify-start">
             <Link to="/" className="flex items-center gap-2">
                <img src="https://picsum.photos/seed/logo/100/100" alt="Black Belt Brews Logo" className="h-16 w-16 md:h-20 md:w-20" />
             </Link>
          </div>
          <nav className="hidden md:flex justify-center items-center gap-4 font-bebas text-2xl tracking-wider">
            <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-black">Shop</Link>
            <Link to="/merch" className="text-gray-700 hover:text-black">Merch</Link>
            <Link to="/subscriptions" className="text-gray-700 hover:text-black">Subscriptions</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">Our Story</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">Connect</Link>
          </nav>
          <div className="flex justify-end items-center gap-4">
            <button aria-label="Search" className="text-gray-700 hover:text-black"><i className="ri-search-line text-2xl"></i></button>
            <button aria-label="User Account" className="text-gray-700 hover:text-black"><i className="ri-user-line text-2xl"></i></button>
            <Link to="/cart" aria-label="Shopping Bag" className="text-gray-700 hover:text-black relative">
              <i className="ri-shopping-bag-line text-2xl"></i>
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans font-bold">0</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;