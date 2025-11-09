
import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, setQuantity }) => {
  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(1);
    }
  };

  return (
    <div className="inline-flex items-center border-2 border-gray-800 rounded-full overflow-hidden">
      <button
        type="button"
        onClick={handleDecrement}
        className="px-4 py-2 text-xl font-bold transition-colors hover:bg-gray-100"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="1"
        className="w-12 text-center text-lg font-semibold bg-transparent border-none focus:outline-none"
        aria-label="Quantity"
      />
      <button
        type="button"
        onClick={handleIncrement}
        className="px-4 py-2 text-xl font-bold transition-colors hover:bg-gray-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
