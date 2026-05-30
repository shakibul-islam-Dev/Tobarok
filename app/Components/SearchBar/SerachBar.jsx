import React from "react";
import { Search } from "lucide-react";
const SerachBar = () => {
  return (
    <div>
      <div className="flex items-center bg-[#f5f5f5] px-3 py-2 rounded-md w-48 lg:w-64">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
        />
        <Search className="w-5 h-5 text-black cursor-pointer ml-2" />
      </div>
    </div>
  );
};

export default SerachBar;
