"use client";

import React from "react";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

const ProductCard = ({
  product,
  onQuickView,
  onAddToCart,
  onAddToWishlist,
  isWishlisted = false,
}) => {
  if (!product) return null;

  const totalStars = 5;
  const activeStars = product.rating || 5;

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="w-full max-w-[260px] mx-auto bg-white border border-gray-200 hover:border-[#00b207] rounded-xl p-3 sm:p-4 transition-all duration-300 group shadow-sm hover:shadow-md relative font-sans flex flex-col justify-between h-full select-none">
      {/* Product Image Area */}
      <div className="w-full aspect-square bg-gray-50/50 rounded-lg p-2 flex items-center justify-center relative overflow-hidden border border-gray-100">
        {/* ডিসকাউন্ট ব্যাজ */}
        {hasDiscount && product.inStock !== false && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-20">
            {discountPercent}% OFF
          </span>
        )}

        {/* আউট অফ স্টক ওভারলে */}
        {product.inStock === false && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-red-600 font-bold text-xs z-20 backdrop-blur-[1px]">
            Out of Stock
          </div>
        )}

        {/* নেক্সট ইমেজ */}
        <div
          className={`relative w-full h-full transition-transform duration-300 group-hover:scale-105 ${product.inStock === false ? "opacity-60" : ""}`}
        >
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            loading="lazy"
            className="object-contain"
          />
        </div>

        {/* রাইট সাইড আইকনস */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={() => onAddToWishlist && onAddToWishlist(product)}
            className={`w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-colors
              ${isWishlisted ? "bg-red-500 text-white" : "bg-white text-gray-800 hover:bg-[#00b207] hover:text-white"}`}
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button
            onClick={() => onQuickView && onQuickView(product)}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-[#00b207] hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* টেক্সট ও একশন এরিয়া */}
      <div className="mt-3 flex flex-col gap-1.5 w-full">
        <h3 className="text-sm font-medium text-[#2c742f] truncate">
          {product.name}
        </h3>

        <div className="flex items-center text-[#ff8a00]">
          {[...Array(totalStars)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < activeStars ? "fill-current" : "text-gray-200"}`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <span className="text-base font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            disabled={product.inStock === false}
            onClick={() => onAddToCart && onAddToCart(product)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95
              ${product.inStock === false ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#00b207] hover:bg-[#009906] text-white"}`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
