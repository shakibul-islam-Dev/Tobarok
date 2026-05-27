"use client";
import React from "react";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="w-[260px] bg-white border border-gray-200 hover:border-[#00b207] rounded-xl p-4 transition-all duration-300 group shadow-sm hover:shadow-md relative font-sans">
      {/* Product Image Container Area */}
      <div className="w-full aspect-square bg-white rounded-lg p-2 flex items-center justify-center relative overflow-hidden border-2 border-[#9b51e0]">
        <img
          src="https://images.unsplash.com/photo-1628773822503-930a85890060?q=80&w=400&auto=format&fit=crop" // Green Capsicum Image Placeholder
          alt="Green Capsicum"
          className="object-contain max-h-full max-w-full transition-transform duration-300 group-hover:scale-102"
        />

        {/* Hover action items (Heart & Eye) - Top Right side */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 opacity-100">
          {/* Wishlist Button */}
          <button className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-[#00b207] hover:text-white transition-colors duration-200">
            <Heart className="w-4 h-4" />
          </button>

          {/* Quick View Button */}
          <button className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-[#00b207] hover:text-white transition-colors duration-200">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details Info Section (Bottom Area) */}
      <div className="mt-4 flex items-end justify-between relative">
        {/* Left: Name, Price, and Ratings */}
        <div className="flex flex-col gap-1.5">
          {/* Product Name */}
          <h3 className="text-sm font-medium text-[#2c742f] cursor-pointer hover:underline">
            Green Capsicum
          </h3>

          {/* Product Price */}
          <div className="text-base font-semibold text-gray-900">$14.99</div>

          {/* Rating Stars */}
          <div className="flex items-center text-[#ff8a00]">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
            <Star className="w-3.5 h-3.5 text-gray-300" />
          </div>
        </div>

        {/* Right: Round Shopping Bag Action Button */}
        <button className="w-10 h-10 rounded-full bg-[#00b207] hover:bg-[#009906] text-white flex items-center justify-center shadow-sm transition-colors duration-200 shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
