// ProductCard.js

import React from 'react';

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img src={image} alt={name} className="w-full h-48 object-cover object-center" />

      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">T-shirt</h2>
        <p className="mt-2 text-gray-600">$1000</p>
      </div>

      <div className="flex justify-end p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

