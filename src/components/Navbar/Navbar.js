import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">Your Logo</Link>
        
        <div className="space-x-10 flex items-center font-medium text-2xl mr-10">
          <Link to="/home" className="text-white">Home</Link>
          <Link to="/store" className="text-white">Store</Link>
          <Link to="/cart" className="text-white text-3xl flex items-center"><FaShoppingCart /> <span className="mb-6 text-base font-bold">1</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
