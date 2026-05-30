"use client";

import React, { useState, useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: "$14.99",
      originalPrice: "$20.99",
      image:
        "https://images.unsplash.com/photo-1628773822503-930a85890060?q=80&w=200&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: "$45.00",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=200&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 3,
      name: "Fresh Sujapuri Mango",
      price: "$09.00",
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=200&auto=format&fit=crop",
      inStock: false,
    },
  ]);

  const [mounted, setMounted] = useState(false);

  // SSR/Hydration Error প্রতিরোধ করার জন্য মাউন্ট ট্র্যাকিং
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  // সার্ভার সাইড রেন্ডারিং সেফ ফলব্যাক (কঙ্কাল লোডার)
  if (!mounted) {
    return (
      <div className="w-full bg-white py-6 sm:py-12 px-4 md:px-[5%] lg:px-[10%]">
        <div className="max-w-[1320px] mx-auto animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="h-64 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-sans text-black py-6 sm:py-12 px-4 md:px-[5%] lg:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Main Header Title */}
        <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neutral-900 tracking-wide">
          My Wishlist
        </h1>

        {/* Wishlist Box Container */}
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-xs">
          {wishlistItems.length > 0 ? (
            <>
              {/* ------------------------------------------------------------- */}
              {/* DESKTOP & TABLET VIEW (Visible on md screens and above)       */}
              {/* ------------------------------------------------------------- */}
              <div className="hidden md:block">
                {/* Table Header Wrapper */}
                <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-2">Stock Status</div>
                  <div className="col-span-3 text-right pr-4">Action</div>
                </div>

                {/* Table Body Content Rows */}
                <div className="divide-y divide-gray-100 bg-white">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-gray-50"
                    >
                      {/* Image & Product Name */}
                      <div className="col-span-5 flex items-center gap-4">
                        <div className="w-16 h-16 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 tracking-wide">
                          {item.name}
                        </span>
                      </div>

                      {/* Price Section */}
                      <div className="col-span-2 text-sm">
                        <span className="font-semibold text-gray-900">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-gray-400 line-through ml-2 font-normal">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Stock Status Badge */}
                      <div className="col-span-2">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded ${
                            item.inStock
                              ? "bg-green-50 text-green-700"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>

                      {/* Add to Cart & Remove Actions */}
                      <div className="col-span-3 flex items-center justify-end gap-3 lg:gap-4">
                        <button
                          disabled={!item.inStock}
                          className={`text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors duration-200 flex items-center gap-1.5 shrink-0 ${
                            item.inStock
                              ? "bg-[#00b207] hover:bg-[#009906] shadow-2xs"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>

                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-600 border border-gray-200 hover:border-red-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors shrink-0 bg-white"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* MOBILE VIEW (Visible only on mobile screens under md)         */}
              {/* ------------------------------------------------------------- */}
              <div className="block md:hidden divide-y divide-gray-100 bg-white">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 flex flex-col gap-3 relative"
                  >
                    {/* Top Section: Image, Name, Price and Cross icon */}
                    <div className="flex gap-3 items-start">
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-1 pr-6">
                        <h2 className="text-sm font-medium text-gray-900 leading-tight">
                          {item.name}
                        </h2>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold text-gray-900">
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-400 line-through font-normal">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-red-600 p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Section: Stock Badge and Add to Cart Button */}
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <div>
                        <span
                          className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                            item.inStock
                              ? "bg-green-50 text-green-700"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>

                      <button
                        disabled={!item.inStock}
                        className={`text-white font-semibold text-xs px-4 py-2 rounded-md transition-colors flex items-center gap-1.5 justify-center flex-1 max-w-[160px] ${
                          item.inStock
                            ? "bg-[#00b207] hover:bg-[#009906]"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="p-12 text-center text-sm text-gray-400 bg-white">
              Your wishlist is empty!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
