import React, { useState } from 'react';
import CartComponent from '../components/Cart/Cart';

const CartPage = () => {

  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>
      <CartComponent/>
    </div>
  );
};

export default CartPage;
