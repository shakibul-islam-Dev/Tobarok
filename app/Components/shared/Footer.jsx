import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%] pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        {/* Column 1: Exclusive & Subscribe */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wide">Tobarok</h2>
          <h3 className="text-xl font-medium">Subscribe</h3>
          <p className="text-sm text-gray-300 font-light">
            Get 10% off your first order
          </p>

          {/* Email Input Box */}
          <div className="flex items-center border border-white rounded px-4 py-2 mt-2 max-w-[240px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm text-gray-400 outline-none w-full placeholder-gray-500 font-light"
            />
            <button className="text-white hover:text-gray-300 transition-colors"></button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Support</h3>
          <p className="text-sm text-gray-300 leading-6 max-w-[200px] font-light">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm text-gray-300 font-light break-words">
            exclusive@gmail.com
          </p>
          <p className="text-sm text-gray-300 font-light">+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Account</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300 font-light">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Quick Link</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300 font-light">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full border-t border-zinc-900 py-6 text-center text-sm text-zinc-600 font-light">
        <p>&copy; Copyright Tobarok 2026. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
