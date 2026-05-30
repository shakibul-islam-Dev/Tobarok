"use client";

import React, { useState, useEffect } from "react";

const ProfileCard = ({ user, onEdit }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ডেটা না থাকলে বা লোড হতে দেরি হলে সেফটি ফলব্যাক ডেটা
  const currentUser = user || {
    name: "Dianne Russell",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  };

  // SSR-এর সময় Hydration Error ঠেকাতে কঙ্কাল লোডার
  if (!mounted) {
    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white w-full max-w-sm h-64 animate-pulse" />
    );
  }

  return (
    /* 
      w-full max-w-sm: কার্ডটি যেকোনো রেসপন্সিভ গ্রিড বা ফ্লেক্স বক্সের ভেতর 
      ভেঙে না গিয়ে নিজের স্ট্যান্ডার্ড সাইজ ধরে রাখবে।
    */
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-white shadow-2xs w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-xs">
      {/* প্রোফাইল ইমেজ */}
      <img
        src={currentUser.image}
        alt={currentUser.name}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 border-2 border-gray-100 shadow-2xs"
        loading="lazy"
      />

      {/* ডাইনামিক নাম */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide mb-1">
        {currentUser.name}
      </h3>

      {/* ডাইনামিক রোল বা পদবী */}
      <p className="text-xs text-gray-400 mb-4 font-light tracking-wider uppercase">
        {currentUser.role}
      </p>

      {/* এডিট প্রোফাইল বাটন অ্যাকশন */}
      <button
        onClick={onEdit}
        className="text-[#00b207] hover:text-[#009906] font-semibold text-sm transition-colors py-1.5 px-4 rounded-md hover:bg-green-50/50"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
