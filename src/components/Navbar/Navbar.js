import React from 'react';
import { NavLink} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useProductContext } from '../../context/ProductContext';

const Navbar = () => {

    const {state} = useProductContext()
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/home" className="text-white text-xl font-semibold">Your Logo</NavLink>
        
        <div className="space-x-10 flex items-center font-medium text-2xl mr-10">
          <NavLink to="/home" className="text-white">Home</NavLink>
          <NavLink to="/store" className="text-white">Store</NavLink>
          <NavLink to="/about" className="text-white">About</NavLink>
          <NavLink to="/cart" className="text-white text-3xl flex items-center"><FaShoppingCart /> <span className="mb-6 text-base font-bold">{state.cart.length}</span></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
