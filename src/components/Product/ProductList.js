import React from 'react';
import ProductCard from '../Card/ProductCard';
import { useProductContext } from '../../context/ProductContext';

const ProductList = ({ products }) => {

    const {state} = useProductContext()
    console.log(state.cart)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
         product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
