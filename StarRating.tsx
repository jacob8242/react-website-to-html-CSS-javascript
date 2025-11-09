
import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const isFilled = i < Math.round(rating);
    return (
      <svg
        key={i}
        className={`w-5 h-5 ${isFilled ? 'text-black' : 'text-gray-300'}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  });

  return <div className="flex justify-center items-center gap-0.5">{stars}</div>;
};

export default StarRating;
