
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';
import StarRating from '../components/StarRating';
import QuantitySelector from '../components/QuantitySelector';

const ProductDetailPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    
    const product = useMemo(() => products.find(p => p.id === productId), [productId]);

    const [quantity, setQuantity] = useState(1);
    const [paymentOption, setPaymentOption] = useState<'one-time' | 'subscribe'>('one-time');
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
    const [currentImage, setCurrentImage] = useState(product?.productImage);
    const [cartMessage, setCartMessage] = useState('ADD TO CART');
    
    useEffect(() => {
        if (product) {
            setCurrentImage(product.productImage);
            const initialOptions: Record<string, string> = {};
            product.options.forEach(opt => {
                if(opt.values.length > 0) {
                    initialOptions[opt.label] = opt.values[0];
                }
            });
            setSelectedOptions(initialOptions);
        }
    }, [product]);


    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="font-bebas text-5xl text-gray-800">Product Not Found</h1>
                <p className="text-gray-600 mt-4">We couldn't find the product you're looking for.</p>
                <Link to="/" className="mt-8 inline-block bg-gray-800 text-white font-bebas text-xl tracking-wider py-3 px-8 rounded-md hover:bg-gray-900 transition-colors">
                    Back to Shop
                </Link>
            </div>
        );
    }
    
    const handleAddToCart = () => {
        setCartMessage('Added!');
        setTimeout(() => {
            setCartMessage('ADD TO CART');
        }, 2000);
    };
    
    const subscriptionPrice = `$${(product.priceValue * 0.9).toFixed(2)} USD`;
    const thumbnails = [product.productImage, product.thumbnail1, product.thumbnail2].filter(Boolean);

    return (
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Image Section */}
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-2xl w-full aspect-square flex items-center justify-center p-4 shadow-lg overflow-hidden">
                        <img 
                            src={currentImage} 
                            alt={product.name} 
                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                            key={currentImage}
                        />
                    </div>
                    {thumbnails.length > 1 && (
                        <div className="flex gap-4 mt-6">
                            {thumbnails.map((thumb, index) => (
                                <button key={index} onClick={() => setCurrentImage(thumb)} className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all ${currentImage === thumb ? 'border-gray-800 scale-105' : 'border-transparent hover:border-gray-400'}`}>
                                    <img src={thumb} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                                </button>
                            ))}
                        </div>
                    )}
                     <p className="text-gray-600 text-base leading-relaxed mt-8 self-start">{product.description}</p>
                </div>

                {/* Details Section */}
                <div className="flex flex-col gap-4">
                    <nav className="text-sm text-gray-500">
                        <Link to="/" className="hover:underline">Home</Link> / <span className="capitalize">{product.category}</span>
                    </nav>
                    <h1 className="font-bebas text-4xl md:text-5xl text-gray-900 tracking-wider">{product.name}</h1>
                    <p className="text-gray-600 text-lg -mt-2">{product.subtitle}</p>
                    <div className="flex items-center gap-2">
                        <StarRating rating={product.rating} />
                        <span className="text-gray-500 text-sm">{product.reviewCount}</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{product.price}</p>
                    
                    <div className="flex flex-wrap gap-2">
                        {product.notes.map(note => (
                            <span key={note} className="bg-gray-200 text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded-full">{note}</span>
                        ))}
                    </div>

                    {/* Options */}
                    {product.options.map(option => (
                        <div key={option.label}>
                            <p className="font-bebas text-xl tracking-wider text-gray-800 mb-2">{option.label}</p>
                            <div className="flex flex-wrap gap-2">
                                {option.values.map(value => (
                                    <button 
                                      key={value}
                                      onClick={() => setSelectedOptions(prev => ({ ...prev, [option.label]: value }))}
                                      className={`font-bebas text-md tracking-wider py-2 px-5 rounded-full border-2 transition-colors ${selectedOptions[option.label] === value ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Payment Options */}
                    <div className="space-y-3 mt-4">
                        <p className="font-bebas text-xl tracking-wider text-gray-800">Purchase Type</p>
                        <button onClick={() => setPaymentOption('one-time')} className={`w-full text-left p-4 rounded-lg border-2 flex justify-between items-center transition-all ${paymentOption === 'one-time' ? 'border-gray-800 bg-gray-100' : 'border-gray-300'}`}>
                            <div>
                                <span className="font-bebas text-lg tracking-wider">One Time Purchase</span>
                            </div>
                            <span className="font-bold text-lg">{product.price}</span>
                        </button>
                         <button onClick={() => setPaymentOption('subscribe')} className={`w-full text-left p-4 rounded-lg border-2 flex justify-between items-center transition-all ${paymentOption === 'subscribe' ? 'border-gray-800 bg-gray-100' : 'border-gray-300'}`}>
                            <div>
                                <span className="font-bebas text-lg tracking-wider">Subscribe & Save 10%</span>
                                <p className="text-xs text-gray-500">Cancel anytime. Ships fresh to your door.</p>
                            </div>
                            <span className="font-bold text-lg">{subscriptionPrice}</span>
                        </button>
                    </div>


                    {/* Quantity & Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                         <button onClick={handleAddToCart} className="w-full sm:w-auto flex-grow bg-gray-800 text-white font-bebas text-2xl tracking-wider py-3 px-6 rounded-full hover:bg-gray-900 transition-colors disabled:opacity-70">
                            {cartMessage}
                        </button>
                    </div>

                    {/* Meta */}
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="text-center md:text-left">
                            <span className="text-xs text-gray-500 uppercase font-bold">Origin</span>
                            <p className="font-semibold text-gray-800">{product.origin}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <span className="text-xs text-gray-500 uppercase font-bold">Type</span>
                            <p className="font-semibold text-gray-800">{product.type}</p>
                        </div>
                         <div className="text-center md:text-left col-span-2 md:col-span-1">
                            <span className="text-xs text-gray-500 uppercase font-bold">Category</span>
                            <p className="font-semibold text-gray-800 capitalize">{product.category}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
