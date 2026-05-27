"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OrderHistory = () => {
  // অর্ডার হিস্ট্রি ডাটা লিস্ট (ছবির মান অনুযায়ী হুবহু রাখা হয়েছে)
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

  // প্যাজিনেশন স্টেট
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full bg-white font-sans text-black py-8 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Main Outer Box with Border Glow from Image */}
        <div className="border-2 border-[#1e90ff] rounded-xl bg-white shadow-sm overflow-hidden">
          {/* Card Title Header */}
          <div className="px-6 py-5 bg-white border-b border-gray-100">
            <h1 className="text-xl font-semibold text-gray-900 tracking-wide">
              Order History
            </h1>
          </div>

          {/* Table Container for Responsiveness */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header Row */}
              <div className="grid grid-cols-12 bg-[#f9f9f9] border-b border-gray-200 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                <div className="col-span-2">Order ID</div>
                <div className="col-span-3">Date</div>
                <div className="col-span-3">Total</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right"></div>
              </div>

              {/* Table Body Rows List */}
              <div className="divide-y divide-gray-100 bg-white">
                {orders.map((order, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {/* Order ID */}
                    <div className="col-span-2 font-medium text-gray-900">
                      {order.id}
                    </div>

                    {/* Date */}
                    <div className="col-span-3 text-gray-500 font-light">
                      {order.date}
                    </div>

                    {/* Total Info */}
                    <div className="col-span-3 text-gray-900 font-medium">
                      {order.total}
                    </div>

                    {/* Status Badge Text */}
                    <div className="col-span-2 capitalize text-gray-600 font-light">
                      {order.status}
                    </div>

                    {/* Actions Action Trigger */}
                    <div className="col-span-2 text-right">
                      <button className="text-[#00b207] hover:text-[#009906] text-sm font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TABLE FOOTER: Rounded Pagination Controls Grid Row */}
          <div className="flex items-center justify-center py-6 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              {/* Left Navigation Arrow */}
              <button className="w-9 h-9 rounded-full bg-[#f2f2f2] text-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Number 1 (Active Mode) */}
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors cursor-pointer
                  ${
                    currentPage === 1
                      ? "bg-[#00b207] text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                1
              </button>

              {/* Page Number 2 */}
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors cursor-pointer
                  ${
                    currentPage === 2
                      ? "bg-[#00b207] text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                2
              </button>

              {/* Page Number 3 */}
              <button
                onClick={() => setCurrentPage(3)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors cursor-pointer
                  ${
                    currentPage === 3
                      ? "bg-[#00b207] text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                3
              </button>

              {/* Right Navigation Arrow */}
              <button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
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
