
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-800 hover:bg-gray-50 focus:outline-none"
      >
        <span>{title}</span>
        <i className={`ri-arrow-down-s-line transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}></i>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
