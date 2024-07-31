import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/freshcart-logo.svg';
import MobileMenu from '../MobileMenu/MobileMenu';


const NavItem = ({ to, children }) => (
  <li className="my-2 md:my-0 md:mx-2">
    <NavLink to={to} className="hover:text-mainColo">
      {children}
    </NavLink>
  </li>
);

const SocialIcon = ({ Icon }) => (
  <i className="mx-2 text-black hover:text-mainColor cursor-pointer">
    <Icon />
  </i>
);


export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="bg-gray-200 pt-3 md:fixed top-0 inset-x-0 md:py-3 text-center capitalize">
      <div className="container mx-auto flex flex-col md:flex-row gap-2 justify-between items-center text-gray-500">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/">
            <img src={logo} width={120} alt="Freshcart_Logo" />
          </Link>

          <div className="flex items-center md:hidden">
            <SocialIcon Icon={FaFacebook} />
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaLinkedinIn} />
            <SocialIcon Icon={FaYoutube} />
            <SocialIcon Icon={FaInstagram} />
          </div>
        </div>

        <MobileMenu isOpen={mobileMenu} toggleMenu={toggleMenu} />

        <ul className="hidden md:flex flex-col md:flex-row items-center space-x-2">
          <NavItem to="home">Home</NavItem>
          <NavItem to="cart">Cart</NavItem>
          <NavItem to="products">Products</NavItem>
          <NavItem to="categories">Categories</NavItem>
          <NavItem to="brands">Brands</NavItem>
        </ul>

        <div className="hidden md:flex items-center">
          <SocialIcon Icon={FaFacebook} />
          <SocialIcon Icon={FaTwitter} />
          <SocialIcon Icon={FaLinkedinIn} />
          <SocialIcon Icon={FaYoutube} />
          <SocialIcon Icon={FaInstagram} />

        <ul className="hidden md:flex flex-col md:flex-row items-center space-x-2">
          <NavItem to="login">Login</NavItem>
          <NavItem to="">Register</NavItem>
          <li className="my-2 md:my-0 md:mx-2">
            <span className="hover:text-mainColor cursor-pointer">Logout</span>
          </li>
        </ul>
        </div>
        
      </div>
    </nav>
  );
}
