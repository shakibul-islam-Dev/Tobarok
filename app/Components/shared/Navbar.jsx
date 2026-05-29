"use client";
import React, { useState } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 2. Login handle krar function
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 3. Logout handle krar function
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-[10%] py-4 flex items-center justify-between font-sans">
      {/* Brand Logo */}
      <a href="#" className="text-2xl font-bold text-black tracking-wide">
        Tobarok
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-12 text-base text-black">
        <li>
          <a
            href="#"
            className="relative font-normal pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:height-[2px] after:bg-black"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline underline-offset-4">
            Sign Up
          </a>
        </li>
      </ul>

      {/* Right Side Actions (Search & Icons) */}
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        <div className="flex items-center bg-[#f5f5f5] px-3 py-2 rounded-md w-48 lg:w-64">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
          />
          <Search className="w-5 h-5 text-black cursor-pointer ml-2" />
        </div>

        {/* Wishlist Icon */}
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors"
        >
          <Heart className="w-6 h-6" />
        </a>

        {/* Cart Icon with Badge */}
        <a
          href="#"
          className="text-black relative hover:text-gray-600 transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-[#db4444] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </a>

        {/* Profile Icon */}
        <div>
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full cursor-pointer">
                <Avatar>
                  <Avatar.Image
                    alt="Junior Garcia"
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
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">Jane Doe</p>
                      <p className="text-xs leading-none text-muted">
                        jane@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard" textValue="Dashboard">
                    <Label>Dashboard</Label>
                  </Dropdown.Item>

                  <Dropdown.Item id="profile" textValue="Profile">
                    <Label>Profile</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="settings" textValue="Settings">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Settings</Label>
                      <Gear className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="new-project" textValue="New project">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Create Team</Label>
                      <Persons className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>
                      <ArrowRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <User className="w-5 h-5 cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
