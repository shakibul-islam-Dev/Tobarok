"use client";

import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import SearchBar from "../SearchBar/SerachBar";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // প্রি-রেন্ডারিং বা SSR-এর সময় ক্লায়েন্ট ও সার্ভার ডেটা ম্যাচ করার জন্য
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "SignUp", path: "/signup" },
  ];

  // Hydration Error প্রতিরোধ করতে মাউন্ট হওয়ার আগে একটি কঙ্কাল (Skeleton/Fallback) রেন্ডার করবে
  if (!mounted) {
    return (
      <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-[10%] py-4 flex items-center justify-between font-sans h-20">
        <div className="text-2xl font-bold text-black tracking-wide">
          Tobarok
        </div>
        <div className="w-24 h-6 bg-gray-100 animate-pulse rounded"></div>
      </nav>
    );
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-[10%] py-4 flex items-center justify-between font-sans relative z-50">
      {/* Brand Logo & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <Link href="/" className="text-2xl font-bold text-black tracking-wide">
          Tobarok
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-base text-black">
        {navlinks.map((link) => (
          <motion.div
            key={link.path}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.path}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Search Bar (Desktop) */}
        <div className="hidden sm:block">
          <SearchBar />
        </div>

        <div className="text-sm font-medium hidden sm:block cursor-pointer hover:text-violet-500 transition-colors">
          Rewards
        </div>

        {/* Wishlist Icon */}
        <Link
          href="/wishlist"
          className="text-black hover:text-violet-500 transition-colors"
        >
          <Heart className="w-5 h-5 md:w-6 md:h-6" />
        </Link>

        {/* Cart Icon with Badge */}
        <Link
          href="/cart"
          className="text-black relative hover:text-violet-500 transition-colors"
        >
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#db4444] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>

        {/* Profile Dropdown / Login Icon */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full cursor-pointer">
                <Avatar size="sm" className="w-8 h-8 md:w-10 md:h-10">
                  <Avatar.Image
                    alt="User Avatar"
                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                  />
                  <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image
                        alt="Jane"
                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                      />
                      <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-sm leading-5 font-medium">Jane Doe</p>
                      <p className="text-xs text-neutral-400">
                        jane@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Link href="/dashboard" className="w-full block">
                      <Label className="cursor-pointer">Dashboard</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="profile" textValue="Profile">
                    <Link href="/profile" className="w-full block">
                      <Label className="cursor-pointer">Profile</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="settings" textValue="Settings">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Link href="/settings" className="grow">
                        <Label className="cursor-pointer">Settings</Label>
                      </Link>
                      <Gear className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item id="new-project" textValue="New project">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Link href="/create-team" className="grow">
                        <Label className="cursor-pointer">Create Team</Label>
                      </Link>
                      <Persons className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                    onClick={handleLogout}
                  >
                    <div className="flex w-full items-center justify-between gap-2 cursor-pointer">
                      <Label className="text-danger cursor-pointer">
                        Log Out
                      </Label>
                      <ArrowRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <User
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
              onClick={() => setIsLoggedIn(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Responsive Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {/* Search Bar inside Mobile Menu */}
            <div className="block sm:hidden w-full">
              <SearchBar />
            </div>

            {navlinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-600 hover:text-violet-500 py-2 border-b border-gray-50 last:border-none transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="text-base font-medium text-neutral-600 sm:hidden py-2">
              Rewards
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
