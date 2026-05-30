"use client";

import React from "react";
import {
  LayoutDashboard,
  RefreshCw,
  Heart,
  ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  // অর্ডার হিস্ট্রি ডাটা লিস্ট
  const orders = [
    {
      id: "#738",
      date: "8 Sep, 2020",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#703",
      date: "24 May, 2020",
      total: "$25.00 (1 Product)",
      status: "on the way",
    },
    {
      id: "#130",
      date: "22 Oct, 2020",
      total: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      id: "#561",
      date: "1 Feb, 2020",
      total: "$35.00 (1 Products)",
      status: "Completed",
    },
    {
      id: "#536",
      date: "21 Sep, 2020",
      total: "$578.00 (13 Products)",
      status: "Completed",
    },
    {
      id: "#492",
      date: "22 Oct, 2020",
      total: "$345.00 (7 Products)",
      status: "Completed",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-black py-12 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT SIDE: Navigation Sidebar (3 Columns) */}
        <div className="lg:col-span-3 border border-gray-100 rounded-lg p-4 bg-white shadow-2xs">
          <h2 className="text-xl font-semibold px-4 mb-5 tracking-wide text-gray-900">
            Navigation
          </h2>
          <nav className="flex flex-col gap-1">
            {/* Dashboard Active Item */}
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 bg-[#edf2ee] text-gray-900 font-medium rounded-md border-l-4 border-[#00b207] text-sm"
            >
              <LayoutDashboard className="w-4 h-4 text-gray-700" /> Dashboard
            </a>
            <Link
              href={`/dashboard/orderhistory`}
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Order History
            </Link>
            <Link
              href={`/dashboard/wishlist`}
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm transition-colors"
            >
              <Heart className="w-4 h-4" /> Wishlist
            </Link>
            <Link
              href={`/dashboard/shoppingcarts`}
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4" /> Shopping Cart
            </Link>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-md text-sm transition-colors"
            >
              <Settings className="w-4 h-4" /> Settings
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md text-sm transition-colors mt-2"
            >
              <LogOut className="w-4 h-4" /> Log-out
            </a>
          </nav>
        </div>

        {/* RIGHT SIDE: Profile Info & Order History (9 Columns) */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          {/* TOP ROW: Profile Details Card & Billing Address Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Profile Card */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-white shadow-2xs">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                alt="Dianne Russell"
                className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-gray-100"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Dianne Russell
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-light tracking-wide">
                Customer
              </p>
              <button className="text-[#00b207] hover:text-[#009906] font-semibold text-sm transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Billing Address Card */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                  Billing Address
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Dianne Russell
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light mb-2 max-w-xs">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <p className="text-sm text-gray-800 font-light break-all mb-1">
                  dianne.russell@gmail.com
                </p>
                <p className="text-sm text-gray-800 font-light">
                  (671) 555-0110
                </p>
              </div>
              <button className="text-[#00b207] hover:text-[#009906] font-semibold text-sm transition-colors mt-5 text-left">
                Edit Address
              </button>
            </div>
          </div>

          {/* BOTTOM ROW: Recent Order History Table UI */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-2xs">
            {/* Section Card Title Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900 tracking-wide">
                Recent Order History
              </h3>
              <button className="text-[#00b207] hover:text-[#009906] text-sm font-semibold transition-colors">
                View All
              </button>
            </div>

            {/* Table Layout Column Headers */}
            <div className="grid grid-cols-12 bg-white border-b border-gray-200 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 border-2 border-[#1e90ff]">
              <div className="col-span-2">Order ID</div>
              <div className="col-span-3">Date</div>
              <div className="col-span-3">Total</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right"></div>
            </div>

            {/* Table Content Rows Wrapper */}
            <div className="divide-y divide-gray-100 bg-white">
              {orders.map((order, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center px-6 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
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
                  <div className="col-span-2 capitalize text-gray-600 font-light">
                    {order.status}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
