"use client";

import React, { useState, useEffect, useRef } from "react";

const TopCategories = ({ onCategoryChange }) => {
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "fresh-fruit", name: "Fresh Fruit" },
    { id: "fresh-vegetables", name: "Fresh Vegetables" },
    { id: "meat-fish", name: "Meat & Fish" },
    { id: "snacks", name: "Snacks" },
    { id: "beverages", name: "Beverages" },
    { id: "beauty-health", name: "Beauty & Health" },
    { id: "bread-bakery", name: "Bread & Bakery" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  // স্ক্রোল পজিশন ট্র্যাক করার জন্য কন্টেইনার রেফারেন্স
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCategoryClick = (id, e) => {
    setActiveCategory(id);
    if (onCategoryChange) {
      onCategoryChange(id);
    }

    // মোবাইলে যে ক্যাটাগরিতে ক্লিক করা হবে, সেটি অটোমেটিক টেনে স্ক্রিনের মাঝখানে চলে আসবে
    if (e && e.currentTarget && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const element = e.currentTarget;

      const containerWidth = container.offsetWidth;
      const elementOffsetLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;

      // সেন্টারিং ক্যালকুলেশন
      const scrollPosition =
        elementOffsetLeft - containerWidth / 2 + elementWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth", // স্মুথ অ্যানিমেশন হবে
      });
    }
  };

  if (!mounted) {
    return (
      <div className="w-full h-10 bg-gray-100 animate-pulse rounded-full my-4" />
    );
  }

  return (
    <div className="w-full bg-white py-3 sm:py-5 px-4 md:px-[5%] lg:px-[10%] select-none">
      <div className="max-w-[1320px] mx-auto">
        {/* - overflow-x-auto: মোবাইলে হাত দিয়ে ডানে-বামে ড্র্যাগ বা স্ক্রোল করার মেইন প্রোপার্টি।
          - active:scale-95: মোবাইলে টাচ করলে সুন্দর একটা প্রেসড (Pressed) ইফেক্ট হবে।
          - gap-2 sm:gap-3: টাচ টার্গেট সহজ করার জন্য পারফেক্ট স্পেসিং।
        */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 touch-pan-x scroll-smooth md:flex-wrap md:justify-center"
          style={{
            scrollbarWidth: "none", // Firefox-এ স্ক্রোলবার হাইড করার জন্য
            WebkitOverflowScrolling: "touch", // iOS/Safari-তে মাখনের মতো স্মুথ স্ক্রোলের জন্য
          }}
        >
          {/* Chrome/Safari-তে স্ক্রোলবার লুকানোর ইনলাইন স্টাইল */}
          <style jsx global>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={(e) => handleCategoryClick(category.id, e)}
                className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-200 active:scale-95 shrink-0 cursor-pointer
                  ${
                    isActive
                      ? "bg-[#00b207] text-white border-[#00b207] shadow-2xs font-semibold"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#00b207] hover:text-[#00b207]"
                  }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
