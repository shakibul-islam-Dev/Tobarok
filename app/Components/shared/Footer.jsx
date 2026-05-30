"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SendHorizontal } from "lucide-react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  if (!mounted) {
    return <footer className="w-full bg-black h-40" />;
  }

  return (
    <footer className="w-full bg-black text-white font-sans border-t border-zinc-900">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[5%] pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        {/* Column 1: Exclusive & Subscribe */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wide text-neutral-50">
            Tobarok
          </h2>
          <h3 className="text-lg font-medium text-neutral-200">Subscribe</h3>
          <p className="text-sm text-gray-400 font-light">
            Get 10% off your first order
          </p>

          {/* Email Input Box */}
          <form
            onSubmit={handleSubscribe}
            className="flex items-center border border-zinc-700 focus-within:border-violet-500 rounded px-3 py-2 mt-1 w-full max-w-[240px] transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="bg-transparent text-sm text-neutral-200 outline-none w-full placeholder-zinc-500 font-light"
            />
            <button
              type="submit"
              className="text-zinc-400 hover:text-white transition-colors pl-2"
              aria-label="Subscribe"
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-neutral-200">Support</h3>
          <p className="text-sm text-gray-400 leading-6 font-light max-w-[200px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <a
            href="mailto:exclusive@gmail.com"
            className="text-sm text-gray-400 font-light hover:text-violet-400 transition-colors break-all"
          >
            exclusive@gmail.com
          </a>
          <a
            href="tel:+8801588888999"
            className="text-sm text-gray-400 font-light hover:text-violet-400 transition-colors"
          >
            +88015-88888-9999
          </a>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-neutral-200">Account</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400 font-light">
            <li>
              <Link
                href="/account"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Login / Register
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium text-neutral-200">Quick Link</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400 font-light">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-violet-400 hover:underline transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full border-t border-zinc-900 py-6 text-center text-xs sm:text-sm text-zinc-500 font-light">
        <p>&copy; {new Date().getFullYear()} Tobarok. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
