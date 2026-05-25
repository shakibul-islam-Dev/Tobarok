"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [activeImage, setActiveImage] = useState(0);

  // Replace these with your actual image paths
  const images = [
    "/placeholder-main.png",
    "/placeholder-thumb1.png",
    "/placeholder-thumb2.png",
    "/placeholder-thumb3.png",
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { id: "blue", hex: "#A0BCE0" },
    { id: "red", hex: "#E07575" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:p-10 font-sans text-gray-900 bg-white">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-10 flex gap-2">
        <span>Account</span>
        <span>/</span>
        <span>Gaming</span>
        <span>/</span>
        <span className="text-black font-medium">Havic HV G-92 Gamepad</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section: Image Gallery */}
        <div className="flex gap-6 w-full lg:w-[60%]">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-[170px] h-[138px] bg-[#F5F5F5] rounded flex items-center justify-center cursor-pointer border-2 transition-all ${
                  activeImage === index ? "border-gray-400" : "border-transparent"
                }`}
              >
                {/* Using a standard img tag for ease of copy-pasting. 
                  Replace with next/image <Image /> in production.
                */}
                <img
                  src={images[index]}
                  alt={`Thumbnail ${index + 1}`}
                  className="max-w-[120px] max-h-[100px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 h-[600px] bg-[#F5F5F5] rounded flex items-center justify-center">
            <img
              src={images[activeImage]}
              alt="Havic HV G-92 Gamepad"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-[40%] flex flex-col mt-2">
          <h1 className="text-2xl font-semibold tracking-wide mb-3">
            Havic HV G-92 Gamepad
          </h1>

          {/* Ratings and Stock */}
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center text-[#FFAD33] gap-1">
              {/* Star Icons */}
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              {/* Half Star */}
              <svg className="w-4 h-4 fill-current opacity-50" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span className="text-gray-500 opacity-70">(150 Reviews)</span>
            <span className="text-gray-400">|</span>
            <span className="text-[#00FF66] font-medium">In Stock</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-normal tracking-wide mb-6">$192.00</p>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
            for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          <hr className="border-gray-300 mb-6" />

          {/* Colours */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-base font-medium">Colours:</span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  style={{ backgroundColor: color.hex }}
                  className={`w-5 h-5 rounded-full border-2 ring-offset-2 ${
                    selectedColor === color.id
                      ? "ring-2 ring-black border-white"
                      : "border-transparent ring-0 ring-transparent"
                  }`}
                  aria-label={`Select ${color.id} color`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-6 mb-8">
            <span className="text-base font-medium">Size:</span>
            <div className="flex gap-4 text-sm font-medium">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 rounded flex items-center justify-center border transition-colors ${
                    selectedSize === size
                      ? "bg-[#DB4444] text-white border-[#DB4444]"
                      : "border-gray-400 text-gray-700 hover:border-[#DB4444] hover:text-[#DB4444]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-4 mb-10">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-400 rounded h-11 w-36">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-full flex items-center justify-center text-2xl border-r border-gray-400 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <div className="flex-1 h-full flex items-center justify-center font-medium text-lg">
                {quantity}
              </div>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-full flex items-center justify-center text-xl bg-[#DB4444] text-white rounded-r hover:bg-[#c33d3d] transition-colors"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="h-11 px-8 bg-[#DB4444] text-white font-medium rounded hover:bg-[#c33d3d] transition-colors flex-1">
              Buy Now
            </button>

            {/* Wishlist Button */}
            <button className="h-11 w-11 flex items-center justify-center border border-gray-400 rounded hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          {/* Delivery Info Box */}
          <div className="border border-gray-300 rounded divide-y divide-gray-300">
            {/* Free Delivery */}
            <div className="p-4 flex gap-4 items-start">
              <svg className="w-8 h-8 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                <rect x="2" y="5" width="16" height="10" rx="2" strokeWidth="1.5" />
                <circle cx="6" cy="18" r="2" strokeWidth="1.5" />
                <circle cx="14" cy="18" r="2" strokeWidth="1.5" />
              </svg>
              <div>
                <h4 className="font-medium mb-1">Free Delivery</h4>
                <p className="text-xs text-black font-medium underline cursor-pointer">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="p-4 flex gap-4 items-start">
              <svg className="w-8 h-8 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <div>
                <h4 className="font-medium mb-1">Return Delivery</h4>
                <p className="text-xs text-black font-medium">
                  Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}