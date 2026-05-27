"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const ShoppingCart = () => {
  // কার্ট আইটেম ডাটা লিস্ট
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
      quantity: 1, // ছবির সাবটোটাল অনুযায়ী এখানে ১টি কাউন্ট ম্যাচ করা হয়েছে
      image:
        "https://images.unsplash.com/photo-1563565312871-70bf8f090710?q=80&w=200&auto=format&fit=crop",
    },
  ]);

  // কোয়ান্টিটি পরিবর্তন করার ফাংশন
  const updateQuantity = (id, amount) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      }),
    );
  };

  // আইটেম রিমুভ করার ফাংশন
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // সাবটোটাল হিসাব ($70.00 + $14.00 = $84.00)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="w-full bg-white font-sans text-black py-12 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Main Title Header */}
        <h1 className="text-2xl font-bold text-center mb-10 tracking-wide">
          My Shopping Cart
        </h1>

        {/* Outer Layout: Grid for Table and Cart Total Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Cart Table & Coupon Section (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Table Main Box */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Table Header Row */}
              <div className="grid grid-cols-12 bg-white border-b border-gray-200 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <div className="col-span-6">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right pr-6">Subtotal</div>
              </div>

              {/* Table Body Content Items */}
              <div className="divide-y divide-gray-100 bg-white">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 items-center px-6 py-5"
                  >
                    {/* Column 1: Image & Name */}
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {item.name}
                      </span>
                    </div>

                    {/* Column 2: Single Unit Price */}
                    <div className="col-span-2 text-sm text-gray-900 font-medium">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Column 3: Rounded Quantity Incrementor Button */}
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center bg-white border border-gray-200 rounded-full px-1.5 py-1 h-9 shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs hover:bg-gray-200"
                        >
                          —
                        </button>
                        <span className="w-8 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Column 4: Total Row Price & Cross Delete Action */}
                    <div className="col-span-2 flex items-center justify-end gap-4 text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-black border border-gray-200 hover:border-gray-400 rounded-full w-6 h-6 flex items-center justify-center transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Bottom Action Footer Row */}
              <div className="flex items-center justify-between bg-white px-6 py-4 border-t border-gray-100">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors">
                  Return to shop
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Coupon Code Container Section (Bottom Left) */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">
                Coupon Code
              </h3>
              <div className="flex items-center w-full sm:max-w-md border border-gray-200 rounded-full overflow-hidden pl-4 pr-1 h-11 bg-white">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
                />
                <button className="bg-[#333333] hover:bg-black text-white font-semibold text-sm px-6 h-9 rounded-full transition-colors whitespace-nowrap">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Cart Total Summary Card Panel (4 Columns) */}
          <div className="lg:col-span-4 border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Cart Total</h2>

            {/* Calculation details list */}
            <div className="flex flex-col gap-3.5 text-sm border-b border-gray-100 pb-4 mb-4">
              <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal:</span>
                <span className="font-semibold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Shipping:</span>
                <span className="font-semibold text-gray-900">Free</span>
              </div>
            </div>

            {/* Total Grand Amount */}
            <div className="flex items-center justify-between text-base font-bold text-gray-900 mb-6">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Proceed To Checkout Main Action Button */}
            <button className="w-full bg-[#00b207] hover:bg-[#009906] text-white font-bold h-12 rounded-full flex items-center justify-center transition-colors text-sm shadow-xs tracking-wide">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
