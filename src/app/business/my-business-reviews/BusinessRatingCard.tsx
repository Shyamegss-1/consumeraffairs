import React from "react";

type Props = {};

const BusinessRatingCard = (props: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">My Business Rating</h2>
      <div className="text-center">
        <div className="text-6xl font-bold">0.0</div>
        <div className="text-gray-500">0 Reviews</div>
        <div className="mt-4">
          <ul>
            {[5, 4, 3, 2, 1].map((star) => (
              <li key={star} className="flex items-center justify-between">
                <span>{star}</span>
                <div className="flex-1 h-1 bg-gray-300 ml-2"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessRatingCard;
