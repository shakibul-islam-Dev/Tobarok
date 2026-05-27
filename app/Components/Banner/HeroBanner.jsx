"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="w-full min-h-[500px] md:min-h-[600px] bg-[#edf2ee] rounded-3xl my-6 mx-auto max-w-[1320px] px-6 md:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden font-sans">
      {/* Left Content Column */}
      <div className="flex flex-col items-start max-w-xl z-10 py-12 md:py-0">
        {/* Top Tagline */}
        <span className="text-[#00b207] text-xs font-medium tracking-widest uppercase mb-3">
          Welcome to shopery
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-5">
          Fresh & Healthy <br />
          Organic Food
        </h1>

        {/* Sale Offer Text */}
        <div className="text-xl md:text-2xl text-[#1a1a1a] mb-3 font-normal">
          Sale up to{" "}
          <span className="text-[#ff8a00] font-semibold">30% OFF</span>
        </div>

        {/* Subtitle / Shipping Info */}
        <p className="text-gray-500 text-sm mb-8 font-light">
          Free shipping on all your order. we deliver, you enjoy
        </p>

        {/* Shop Now Button */}
        <button className="bg-[#00b207] text-white px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-3 hover:bg-[#009906] transition-all duration-300 shadow-md hover:shadow-lg group">
          Shop now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Right Image Column */}
      <div className="w-full md:w-[55%] flex items-center justify-center mt-6 md:mt-0 z-10">
        <img
          src="https://i.ibb.co/6wXb7fS/vegetables-basket.png" // ছবির মতো হুবহু ভেজিটেবল বাস্কেটের ট্রান্সপারেন্ট ইমেজ (বিকল্প সোর্স ব্যবহার করতে পারেন)
          alt="Fresh & Healthy Organic Food Basket"
          className="w-full max-w-[580px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* Bottom Slider Dots Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <span className="w-3 h-1.5 bg-[#00b207] rounded-full cursor-pointer"></span>
        <span className="w-1.5 h-1.5 bg-[#b3b3b3] rounded-full cursor-pointer hover:bg-[#00b207] transition-colors"></span>
        <span className="w-1.5 h-1.5 bg-[#b3b3b3] rounded-full cursor-pointer hover:bg-[#00b207] transition-colors"></span>
      </div>
    </div>
  );
};

export default HeroBanner;
