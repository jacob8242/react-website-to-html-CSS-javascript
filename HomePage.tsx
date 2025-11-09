
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 4);

const brandFeatures = [
    { icon: 'ri-fire-fill', text: '100% Roasted Coffee' },
    { icon: 'ri-earth-fill', text: 'Sustainably Sourced' },
    { icon: 'ri-medal-fill', text: 'Dedicated to Quality' },
    { icon: 'ri-award-fill', text: 'Certified Quality' },
    { icon: 'ri-leaf-fill', text: 'Organic Coffee' },
    { icon: 'ri-archive-fill', text: 'Subscribe & Save' },
];

const HomePage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center text-white"
                style={{ backgroundImage: `url('https://picsum.photos/seed/hero-banner/1600/900')` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="font-bebas text-6xl md:text-8xl tracking-wider leading-none">Kickstart Your Day</h1>
                        <h3 className="text-xl md:text-2xl text-amber-300 mt-4">
                            With 100% organic roasted coffee, derived from safe plant-based sources.
                        </h3>
                        <Link
                            to="/shop"
                            className="mt-8 inline-block bg-transparent text-white font-bebas text-2xl tracking-wider py-3 px-10 rounded-md border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Items Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="font-bebas text-5xl text-center text-gray-800 tracking-wider mb-10">Featured Items</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Values Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="font-bebas text-4xl md:text-5xl text-gray-800 tracking-wider">Crafted with Dedication.</h2>
                    <h2 className="font-bebas text-4xl md:text-5xl text-gray-800 tracking-wider">Brewed with Purpose.</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
                        {brandFeatures.map(feature => (
                            <div key={feature.text} className="flex flex-col items-center">
                                <i className={`${feature.icon} text-4xl text-white bg-gray-800 p-5 rounded-full`}></i>
                                <span className="font-bebas text-xl tracking-wider mt-4 text-gray-700">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-2xl mx-auto text-center bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
                        <h2 className="font-bebas text-5xl text-gray-800 tracking-wider">Your Journey Starts Here</h2>
                        <p className="text-gray-600 mt-4 mb-8">
                            Stay in the loop with our latest updates, exclusive content, and special offers. Join our community and never miss a thing.
                        </p>
                        {subscribed ? (
                             <p className="text-green-600 font-bold text-lg">Thank you for subscribing!</p>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="flex-grow p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-800 text-white font-bebas text-xl tracking-wider py-3 px-8 rounded-md hover:bg-gray-900 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
