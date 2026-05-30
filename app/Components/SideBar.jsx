"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  RefreshCw,
  Heart,
  ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Order History", href: "/dashboard/orderhistory", icon: RefreshCw },
    { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
    {
      name: "Shopping Cart",
      href: "/dashboard/shoppingcarts",
      icon: ShoppingBag,
    },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  // SSR Hydration সেফ রাখার জন্য Fallback
  if (!mounted) {
    return (
      <div className="w-full md:w-16 lg:w-[260px] bg-white h-16 md:h-screen border-r border-gray-100 animate-pulse" />
    );
  }

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP & TABLET SIDEBAR (Visible on md screens and above)    */}
      {/* ------------------------------------------------------------- */}
      {/* h-screen কে h-max বা ওপরে-নিচে প্যাডিং দিয়ে ফ্লেক্সিবল রাখা হয়েছে */}
      <div className="hidden md:flex flex-col gap-1 w-full md:w-20 lg:w-[260px] bg-white p-3 lg:p-4 h-screen border-r border-gray-100 sticky top-0 transition-all duration-300">
        {/* Menu Items Loop */}
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3 rounded-md text-sm font-medium transition-all group relative ${
                  isActive
                    ? "bg-[#edf2ee] text-gray-900 border-l-4 border-[#00b207] md:border-l-0 lg:border-l-4"
                    : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 lg:w-4 lg:h-4 shrink-0 ${
                    isActive
                      ? "text-[#00b207]"
                      : "text-gray-400 group-hover:text-gray-900"
                  }`}
                />
                <span className="hidden lg:block transition-opacity duration-200">
                  {item.name}
                </span>

                {/* Tablet Tooltip */}
                <span className="absolute left-16 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none group-hover:md:opacity-100 lg:group-hover:md:opacity-0 transition-opacity z-50 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Logout Button */}
        {/* mt-auto সরিয়ে mt-6 করা হয়েছে যাতে মেনু লিস্টের ঠিক নিচে বসে, একদম নিচে স্ক্রিনের তলায় না চলে যায় */}
        <button
          onClick={() => console.log("Logging out...")}
          className="flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md text-sm transition-colors mt-6 w-full group relative"
        >
          <LogOut className="w-5 h-5 lg:w-4 lg:h-4 shrink-0 text-gray-400 group-hover:text-red-600" />
          <span className="hidden lg:block">Log-out</span>

          {/* Tablet Tooltip */}
          <span className="absolute left-16 bg-red-600 text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none group-hover:md:opacity-100 lg:group-hover:md:opacity-0 transition-opacity z-50 whitespace-nowrap">
            Log-out
          </span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE BOTTOM NAVIGATION (Visible only on mobile screens)    */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 flex items-center justify-around z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 rounded-md min-w-[64px] transition-all ${
                isActive ? "text-[#00b207]" : "text-gray-400"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-[10px] font-medium tracking-tight truncate max-w-[68px]">
                {item.name.split(" ")[0]}
              </span>
            </Link>
          );
        })}

        <button
          onClick={() => console.log("Logging out...")}
          className="flex flex-col items-center justify-center gap-0.5 py-1 px-2.5 text-gray-400 hover:text-red-600 rounded-md min-w-[64px]"
          aria-label="Logout"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span className="text-[10px] font-medium">Exit</span>
        </button>
      </div>
    </>
  );
}
