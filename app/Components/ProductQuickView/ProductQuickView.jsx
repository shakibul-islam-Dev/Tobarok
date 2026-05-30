"use client";

import React, { useState, useEffect } from "react";
import { X, Star, Heart, ShoppingBag, Minus, Plus } from "lucide-react";
import Image from "next/image";

const ProductQuickView = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onAddToWishlist,
  isWishlisted = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const galleryImages = product?.gallery || [];

  useEffect(() => {
    setMounted(true);
    if (product?.image) {
      setMainImage(product.image);
    } else if (galleryImages.length > 0) {
      setMainImage(galleryImages[0]);
    } else {
      setMainImage("");
    }
    setQuantity(1);
  }, [product?.id, product?.image, isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;

  const hasDiscount =
    product?.originalPrice && product?.originalPrice > product?.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const totalStars = 5;
  const activeStars = product?.rating || 5;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4 md:p-10 font-sans backdrop-blur-xs overflow-y-auto select-none"
    >
      {/* Modal Main Container
        - max-h-[92vh] md:max-h-[calc(100vh-80px)]: মোবাইল স্ক্রিনে ওভারফ্লো আটকাতে পারফেক্ট হাইট ব্যালেন্স।
        - overflow-y-auto md:overflow-visible: মোবাইলে কন্টেন্ট বেশি হলে মডালের ভেতরেই স্ক্রোল হবে, লেআউট ফাটবে না।
      */}
      <div className="bg-white rounded-2xl max-w-[960px] w-full relative shadow-2xl grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-6 items-start my-auto max-h-[92vh] md:max-h-initial overflow-y-auto md:overflow-visible">
        {/* Top Right Close Button (Z-index fixed for mobile layouts) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-full p-1.5 transition-all z-40 cursor-pointer"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* LEFT SIDE: Image Gallery Section (6 Columns) */}
        {/* flex-col sm:flex-row-reverse দিয়ে মোবাইলে ছবি উপরে-নিচে এবং ট্যাবলেটে পাশে চমৎকার ফিট হবে */}
        <div className="col-span-1 md:col-span-6 flex flex-col gap-3 sm:gap-4 w-full justify-center">
          {/* Big Main Image Container */}
          <div className="w-full bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-center aspect-square relative overflow-hidden max-h-[260px] sm:max-h-[340px] md:max-h-[380px] shrink-0">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={product?.name || "Product Main Image"}
                fill
                sizes="(max-w-640px) 90vw, (max-w-768px) 50vw, 40vw"
                priority
                className="object-contain p-2 sm:p-4 transition-all duration-300"
              />
            ) : (
              <div className="text-gray-300 text-xs">No Image Available</div>
            )}
          </div>

          {/* Thumbnails list (অটো স্ক্রোলেবল এবং টাচ রেডি) */}
          {galleryImages.length > 0 && (
            <div
              className="flex flex-row items-center gap-2 overflow-x-auto pb-1 justify-start sm:justify-center shrink-0 max-w-full touch-pan-x"
              style={{ scrollbarWidth: "none" }}
            >
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-lg border-2 flex items-center justify-center p-1 cursor-pointer transition-all shrink-0 overflow-hidden relative bg-white
                    ${mainImage === img ? "border-[#00b207] shadow-2xs" : "border-gray-100 hover:border-gray-300"}`}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${idx}`}
                    fill
                    sizes="60px"
                    className="object-contain p-1"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Product Meta & Options (6 Columns) */}
        <div className="col-span-1 md:col-span-6 flex flex-col w-full h-full justify-center">
          {/* Title & Stock Tag */}
          <div className="flex items-center gap-2.5 mb-2 flex-wrap pr-6">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide leading-tight">
              {product?.name || "Unknown Product"}
            </h1>
            <span
              className={`text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded shrink-0 ${
                product?.inStock !== false
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {product?.inStock !== false ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Rating, Reviews & SKU */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400 mb-3 sm:mb-4 flex-wrap">
            <div className="flex text-[#ff8a00]">
              {[...Array(totalStars)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < activeStars ? "fill-current text-[#ff8a00]" : "text-gray-200"}`}
                />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4 Reviews</span>
            <span className="text-gray-300">•</span>
            <span>
              SKU:{" "}
              <strong className="text-gray-600 font-medium">2,51,594</strong>
            </span>
          </div>

          {/* Price & Discount */}
          <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-gray-100">
            {hasDiscount && (
              <span className="text-gray-400 line-through text-sm sm:text-base md:text-lg">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-base sm:text-lg md:text-xl font-bold text-[#2c742f]">
              ${product?.price ? product.price.toFixed(2) : "0.00"}
            </span>
            {hasDiscount && (
              <span className="bg-red-50 text-red-600 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full">
                {discountPercent}% Off
              </span>
            )}
          </div>

          {/* Brand Info */}
          <div className="flex items-center mb-4 text-xs sm:text-sm text-gray-500">
            <span className="mr-2">Brand:</span>
            <div className="border border-gray-100 rounded-md px-2.5 py-0.5 flex items-center h-7 bg-white shadow-3xs">
              <span className="text-[#00b207] font-bold text-xs tracking-tight flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b207]"></span>{" "}
                farmary
              </span>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light mb-5 line-clamp-3 sm:line-clamp-none">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum.
          </p>

          {/* Quantity Selector, Add to Cart & Wishlist Box */}
          {/* flex-col sm:flex-row দিয়ে মোবাইলে বাটনগুলো নিচে-নিচে বড় টার্গেট এরিয়া নিবে, ট্যাবলেটে পাশাপাশি সোজা হয়ে যাবে */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5 pb-5 border-b border-gray-100 w-full">
            {/* Quantity Counter */}
            <div className="flex items-center justify-between sm:justify-start bg-gray-50 border border-gray-100 rounded-full px-2 py-1 h-10 shadow-3xs sm:w-auto">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-10 text-center font-bold text-sm text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Action Buttons Container */}
            <div className="flex items-center gap-2.5 flex-1">
              {/* Add to Cart Button */}
              <button
                disabled={product?.inStock === false}
                onClick={() =>
                  onAddToCart && onAddToCart({ ...product, quantity })
                }
                className={`flex-1 text-white font-semibold h-10 rounded-full flex items-center justify-center gap-2 transition-all text-xs sm:text-sm shadow-sm cursor-pointer active:scale-[0.98]
                  ${product?.inStock === false ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none" : "bg-[#00b207] hover:bg-[#009906]"}`}
              >
                Add to Cart
                <ShoppingBag className="w-4 h-4" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => onAddToWishlist && onAddToWishlist(product)}
                className={`transition-colors rounded-full w-10 h-10 flex items-center justify-center shadow-3xs shrink-0 cursor-pointer active:scale-95
                  ${isWishlisted ? "bg-red-500 text-white hover:bg-red-600" : "bg-green-50 text-[#00b207] hover:bg-green-100"}`}
              >
                <Heart
                  className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Footer Metadata Tags */}
          <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
            <div className="text-gray-400">
              <span className="font-semibold text-gray-600">Category:</span>{" "}
              {product?.category || "Vegetables"}
            </div>
            <div className="text-gray-400">
              <span className="font-semibold text-gray-600">Tag:</span> Healthy,
              Organic, Fresh
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default ProductQuickView;
