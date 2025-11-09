
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full text-center py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-bebas text-9xl text-gray-800 tracking-wider">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mt-2">Page Not Found</h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          Sorry, we couldn't find the page you were looking for. It might have been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-gray-800 text-white font-bebas text-2xl tracking-wider py-3 px-12 rounded-md hover:bg-gray-900 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;