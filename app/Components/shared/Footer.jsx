import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%] pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        {/* Column 1: Exclusive & Subscribe */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wide">Exclusive</h2>
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

        {/* Column 5: Download App & Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Download App</h3>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Save $3 with App New User Only
          </p>

          {/* QR Code and App Links Row */}
          <div className="flex items-center gap-3">
            {/* QR Code Placeholder */}
            <div className="bg-white p-1 rounded w-20 h-20 flex items-center justify-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ExclusiveApp"
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8 border border-gray-600 rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-8 border border-gray-600 rounded"
                />
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4 text-white"></div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full border-t border-zinc-900 py-6 text-center text-sm text-zinc-600 font-light">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
