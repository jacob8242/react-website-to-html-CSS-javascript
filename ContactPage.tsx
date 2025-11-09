
import React, { useState } from 'react';
import Accordion from '../components/Accordion';

const faqItems = [
    {
        question: "What are your shipping options?",
        answer: "We offer standard and expedited shipping options. Standard shipping is free for all orders over $50 within the continental US."
    },
    {
        question: "What is your return policy?",
        answer: "We stand by our products. If you're not satisfied, you can return unopened products within 30 days of purchase. Please contact our support team to initiate a return."
    },
    {
        question: "How does the subscription work?",
        answer: "Choose your favorite products, select a delivery frequency (e.g., every 2, 4, or 6 weeks), and we'll handle the rest. You get a 10% discount and can cancel or modify your subscription anytime from your account dashboard."
    },
    {
        question: "Are your coffee beans ethically sourced?",
        answer: "Absolutely. We are committed to ethical sourcing and partner with farms that prioritize sustainable practices and fair wages for their workers."
    }
];

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formState);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-bebas text-6xl md:text-8xl text-gray-800 tracking-wider">Connect With Us</h1>
                    <p className="text-lg text-gray-600 mt-2">Have a question or feedback? We'd love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                        <h2 className="font-bebas text-4xl text-gray-800 tracking-wider mb-6">Send a Message</h2>
                        {isSubmitted ? (
                            <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                                <h3 className="font-bold text-2xl">Thank You!</h3>
                                <p className="mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" required onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" required onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea name="message" id="message" rows={5} required onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gray-800 text-white font-bebas text-2xl tracking-wider py-3 px-6 rounded-md hover:bg-gray-900 transition-colors">
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>

                    {/* FAQ & Contact Info */}
                    <div>
                        <h2 className="font-bebas text-4xl text-gray-800 tracking-wider mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4 mb-8">
                            {faqItems.map((item, index) => (
                                <Accordion key={index} title={item.question}>
                                    <p className="text-gray-600">{item.answer}</p>
                                </Accordion>
                            ))}
                        </div>
                         <h3 className="font-bebas text-3xl text-gray-800 tracking-wider mb-4">Contact Details</h3>
                         <address className="not-italic text-gray-700 space-y-2">
                            <p className="flex items-center gap-3"><i className="ri-map-pin-line text-xl text-gray-500"></i>13791 Oneida Dr, Delray Beach, FL 33410</p>
                            <p className="flex items-center gap-3"><i className="ri-mail-line text-xl text-gray-500"></i><a href="mailto:blackbeltbrews12@gmail.com" className="hover:underline">blackbeltbrews12@gmail.com</a></p>
                            <p className="flex items-center gap-3"><i className="ri-phone-line text-xl text-gray-500"></i><a href="tel:+15619452520" className="hover:underline">(561) 945-2520</a></p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
