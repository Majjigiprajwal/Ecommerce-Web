import React from 'react'
import Cart from './Cart'

const Header = () => {
  return (
    <div className='w-full h-16 bg-white flex items-center justify-between p-6'>
      <ul className="text-black flex  list-none gap-10 text-2xl font-serif font-medium">
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
      </ul>
      <Cart />
    </div>
  )
}

export default Header

