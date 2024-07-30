import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import logo from '../../assets/images/freshcart-logo.svg';

const NavItem = ({ to, children }) => (
  <li className="my-2 md:my-0 md:mx-2">
    <NavLink to={to} className="hover:text-mainColor">
      {children}
    </NavLink>
  </li>
);

const SocialIcon = ({ Icon }) => (
  <i className="mx-2 text-black hover:text-mainColor cursor-pointer">
    <Icon />
  </i>
);

const BurgerMenu = ({ isOpen, toggleMenu }) => (
  <div className="md:hidden">
    <button onClick={toggleMenu} className="text-2xl">
      {isOpen ? <GiCancel /> : <GiHamburgerMenu />}
    </button>
    <ul className={`flex flex-col items-center mt-4 space-y-2 transition-all duration-500 
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
);

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="bg-gray-200 md:fixed top-0 inset-x-0 py-3 text-center capitalize">
      <div className="container flex flex-col md:flex-row justify-between items-center text-gray-500">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/">
            <img src={logo} width={120} alt="Freshcart Logo" />
          </Link>

          <div className="flex items-center space-x-2 md:hidden">
            <SocialIcon Icon={FaFacebook} />
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaLinkedinIn} />
            <SocialIcon Icon={FaYoutube} />
            <SocialIcon Icon={FaInstagram} />
          </div>
        </div>

        <BurgerMenu isOpen={mobileMenu} toggleMenu={toggleMenu} />

        <ul className="hidden md:flex flex-col md:flex-row items-center space-x-2">
          <NavItem to="home">Home</NavItem>
          <NavItem to="cart">Cart</NavItem>
          <NavItem to="products">Products</NavItem>
          <NavItem to="categories">Categories</NavItem>
          <NavItem to="brands">Brands</NavItem>
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          <SocialIcon Icon={FaFacebook} />
          <SocialIcon Icon={FaTwitter} />
          <SocialIcon Icon={FaLinkedinIn} />
          <SocialIcon Icon={FaYoutube} />
          <SocialIcon Icon={FaInstagram} />
        </div>

        <ul className="hidden md:flex flex-col md:flex-row items-center space-x-2">
          <NavItem to="login">Login</NavItem>
          <NavItem to="register">Register</NavItem>
          <li className="my-2 md:my-0 md:mx-2">
            <span className="hover:text-mainColor cursor-pointer">Logout</span>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
