"use client";

import React from "react";
import { Check } from "lucide-react";

const OrderDetails = () => {
  // অর্ডার করা প্রোডাক্ট লিস্ট ডাটা
  const products = [
    {
      name: "Red Capsicum",
      price: 14.0,
      quantity: 5,
      total: 70.0,
      image:
        "https://images.unsplash.com/photo-1563565312871-70bf8f090710?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Green Capsicum",
      price: 14.0,
      quantity: 2,
      total: 28.0,
      image:
        "https://images.unsplash.com/photo-1628773822503-930a85890060?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Green Chili",
      price: 26.7,
      quantity: 10,
      total: 267.0,
      image:
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-black py-8 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* MAIN CARD CONTAINER WITH COMPONENT GLOW BORDER */}
        <div className="border-2 border-[#1e90ff] rounded-xl bg-white shadow-sm overflow-hidden p-6 flex flex-col gap-8">
          {/* HEADER SECTION: Title, Meta Info & Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <h1 className="text-lg font-bold text-gray-900 tracking-wide mr-2">
                Order Details
              </h1>
              <span>•</span>
              <span>April 24, 2021</span>
              <span>•</span>
              <span>3 Products</span>
            </div>
            <button className="text-[#00b207] hover:text-[#009906] font-semibold text-sm transition-colors whitespace-nowrap self-start sm:self-center">
              Back to List
            </button>
          </div>

          {/* TOP SECTION: Addresses & Financial Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Billing & Shipping Box Panel (8 Columns) */}
            <div className="lg:col-span-8 border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
              {/* Billing Address column */}
              <div className="p-5 flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                  Billing Address
                </span>
                <h4 className="text-base font-bold text-gray-900">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <div className="text-xs text-gray-400 mt-2">EMAIL</div>
                <p className="text-sm text-gray-800 font-light break-all">
                  dianne.russell@gmail.com
                </p>
                <div className="text-xs text-gray-400 mt-1">PHONE</div>
                <p className="text-sm text-gray-800 font-light">
                  (671) 555-0110
                </p>
              </div>

              {/* Shipping Address column */}
              <div className="p-5 flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                  Shipping Address
                </span>
                <h4 className="text-base font-bold text-gray-900">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <div className="text-xs text-gray-400 mt-2">EMAIL</div>
                <p className="text-sm text-gray-800 font-light break-all">
                  dianne.russell@gmail.com
                </p>
                <div className="text-xs text-gray-400 mt-1">PHONE</div>
                <p className="text-sm text-gray-800 font-light">
                  (671) 555-0110
                </p>
              </div>
            </div>

            {/* Financial Invoice Breakdown Panel (4 Columns) */}
            <div className="lg:col-span-4 border border-gray-200 rounded-lg p-5 bg-white flex flex-col justify-between gap-4">
              <div className="grid grid-cols-2 gap-y-2 text-sm border-b border-gray-100 pb-3">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Order ID:
                </div>
                <div className="text-gray-900 font-medium text-right">
                  #4152
                </div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Payment Method:
                </div>
                <div className="text-gray-900 font-medium text-right">
                  Paypal
                </div>
              </div>

              <div className="flex flex-col gap-2.5 text-sm border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between text-gray-500">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">$365.00</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <span>Discount:</span>
                  <span className="font-semibold text-gray-900">20%</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <span>Shipping:</span>
                  <span className="font-semibold text-gray-900">Free</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-lg font-bold text-[#2c742f]">
                <span className="text-gray-900 text-base">Total:</span>
                <span>$84.00</span>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: Horizontal Stepper Progress Tracker Bar */}
          <div className="w-full py-6 border-y border-gray-100 my-2">
            <div className="max-w-[800px] mx-auto relative flex items-center justify-between">
              {/* Background Connecting Tracks Line Line */}
              <div className="absolute top-4 left-0 w-full h-1.5 bg-gray-100 -z-10 rounded-full" />
              {/* Green Completed Active Line Track */}
              <div className="absolute top-4 left-0 w-[66%] h-1.5 bg-[#00b207] -z-10 rounded-full" />

              {/* Step 1: Order Received (Completed State) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00b207] text-white flex items-center justify-center shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-xs md:text-sm font-medium text-[#2c742f]">
                  Order received
                </span>
              </div>

              {/* Step 2: Processing (Active Current State) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00b207] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  02
                </div>
                <span className="text-xs md:text-sm font-medium text-[#2c742f]">
                  Processing
                </span>
              </div>

              {/* Step 3: On The Way (Pending State) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-dashed border-gray-300 text-gray-400 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <span className="text-xs md:text-sm font-light text-gray-400">
                  On the way
                </span>
              </div>

              {/* Step 4: Delivered (Pending State) */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-dashed border-gray-300 text-gray-400 flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <span className="text-xs md:text-sm font-light text-gray-400">
                  Delivered
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Product Items Invoice Table */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Table Header Fields Column */}
              <div className="grid grid-cols-12 bg-[#f2f2f2] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 rounded-t-md">
                <div className="col-span-6">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right pr-4">Subtotal</div>
              </div>

              {/* Table Data Rows loop */}
              <div className="divide-y divide-gray-100 border-x border-b border-gray-100 rounded-b-md bg-white">
                {products.map((product, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center px-6 py-4 text-sm text-gray-800"
                  >
                    {/* Item Img & Name */}
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="w-14 h-14 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="font-medium text-gray-900">
                        {product.name}
                      </span>
                    </div>

                    {/* Unit Price */}
                    <div className="col-span-2 font-light text-gray-600">
                      ${product.price.toFixed(2)}
                    </div>

                    {/* Order Qty */}
                    <div className="col-span-2 text-center text-gray-600 font-light">
                      x{product.quantity}
                    </div>

                    {/* Subtotal Cost */}
                    <div className="col-span-2 text-right pr-4 font-semibold text-gray-900">
                      ${product.total.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
