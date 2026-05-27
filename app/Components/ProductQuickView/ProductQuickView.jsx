"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Star } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

const ProductQuickView = ({ isOpen = true, onClose }) => {
  // থাম্বনেইল গ্যালারির ছবি (সবুজ শাকসবজির ইমেজ প্লেসহোল্ডার)
  const images = [
    "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=600&auto=format&fit=crop", // Main bok choy / cabbage
    "https://images.unsplash.com/photo-1628773822503-930a85890060?q=80&w=600&auto=format&fit=crop", // View 2
    "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=600&auto=format&fit=crop", // View 3
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop", // View 4
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(5);

  if (!isOpen) return null;

  return (
    // Backdrop overlay
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 font-sans">
      {/* Modal Main Container */}
      <div className="bg-white rounded-lg max-w-[960px] w-full relative shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 p-6 gap-6 items-start">
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* LEFT SIDE: Image Gallery Section (5 Columns) */}
        <div className="md:col-span-6 flex gap-4 w-full h-full">
          {/* Vertical Thumbnails Slider Arrows */}
          <div className="flex flex-col items-center gap-2 justify-center py-2">
            <button className="text-gray-400 hover:text-black">
              <ChevronUp className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`w-[64px] h-[64px] rounded border flex items-center justify-center p-1 cursor-pointer transition-all ${mainImage === img ? "border-[#00b207] ring-1 ring-[#00b207]" : "border-gray-200 hover:border-gray-400"}`}
                >
                  <img
                    src={img}
                    alt={`Thumb ${idx}`}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              ))}
            </div>

            <button className="text-gray-400 hover:text-black">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Big Main Image Container */}
          <div className="flex-1 bg-white border-2 border-[#9b51e0] rounded-lg p-4 flex items-center justify-center aspect-square relative overflow-hidden">
            <img
              src={mainImage}
              alt="Chinese Cabbage Main"
              className="object-contain w-full h-full max-h-[380px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Product Meta & Options (6 Columns) */}
        <div className="md:col-span-6 flex flex-col pt-2 md:pt-0">
          {/* Title & Stock Tag */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
              Chinese Cabbage
            </h1>
            <span className="bg-[#e6f7e7] text-[#2c742f] text-xs font-medium px-2.5 py-1 rounded">
              In Stock
            </span>
          </div>

          {/* Rating, Reviews & SKU */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
            <div className="flex text-[#ff8a00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-gray-800 font-medium">4 Review</span>
            <span className="text-gray-300">•</span>
            <span>
              SKU:{" "}
              <strong className="text-gray-800 font-medium">2,51,594</strong>
            </span>
          </div>

          {/* Price & Discount */}
          <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
            <span className="text-gray-400 line-through text-lg">$48.00</span>
            <span className="text-xl font-semibold text-[#2c742f]">$17.28</span>
            <span className="bg-[#fef2f2] text-[#ea580c] text-xs font-semibold px-2 py-0.5 rounded-full">
              64% Off
            </span>
          </div>

          {/* Brand & Social Share Info */}
          <div className="flex items-center justify-between mb-5 flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Brand:</span>
              <div className="border border-gray-200 rounded px-2 py-1 flex items-center justify-center h-8 bg-white">
                {/* Brand Farmary Logo Mock */}
                <span className="text-[#00b207] font-bold text-xs tracking-tight flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00b207]"></span>{" "}
                  farmary
                </span>
              </div>
            </div>

            {/* Social Icons Share Row */}
            <div className="flex items-center gap-3 text-sm text-gray-700"></div>
          </div>

          {/* Description Short Text */}
          <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>

          {/* Quantity Selector, Add to Cart & Wishlist Box */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            {/* Round Quantity Counter */}
            <div className="flex items-center bg-gray-100 rounded-full px-2 py-1.5 h-11">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                —
              </button>
              <span className="w-10 text-center font-semibold text-sm">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                +
              </button>
            </div>

            {/* Add to Cart Big Button */}
            <button className="flex-1 bg-[#00b207] hover:bg-[#009906] text-white font-semibold h-11 rounded-full flex items-center justify-center gap-2 transition-colors text-sm shadow-sm">
              Add to Cart
              <ShoppingBag className="w-4 h-4" />
            </button>

            {/* Circular Wishlist Button */}
            <button className="bg-[#e6f7e7] text-[#00b207] hover:bg-[#d0f2d2] transition-colors rounded-full w-11 h-11 flex items-center justify-center shadow-sm">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Footer Metadata Tags */}
          <div className="flex flex-col gap-2 text-xs">
            <div className="text-gray-500">
              <span className="font-medium text-gray-800">Category:</span>{" "}
              Vegetables
            </div>
            <div className="text-gray-500 leading-relaxed">
              <span className="font-medium text-gray-800">Tag:</span> Vegetables
              Healthy{" "}
              <a href="#" className="text-gray-900 underline font-medium">
                Chinese
              </a>{" "}
              Cabbage Green Cabbage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
