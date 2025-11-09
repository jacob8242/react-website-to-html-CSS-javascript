
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="font-bebas text-4xl tracking-wider mb-2">Black Belt Brews</h2>
                        <p className="text-gray-400 text-sm">Brew like a master. Focus like a fighter.</p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-gray-300 hover:text-white"><i className="ri-facebook-fill text-xl"></i></a>
                            <a href="#" className="text-gray-300 hover:text-white"><i className="ri-instagram-fill text-xl"></i></a>
                            <a href="#" className="text-gray-300 hover:text-white"><i className="ri-twitter-x-fill text-xl"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bebas text-2xl tracking-wider mb-4">SHOP</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/shop" className="hover:text-white">Ground Coffee</Link></li>
                            <li><Link to="/shop" className="hover:text-white">K-Cups</Link></li>
                            <li><Link to="/shop" className="hover:text-white">Tea</Link></li>
                            <li><Link to="/merch" className="hover:text-white">Merch</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bebas text-2xl tracking-wider mb-4">LINKS</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Connect</Link></li>
                            <li><Link to="/about" className="hover:text-white">Our Mission</Link></li>
                            <li><Link to="/subscriptions" className="hover:text-white">Subscriptions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bebas text-2xl tracking-wider mb-4">CONTACT</h3>
                        <address className="not-italic text-gray-300 space-y-2">
                            <p>13791 Oneida Dr, Delray Beach, FL 33410</p>
                            <p><a href="mailto:blackbeltbrews12@gmail.com" className="hover:text-white">blackbeltbrews12@gmail.com</a></p>
                            <p><a href="tel:+15619452520" className="hover:text-white">(561) 945-2520</a></p>
                        </address>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Black Belt Brews Co. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;