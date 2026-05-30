"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-end">
      <div
        className={`flex items-center bg-[#f5f5f5] rounded-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "w-40 sm:w-48 lg:w-64 px-3 py-2"
            : "w-0 p-0 overflow-hidden bg-transparent"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
        />
      </div>

      {/* সার্চ আইকন - এটিতে ক্লিক করলে ইনপুট বক্স টগল হবে */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full hover:bg-gray-100 transition-colors ml-1 ${isOpen ? "text-violet-500" : "text-black"}`}
        aria-label="Toggle Search"
      >
        <Search className="w-5 h-5 cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchBar;
