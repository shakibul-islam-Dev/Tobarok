"use client";
import React, { useState } from "react";
import { Heart, ShoppingCart, User } from "lucide-react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import SearchBar from "../SearchBar/SerachBar";
import Link from "next/link";

import { motion } from "framer-motion";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "SignUp",
      path: "/signup",
    },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-[10%] py-4 flex items-center justify-between font-sans">
      {/* Brand Logo */}
      <div>
        <a href="#" className="text-2xl font-bold text-black tracking-wide">
          Tobarok
        </a>
      </div>
      {/* {Navigation link} */}

      <div className="hidden md:flex items-center gap-12 text-base text-black">
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

      {/* Right Side Actions (Search & Icons) */}
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        <SearchBar></SearchBar>
        <div>Rewards</div>
        {/* Wishlist Icon */}
        <Link
          href={`/wishlist`}
          className="text-black hover:text-gray-600 transition-colors"
        >
          <Heart className="w-6 h-6" />
        </Link>
        {/* Cart Icon with Badge */}
        <Link
          href={`cart`}
          className="text-black relative hover:text-gray-600 transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-[#db4444] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </Link>

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
                    <Link href={`/dashboard`}>
                      <Label>Dashboard</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item id="profile" textValue="Profile">
                    <Link href={``}>
                      <Label>Profile</Label>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="settings" textValue="Settings">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Link href={``}>
                        <Label>Settings</Label>
                      </Link>

                      <Gear className="size-3.5 text-muted" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="new-project" textValue="New project">
                    <div className="flex w-full items-center justify-between gap-2">
                      <Link href={``}>
                        {" "}
                        <Label>Create Team</Label>
                      </Link>

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
