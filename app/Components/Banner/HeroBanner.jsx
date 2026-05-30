"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Swiper এর অফিশিয়াল স্টাইল শিট ইমপোর্ট
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Unsplash থেকে ক্রপড ও অপ্টিমাইজড ইমেজের ডাইনামিক ডেটা অ্যারে
  const slides = [
    {
      id: 1,
      tagline: "Welcome to shopery",
      title: "Fresh & Healthy Organic Food",
      saleText: "Sale up to",
      discount: "30% OFF",
      subtext: "Free shipping on all your order. we deliver, you enjoy",
      buttonText: "Shop now",
      link: "/shop",
      // তাজা শাকসবজি ও ফলের ঝুড়ির ছবি
      image:
        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      tagline: "Best Quality Everyday",
      title: "100% Raw & Natural Groceries",
      saleText: "Get instant",
      discount: "20% FLAT",
      subtext: "Healthy food choice for a healthy life directly from nature.",
      buttonText: "Discover now",
      link: "/shop",
      // ফ্রেশ সাইট্রাস ও গ্রোসারি আইটেম
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      tagline: "Healthy Lifestyle",
      title: "Farm Fresh Vegetables",
      saleText: "Weekend Special",
      discount: "15% OFF",
      subtext:
        "Organic vegetables harvested daily from local farms to your kitchen.",
      buttonText: "Order Now",
      link: "/shop",
      // অর্গানিক ভেজিটেবল মিক্স ব্যাগ
      image:
        "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      tagline: "Premium Organics",
      title: "Fresh Fruits & Pure Berries",
      saleText: "Flash Sale",
      discount: "25% OFF",
      subtext:
        "Deliciously sweet and vitamin-rich fruits picked at perfect ripeness.",
      buttonText: "Explore More",
      link: "/shop",
      // তাজা স্ট্রবেরি এবং ফলের মিক্স বাটি
      image:
        "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=600&auto=format&fit=crop",
    },
  ];

  if (!mounted) {
    return (
      <div className="w-full bg-white py-6 px-4 md:px-[5%] lg:px-[10%]">
        <div className="w-full h-[500px] md:h-[600px] bg-gray-100 rounded-3xl max-w-[1320px] mx-auto animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-6 px-4 md:px-[5%] lg:px-[10%] select-none">
      <div className="max-w-[1320px] mx-auto relative hero-slider-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          className="w-full rounded-3xl overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full min-h-[520px] md:min-h-[600px] bg-[#edf2ee] px-6 md:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden pt-12 md:pt-0">
                {/* Left Content Column */}
                <div className="flex flex-col items-start max-w-xl z-10 text-left w-full">
                  <span className="text-[#00b207] text-xs font-semibold tracking-widest uppercase mb-3 block">
                    {slide.tagline}
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-4 md:mb-5 tracking-tight">
                    {slide.title}
                  </h1>

                  <div className="text-lg md:text-2xl text-[#1a1a1a] mb-2 font-normal">
                    {slide.saleText}{" "}
                    <span className="text-[#ff8a00] font-bold">
                      {slide.discount}
                    </span>
                  </div>

                  <p className="text-gray-500 text-xs sm:text-sm mb-6 md:mb-8 font-light max-w-md leading-relaxed">
                    {slide.subtext}
                  </p>

                  <Link
                    href={slide.link}
                    className="bg-[#00b207] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2.5 sm:gap-3 hover:bg-[#009906] transition-all duration-300 shadow-sm hover:shadow-md group w-max mb-6 md:mb-0"
                  >
                    {slide.buttonText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Right Image Column */}
                <div className="w-full md:w-[45%] lg:w-[48%] flex items-center justify-center pb-12 md:pb-0 z-10">
                  <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-w-768px) 100vw, 45vw"
                      priority={slide.id === 1} // প্রথম স্লাইডটি ফাস্ট রেন্ডার হওয়ার জন্য priority ট্রু রাখা হয়েছে
                      className="object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Bullet Styles */}
        <style jsx global>{`
          .hero-slider-container .swiper-pagination {
            bottom: 24px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .hero-slider-container .custom-bullet {
            width: 6px !important;
            height: 6px !important;
            background-color: #b3b3b3 !important;
            opacity: 1 !important;
            border-radius: 9999px !important;
            transition: all 0.3s ease !important;
            cursor: pointer;
            margin: 0 !important;
          }
          .hero-slider-container .custom-bullet-active {
            width: 12px !important;
            height: 6px !important;
            background-color: #00b207 !important;
            border-radius: 9999px !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroSlider;
