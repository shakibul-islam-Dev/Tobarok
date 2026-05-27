"use client";
import React, { useState } from "react";

const TopCategories = () => {
  // ক্যাটাগরি ডেটা লিস্ট
  const categories = [
    {
      id: 1,
      name: "Fresh Fruit",
      image: "https://i.ibb.co/6Y94gD0/fresh-fruit.png",
    },
    {
      id: 2,
      name: "Fresh Vegetables",
      image: "https://i.ibb.co/M93S0p5/fresh-vegetables.png",
    },
    {
      id: 3,
      name: "Meat & Fish",
      image: "https://i.ibb.co/qyG0F8S/meat-fish.png",
    },
    { id: 4, name: "Snacks", image: "https://i.ibb.co/vXbX8zY/snacks.png" },
    {
      id: 5,
      name: "Beverages",
      image: "https://i.ibb.co/vQ1Z59F/beverages.png",
    },
    {
      id: 6,
      name: "Beauty & Health",
      image: "https://i.ibb.co/Y7XmYg2/beauty-health.png",
    },
    {
      id: 7,
      name: "Bread & Bakery",
      image: "https://i.ibb.co/pP9mD0R/bread-bakery.png",
    },
    {
      id: 8,
      name: "Baking Needs",
      image: "https://i.ibb.co/L8zXhXb/baking-needs.png",
    },
    { id: 9, name: "Cooking", image: "https://i.ibb.co/W2f9X8t/cooking.png" },
    {
      id: 10,
      name: "Diabetic Food",
      image: "https://i.ibb.co/f49bX6Y/diabetic-food.png",
    },
    {
      id: 11,
      name: "Dish Detergents",
      image: "https://i.ibb.co/mSRp3H4/dish-detergents.png",
    },
    { id: 12, name: "Oil", image: "https://i.ibb.co/r2F9w6p/oil.png" },
  ];

  // ছবির মতো 'Fresh Vegetables' ক্যাটাগরিটি বাই-ডিফল্ট একটি আলাদা বর্ডার কালার (Active State) দেখাবে
  const [activeCategory, setActiveCategory] = useState(2);

  return (
    <section className="w-full bg-white font-sans text-black py-12 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Top Header / Subtitle */}
        <div className="text-center mb-8">
          <span className="text-[#00b207] text-xs font-semibold uppercase tracking-wider block mb-2">
            Category
          </span>
          <h2 className="text-3xl font-bold text-[#1a1a1a]">
            Shop by Top Categories
          </h2>
        </div>

        {/* Grid Layout (6 Columns on large screens, responsive for mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`bg-white border rounded-lg p-4 flex flex-col items-center justify-between text-center cursor-pointer transition-all duration-300 min-h-[190px] group
                ${
                  activeCategory === category.id
                    ? "border-[#00b207] shadow-[0_4px_15px_rgba(0,178,7,0.1)]"
                    : "border-gray-200 hover:border-[#00b207] hover:shadow-[0_4px_15px_rgba(0,178,7,0.1)]"
                }`}
            >
              {/* Product Image Container */}
              <div className="w-full flex-1 flex items-center justify-center p-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-[95px] max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Category Name */}
              <h3
                className={`text-sm font-medium mt-3 transition-colors duration-300
                  ${
                    activeCategory === category.id || category.id === 2
                      ? "text-[#2c742f]"
                      : "text-gray-800 group-hover:text-[#2c742f]"
                  }`}
              >
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
