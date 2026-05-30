"use client";

import React, { useState, useEffect } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image ইমপোর্ট করা হলো

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.0,
      quantity: 5,
      image:
        "https://images.unsplash.com/photo-1628773822503-930a85890060?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1563565312871-70bf8f090710?q=80&w=200&auto=format&fit=crop",
    },
  ]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!mounted) {
    return (
      <div className="w-full bg-white py-6 sm:py-12 px-4 md:px-[5%] lg:px-[10%]">
        <div className="max-w-[1320px] mx-auto animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-10 mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 h-64 bg-gray-100 rounded-lg"></div>
            <div className="lg:col-span-4 h-64 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-sans text-black py-6 sm:py-12 px-4 md:px-[5%] lg:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 tracking-wide text-neutral-950">
          My Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xs bg-white">
              {cartItems.length > 0 ? (
                <>
                  {/* DESKTOP LAYOUT */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-2">Price</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-2 text-right pr-4">Subtotal</div>
                    </div>

                    <div className="divide-y divide-gray-100 bg-white">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-12 items-center px-6 py-5 hover:bg-gray-50/50 transition-colors"
                        >
                          {/* Next.js Image Integration */}
                          <div className="col-span-6 flex items-center gap-4">
                            <div className="relative w-16 h-16 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shrink-0 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="64px"
                                className="object-contain p-1"
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              {item.name}
                            </span>
                          </div>

                          <div className="col-span-2 text-sm text-gray-900 font-medium">
                            ${item.price.toFixed(2)}
                          </div>

                          <div className="col-span-2 flex justify-center">
                            <div className="flex items-center bg-white border border-gray-200 rounded-full px-1 py-0.5 h-8 shadow-2xs">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center font-semibold text-xs text-gray-900">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="col-span-2 flex items-center justify-end gap-3 lg:gap-4 text-right">
                            <span className="text-sm font-semibold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-600 border border-gray-100 hover:border-red-100 rounded-full w-7 h-7 flex items-center justify-center transition-colors shrink-0 bg-white shadow-2xs"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* MOBILE LAYOUT */}
                  <div className="block md:hidden divide-y divide-gray-100 bg-white">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 flex flex-col gap-3 relative"
                      >
                        <div className="flex gap-3 items-start">
                          {/* Next.js Image on Mobile */}
                          <div className="relative w-16 h-16 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shrink-0 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="64px"
                              className="object-contain p-1"
                            />
                          </div>

                          <div className="flex-1 flex flex-col gap-0.5 pr-6">
                            <h2 className="text-sm font-medium text-gray-900 leading-tight">
                              {item.name}
                            </h2>
                            <span className="text-xs text-gray-500 font-medium">
                              ${item.price.toFixed(2)} / unit
                            </span>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-red-600 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-4 bg-gray-50/50 p-2 rounded-lg">
                          <div className="flex items-center bg-white border border-gray-200 rounded-full px-1 py-0.5 h-8">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center font-semibold text-xs text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-400 block font-light">
                              Subtotal
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="p-12 text-center flex flex-col items-center justify-center gap-4 bg-white">
                  <ShoppingBag className="w-12 h-12 text-gray-300" />
                  <p className="text-sm text-gray-400">Your cart is empty!</p>
                  <Link
                    href="/"
                    className="mt-2 bg-[#00b207] hover:bg-[#009906] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-colors shadow-2xs"
                  >
                    Shop Now
                  </Link>
                </div>
              )}

              {/* Footer Buttons */}
              {cartItems.length > 0 && (
                <div className="flex items-center justify-between bg-white px-4 sm:px-6 py-4 border-t border-gray-100 gap-2">
                  <Link
                    href="/"
                    className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-full border border-gray-200 transition-colors block text-center"
                  >
                    Return to shop
                  </Link>
                  <button
                    onClick={() => console.log("Cart updated")}
                    className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-full border border-gray-200 transition-colors"
                  >
                    Update Cart
                  </button>
                </div>
              )}
            </div>

            {/* Coupon Code */}
            {cartItems.length > 0 && (
              <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h3 className="text-base font-bold text-gray-900 whitespace-nowrap">
                  Coupon Code
                </h3>
                <div className="flex items-center w-full sm:max-w-xs md:max-w-sm border border-gray-200 rounded-full overflow-hidden pl-4 pr-1 h-10 bg-white focus-within:border-violet-500 transition-colors">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
                  />
                  <button className="bg-[#333333] hover:bg-black text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 h-8 rounded-full transition-colors whitespace-nowrap">
                    Apply Coupon
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE (Summary) */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-4 border border-gray-200 rounded-lg p-5 sm:p-6 bg-white shadow-xs w-full">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">
                Cart Total
              </h2>
              <div className="flex flex-col gap-3.5 text-sm border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-base font-bold text-gray-900 mb-6">
                <span>Total:</span>
                <span className="text-lg text-[#00b207]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-[#00b207] hover:bg-[#009906] text-white font-bold h-11 sm:h-12 rounded-full flex items-center justify-center transition-colors text-sm shadow-xs tracking-wide">
                Proceed to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
