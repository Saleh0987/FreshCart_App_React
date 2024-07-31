import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';

const NavItem = ({ to, children }) => (
  <li className="my-2 md:my-0 md:mx-2">
    <NavLink to={to} className="hover:text-mainColor">
      {children}
    </NavLink>
  </li>
);

export default function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <>
    <div className="md:hidden">
    <button onClick={toggleMenu} className="text-1xl text-black">
      {isOpen ? <GiCancel /> : <GiHamburgerMenu />}
    </button>
    <ul className={`flex flex-col items-center mt-2 space-y-2 transition-all duration-500 
      ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
      <NavItem to="home">Home</NavItem>
      <NavItem to="cart">Cart</NavItem>
      <NavItem to="products">Products</NavItem>
      <NavItem to="categories">Categories</NavItem>
      <NavItem to="brands">Brands</NavItem>
      <NavItem to="login">Login</NavItem>
      <NavItem to="register">Register</NavItem>
      <li className="my-2 md:my-0 md:mx-2">
        <span className="hover:text-mainColor cursor-pointer">Logout</span>
      </li>
    </ul>
  </div> 
    </>
  )
}
