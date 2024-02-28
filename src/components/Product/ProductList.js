import React from 'react';
import ProductCard from '../Card/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={Date.now()}
          name={product.title}
          image={product.imageUrl}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
