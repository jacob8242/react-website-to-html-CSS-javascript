
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const subscriptionProducts = products.filter(p => ['coffee', 'k-cups', 'tea'].includes(p.category)).slice(0, 4);

const steps = [
    { icon: 'ri-shopping-cart-2-line', title: 'Choose Your Brews', description: 'Select from our award-winning coffees, teas, and K-Cups.' },
    { icon: 'ri-calendar-2-line', title: 'Set Your Schedule', description: 'Pick how often you want your delivery - every 2, 4, or 6 weeks.' },
    { icon: 'ri-truck-line', title: 'Enjoy & Save', description: 'Get 10% off every order, delivered fresh right to your door.' }
];

const benefits = [
    { icon: 'ri-price-tag-3-line', title: 'Save 10% on Every Order' },
    { icon: 'ri-cup-line', title: 'Never Run Out of Coffee' },
    { icon: 'ri-lock-line', title: 'Cancel or Modify Anytime' },
    { icon: 'ri-rocket-line', title: 'Free Shipping Over $50' },
];

const SubscriptionPage: React.FC = () => {
    return (
        <div className="bg-white">
             {/* Hero Section */}
            <section
                className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url('https://picsum.photos/seed/sub-hero/1600/800')` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="font-bebas text-6xl md:text-8xl tracking-wider leading-none">Never Miss a Morning Kick</h1>
                    <h3 className="text-xl md:text-2xl text-amber-300 mt-4">
                        Subscribe to Black Belt Brews and save 10% on every order.
                    </h3>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="font-bebas text-5xl text-gray-800 tracking-wider mb-10">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map(step => (
                            <div key={step.title} className="p-6">
                                <i className={`${step.icon} text-5xl text-gray-800`}></i>
                                <h3 className="font-bebas text-3xl tracking-wider text-gray-900 mt-4 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
             <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="font-bebas text-5xl text-gray-800 tracking-wider mb-12">Subscription Perks</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {benefits.map(benefit => (
                            <div key={benefit.title} className="flex flex-col items-center p-4">
                                <i className={`${benefit.icon} text-4xl text-white bg-gray-800 p-5 rounded-full mb-4`}></i>
                                <h3 className="font-bold text-gray-800 text-lg text-center">{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Featured Subscription Products */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="font-bebas text-5xl text-center text-gray-800 tracking-wider mb-10">Popular Subscription Choices</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {subscriptionProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                         <Link
                            to="/shop"
                            className="inline-block bg-gray-800 text-white font-bebas text-2xl tracking-wider py-3 px-12 rounded-md hover:bg-gray-900 transition-colors"
                        >
                            Explore All Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubscriptionPage;
