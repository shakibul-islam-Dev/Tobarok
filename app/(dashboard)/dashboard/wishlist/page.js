"use client";

import React, { useState } from "react";
import { X, ShoppingCart } from "lucide-react";

const wishlistPage = () => {
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

  // আইটেম রিমুভ করার ফাংশন
  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full bg-white font-sans text-black py-12 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Main Header Title */}
        <h1 className="text-2xl font-bold text-center mb-8 tracking-wide">
          My Wishlist
        </h1>

        {/* Wishlist Table Container */}
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Table Header Wrapper */}
          <div className="grid grid-cols-12 bg-white border-b border-gray-200 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <div className="col-span-6">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Stock Status</div>
            <div className="col-span-2 text-right pr-6">Action</div>
          </div>

          {/* Table Body Content Rows */}
          {wishlistItems.length > 0 ? (
            <div className="divide-y divide-gray-100 bg-white">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-gray-50"
                >
                  {/* Column 1: Image & Product Name (6 Cols) */}
                  <div className="col-span-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white border border-gray-100 rounded p-1 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 tracking-wide">
                      {item.name}
                    </span>
                  </div>

                  {/* Column 2: Price Section (2 Cols) */}
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

                  {/* Column 3: Stock Status Badge (2 Cols) */}
                  <div className="col-span-2">
                    {item.inStock ? (
                      <span className="bg-[#e6f7e7] text-[#2c742f] text-xs font-medium px-2.5 py-1 rounded">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-[#fef2f2] text-[#ea580c] text-xs font-medium px-2.5 py-1 rounded">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Column 4: Add to Cart & Remove Actions (2 Cols) */}
                  <div className="col-span-2 flex items-center justify-end gap-4">
                    {item.inStock ? (
                      <button className="bg-[#00b207] hover:bg-[#009906] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm flex items-center gap-1.5">
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-[#f2f2f2] text-gray-400 font-semibold text-xs px-6 py-2.5 rounded-full cursor-not-allowed"
                      >
                        Add to Cart
                      </button>
                    )}

                    {/* Circle Remove Cross Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-black border border-gray-200 hover:border-gray-400 rounded-full w-7 h-7 flex items-center justify-center transition-colors shadow-xs"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-sm text-gray-400 bg-white">
              Your wishlist is empty!
            </div>
          )}
        </div>

        {/* Bottom Thin Line Divider Effect */}
        <div className="w-full border-b-2 border-[#1e90ff] mt-1"></div>
      </div>
    </div>
  );
};

export default wishlistPage;
