"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
  // টেস্টমোনিয়াল ডাটা লিস্ট
  const testimonials = [
    {
      id: 1,
      name: "Robert Fox",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      rating: 5,
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      rating: 5,
    },
    {
      id: 3,
      name: "Eleanor Pena",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
      rating: 5,
    },
  ];

  // ছবির মতো মাঝখানের কার্ডটি (Dianne Russell) বাই-ডিফল্ট অ্যাক্টিভ থাকবে
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="w-full bg-[#f4f4f4] font-sans text-black py-16 px-4 md:px-[10%]">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#00b207] text-xs font-semibold uppercase tracking-wider block mb-2">
            Client Testimonial
          </span>
          <h2 className="text-3xl font-bold text-[#1a1a1a]">
            What our Client Says
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`bg-white rounded-lg p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative min-h-[250px]
                ${
                  activeId === item.id
                    ? "border-2 border-[#1e90ff] shadow-lg scale-[1.02] md:scale-105 z-10"
                    : "border border-transparent hover:border-gray-300 shadow-sm"
                }`}
            >
              {/* Quote Icon & Review Text */}
              <div className="flex flex-col gap-4">
                {/* Custom Green Quote SVG/Icon */}
                <div
                  className={`text-4xl font-serif text-[#00b207] opacity-40 leading-none ${activeId === item.id ? "border-dashed border-gray-300" : ""}`}
                >
                  ““
                </div>

                <p
                  className={`text-sm text-gray-600 leading-relaxed font-light ${activeId === item.id ? "border-dashed border-blue-300 p-1 border" : ""}`}
                >
                  {item.review}
                </p>
              </div>

              {/* User Profile & Rating Layout */}
              <div
                className={`flex items-center justify-between mt-6 pt-4 border-t border-gray-100 ${activeId === item.id ? "border-dashed border-blue-300 border-t p-1" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex text-[#ffad33]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
