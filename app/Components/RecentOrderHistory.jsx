"use client";

import React, { useState, useEffect } from "react";

const RecentOrdersHistory = ({ orders = [] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="border border-gray-200 rounded-lg bg-white h-40 animate-pulse w-full" />
    );
  }

  // ডেটা আছে কিনা তা চেক করার ভেরিয়েবল
  const hasOrders = orders && orders.length > 0;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-2xs w-full">
      {/* Section Card Title Header (এটি সবসময় দেখা যাবে) */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-wide">
          Recent Order History
        </h3>
        {hasOrders && (
          <button className="text-[#00b207] hover:text-[#009906] text-xs sm:text-sm font-semibold transition-colors">
            View All
          </button>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* যদি ডেটা না থাকে (Empty State)                                 */}
      {/* ------------------------------------------------------------- */}
      {!hasOrders ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white">
          <p className="text-sm text-gray-400 font-medium tracking-wide">
            No recent history yet
          </p>
        </div>
      ) : (
        <>
          {/* ------------------------------------------------------------- */}
          {/* TABLET & DESKTOP LAYOUT (Visible on sm screens and above)     */}
          {/* ------------------------------------------------------------- */}
          <div className="hidden sm:block">
            {/* Table Layout Column Headers */}
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
              <div className="col-span-2">Order ID</div>
              <div className="col-span-3">Date</div>
              <div className="col-span-3">Total</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Table Content Rows Wrapper */}
            <div className="divide-y divide-gray-100 bg-white">
              {orders.map((order, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <div className="col-span-2 font-medium text-gray-900">
                    {order.id}
                  </div>
                  <div className="col-span-3 text-gray-500 font-light">
                    {order.date}
                  </div>
                  <div className="col-span-3 text-gray-900 font-medium">
                    {order.total}
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                      ${order.status?.toLowerCase() === "completed" ? "bg-green-50 text-green-700" : ""}
                      ${order.status?.toLowerCase() === "processing" ? "bg-blue-50 text-blue-700" : ""}
                      ${order.status?.toLowerCase() === "cancelled" ? "bg-red-50 text-red-700" : ""}
                    `}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <button className="text-[#00b207] hover:text-[#009906] text-xs font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* MOBILE LAYOUT (Visible only on extra small mobile screens)     */}
          {/* ------------------------------------------------------------- */}
          <div className="block sm:hidden divide-y divide-gray-100 bg-white">
            {orders.map((order, idx) => (
              <div
                key={idx}
                className="p-4 flex flex-col gap-3 hover:bg-gray-50 transition-colors"
              >
                {/* Top Row: ID and Status */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">
                    {order.id}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize
                    ${order.status?.toLowerCase() === "completed" ? "bg-green-50 text-green-700" : ""}
                    ${order.status?.toLowerCase() === "processing" ? "bg-blue-50 text-blue-700" : ""}
                    ${order.status?.toLowerCase() === "cancelled" ? "bg-red-50 text-red-700" : ""}
                  `}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Middle Row: Date and Total Price */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-gray-400 uppercase font-semibold">
                      Date
                    </span>
                    <span className="font-light">{order.date}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 items-end">
                    <span className="text-[11px] text-gray-400 uppercase font-semibold">
                      Total
                    </span>
                    <span className="font-medium text-gray-900">
                      {order.total}
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Action Button */}
                <div className="border-t border-gray-50 pt-2 mt-1">
                  <button className="w-full text-center bg-gray-50 text-[#00b207] hover:bg-zinc-100 py-2 rounded text-xs font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentOrdersHistory;
