
import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { Product, ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const shopProducts = products.filter(p => p.category === 'coffee' || p.category === 'k-cups' || p.category === 'tea');

const CATEGORIES: { id: ProductCategory | 'all'; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'k-cups', name: 'K-Cups' },
    { id: 'tea', name: 'Tea' },
];

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [sortOrder, setSortOrder] = useState('availability');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = shopProducts.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sortOrder) {
      case 'price-low':
        filtered.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'availability':
      default:
        // Default sort might be by popularity or featured, here we just use rating
        filtered.sort((a,b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [searchTerm, activeCategory, sortOrder]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
       <div 
        className="h-64 md:h-80 rounded-2xl bg-cover bg-center flex items-center justify-center text-white mb-8 shadow-lg"
        style={{ backgroundImage: `url('https://picsum.photos/seed/shop-banner/1200/400')` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wider">Subscribe & Save</h1>
            <h3 className="text-xl md:text-2xl text-amber-300 mt-2">Up to 20% off coffee bags & K-Cups</h3>
            <Link to="/subscriptions" className="mt-6 inline-block bg-transparent text-white font-bebas text-2xl tracking-wider py-2 px-8 rounded-md border-2 border-white hover:bg-white hover:text-black transition-colors">
                Subscribe Now
            </Link>
        </div>
      </div>

      <h2 className="font-bebas text-5xl md:text-6xl text-gray-800 tracking-wider text-center md:text-left">Shop Coffee & Tea</h2>

      <div className="my-8 p-4 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          <label htmlFor="sort-select" className="font-bold uppercase text-sm tracking-wider">Sort By:</label>
          <select 
            id="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-white text-gray-800 font-bebas text-lg tracking-wider p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="availability">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          <label htmlFor="search-input" className="font-bold uppercase text-sm tracking-wider">Search:</label>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="bg-white text-gray-800 font-bebas text-lg tracking-wider p-2 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="font-bold uppercase text-sm tracking-wider mr-2 text-gray-600">Filter By:</span>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`font-bebas text-lg tracking-wider py-2 px-6 rounded-md transition-colors duration-300 ${activeCategory === cat.id ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <p className="text-gray-600 mb-6">{`Showing ${filteredAndSortedProducts.length} products`}</p>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-gray-700">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
