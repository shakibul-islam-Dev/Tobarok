"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OrderHistory = () => {
  const orders = [
    {
      id: "#3933",
      date: "4 April, 2021",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#5045",
      date: "27 Mar, 2021",
      total: "$25.00 (1 Product)",
      status: "on the way",
    },
    {
      id: "#5028",
      date: "20 Mar, 2021",
      total: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      id: "#4600",
      date: "19 Mar, 2021",
      total: "$35.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#4152",
      date: "18 Mar, 2021",
      total: "$578.00 (13 Products)",
      status: "Completed",
    },
    {
      id: "#8811",
      date: "10 Mar, 2021",
      total: "$345.00 (7 Products)",
      status: "Completed",
    },
    {
      id: "#3536",
      date: "5 Mar, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#1374",
      date: "27 Feb, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#7791",
      date: "25 Feb, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#4846",
      date: "24 Feb, 2021",
      total: "$23.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#5948",
      date: "20 Feb, 2021",
      total: "$23.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#1577",
      date: "12 Oct, 2020",
      total: "$23.00 (1 Products)",
      status: "Completed",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // স্ট্যাটাস অনুযায়ী ডাইনামিক কালার ব্যাজ জেনারেটর
  const getStatusClass = (status) => {
    const s = status.toLowerCase();
    if (s === "completed") return "bg-green-50 text-green-700";
    if (s === "processing") return "bg-blue-50 text-blue-700";
    return "bg-amber-50 text-amber-700"; // 'on the way' বা অন্যান্য স্টেটের জন্য
  };

  return (
    <div className="w-full bg-white font-sans text-black py-6 sm:py-8 px-4 md:px-[5%] lg:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Main Outer Box */}
        <div className="border border-gray-200 rounded-xl bg-white shadow-xs overflow-hidden">
          {/* Card Title Header */}
          <div className="px-5 sm:px-6 py-5 bg-white border-b border-gray-100">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
              Order History
            </h1>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TABLET & DESKTOP VIEW (Visible on sm screens and above)       */}
          {/* ------------------------------------------------------------- */}
          <div className="hidden sm:block">
            {/* Table Header Row */}
            <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
              <div className="col-span-2">Order ID</div>
              <div className="col-span-3">Date</div>
              <div className="col-span-3">Total</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Table Body Rows List */}
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
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusClass(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <button className="text-[#00b207] hover:text-[#009906] text-xs sm:text-sm font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* MOBILE CARD VIEW (Visible only on mobile screens)             */}
          {/* ------------------------------------------------------------- */}
          <div className="block sm:hidden divide-y divide-gray-100 bg-white">
            {orders.map((order, idx) => (
              <div
                key={idx}
                className="p-4 flex flex-col gap-3 hover:bg-gray-50 transition-colors"
              >
                {/* ID and Status */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">
                    {order.id}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusClass(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Date and Total Price */}
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

                {/* Mobile View Details Button */}
                <div className="border-t border-gray-50 pt-2 mt-1">
                  <button className="w-full text-center bg-gray-50 text-[#00b207] hover:bg-zinc-100 py-2 rounded text-xs font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TABLE FOOTER: Pagination Controls */}
          <div className="flex items-center justify-center py-5 bg-white border-t border-gray-100">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Left Arrow */}
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f2f2f2] text-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Buttons */}
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer
                    ${
                      currentPage === page
                        ? "bg-[#00b207] text-white shadow-xs"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Right Arrow */}
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
