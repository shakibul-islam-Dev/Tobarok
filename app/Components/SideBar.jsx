"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  RefreshCw,
  Heart,
  ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react"; // আইকনগুলো ইমপোর্ট করা না থাকলে করে নিবেন

export default function Sidebar() {
  const pathname = usePathname();

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

  return (
    <div className="flex flex-col gap-1 w-full max-w-[260px] bg-white p-4 h-full border-r border-gray-100">
      {menuItems.map((item) => {
        const Icon = item.icon;

        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all ${
              isActive
                ? "bg-[#edf2ee] text-gray-900 border-l-4 border-[#00b207]"
                : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <Icon
              className={`w-4 h-4 ${isActive ? "text-[#00b207]" : "text-gray-400"}`}
            />
            {item.name}
          </Link>
        );
      })}

      <button
        onClick={() => {
          console.log("Logging out...");
        }}
        className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md text-sm transition-colors mt-2 text-left w-full"
      >
        <LogOut className="w-4 h-4" />
        Log-out
      </button>
    </div>
  );
}
