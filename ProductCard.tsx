
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.productImage} 
            alt={product.name} 
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6 text-center flex flex-col flex-grow">
        <StarRating rating={product.rating} />
        <h3 className="font-bebas text-2xl text-gray-800 tracking-wide mt-2">
          <Link to={`/product/${product.id}`} className="hover:text-gray-900">{product.name}</Link>
        </h3>
        <p className="text-gray-500 text-sm mt-1 mb-3 flex-grow">{product.subtitle}</p>
        <p className="font-bold text-xl text-gray-900 my-2">{product.price}</p>
        <button className="w-full mt-auto bg-gray-800 text-white font-bebas text-xl tracking-wider py-3 px-4 rounded-md hover:bg-gray-900 transition-colors duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
