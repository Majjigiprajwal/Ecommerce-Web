// ProductCard.js

import React from 'react';
import { useProductContext } from '../../context/ProductContext';

const ProductCard = ({product}) => {
    const {addToCart} = useProductContext()
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover object-center" />

      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">{product.name}</h2>
        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>

      <div className="flex justify-end p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700" onClick={()=>addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

