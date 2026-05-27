import React from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-[10%] py-4 flex items-center justify-between font-sans">
      {/* Brand Logo */}
      <a href="#" className="text-2xl font-bold text-black tracking-wide">
        Exclusive
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-12 text-base text-black">
        <li>
          <a
            href="#"
            className="relative font-normal pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:height-[2px] after:bg-black"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">
            Sign Up
          </a>
        </li>
      </ul>

      {/* Right Side Actions (Search & Icons) */}
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        <div className="flex items-center bg-[#f5f5f5] px-3 py-2 rounded-md w-48 lg:w-64">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
          />
          <Search className="w-5 h-5 text-black cursor-pointer ml-2" />
        </div>

        {/* Wishlist Icon */}
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors"
        >
          <Heart className="w-6 h-6" />
        </a>

        {/* Cart Icon with Badge */}
        <a
          href="#"
          className="text-black relative hover:text-gray-600 transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-[#db4444] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </a>

        {/* Profile Icon */}
        <a
          href="#"
          className="bg-[#db4444] text-white p-2 rounded-full hover:bg-red-600 transition-colors"
        >
          <User className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
