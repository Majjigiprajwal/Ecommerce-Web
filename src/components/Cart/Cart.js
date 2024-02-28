import React from 'react';

const cartItems = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

const Cart = () => {
  return (
    <div className="container mx-auto mt-8 pl-10 pr-10">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={Date.now()} className="flex items-center justify-between border-b py-2">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.title} className="h-16 w-16 object-cover mr-4" />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-lg font-semibold">${item.price}</p>
                <p className="text-gray-600 ml-4">Quantity: {item.quantity}</p>
                <button
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
