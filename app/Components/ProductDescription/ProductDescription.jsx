"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { fetchProducts } from '@/lib/dataService';

export default async function Page() {
  // সব ডাটা আনার জন্য
  const products = await fetchProducts(); 

  return (
    <div>
      {products.map(product => (
        <div key={product.productId}>
          <h2>{product.productTitle}</h2>
          <img src={product.image} alt={product.productTitle} />
        </div>
      ))}
    </div>
  );
}
const ProductDescription = () => {
  // ট্যাব স্টেট ম্যানেজমেন্ট
  const [activeTab, setActiveTab] = useState("Descriptions");

  // গ্রিন টিকমার্ক লিস্ট ডাটা
  const features = [
    "100 g of fresh leaves provides.",
    "Aliquam ac est at augue volutpat elementum.",
    "Quisque nec enim eget sapien molestie.",
    "Proin convallis odio volutpat finibus posuere.",
  ];

  return (
    <div className="w-full bg-white font-sans text-black py-10 px-4 md:px-[10%] border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto">
        {/* TAB BUTTONS HEADER */}
        <div className="flex justify-center items-center gap-8 border-b border-gray-200 mb-8 text-sm md:text-base">
          {["Descriptions", "Additional Information", "Customer Feedback"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium transition-all relative ${
                  activeTab === tab
                    ? 'text-gray-900 font-semibold after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:height-[2px] after:bg-[#00b207]'
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* TAB CONTENT DYNAMIC RENDER */}
        {activeTab === "Descriptions" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fadeIn">
            {/* Left Side: Detailed Text Description (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-sm text-gray-500 leading-relaxed font-light">
              <p>
                Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
                elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
                Phasellus nec fringilla elit.
              </p>

              <p>
                Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
                Sed iaculis, metus faucibus elementum tincidunt, turpis mi
                viverra velit, pellentesque tristique neque mi eget nulla. Proin
                luctus elementum neque et pharetra.
              </p>

              {/* Green Checkmark Features List */}
              <ul className="flex flex-col gap-3 mt-2">
                {features.map((text, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-gray-800 font-normal"
                  >
                    {/* Rounded Green Check Icon */}
                    <span className="w-4 h-4 bg-[#00b207] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                      ✓
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <p className="mt-2">
                Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                Nulla blandit eros non turpis lobortis iaculis at ut massa.
              </p>
            </div>

            {/* Right Side: Delivery Man Banner & Feature Badges (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Image/Video Container with Play Button */}
              <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-gray-100 group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" // Placeholder: Replace with actual delivery man image
                  alt="Fresh Delivery"
                  className="w-full h-full object-cover"
                />
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

                {/* Play Button Overlay */}
                <button className="absolute inset-0 m-auto w-14 h-14 bg-[#00b207] hover:bg-[#009906] text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 z-10">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>

              {/* Bottom Feature Box (Discount & Organic Badges) */}
              <div className="border border-gray-200 rounded-lg p-5 grid grid-cols-2 gap-4 bg-white">
                {/* Badge 1: 64% Discount */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00b207]">
                    {/* Custom Tag Icon Mock */}
                    <span className="text-lg font-bold">%</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      64% Discount
                    </h4>
                    <p className="text-[11px] text-gray-400 font-light">
                      Save your 64% money with us
                    </p>
                  </div>
                </div>

                {/* Badge 2: 100% Organic */}
                <div className="flex items-center gap-3 border-l border-gray-100 pl-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#00b207]">
                    {/* Custom Leaf Icon Mock */}
                    <span className="text-base">🍃</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900">
                      100% Organic
                    </h4>
                    <p className="text-[11px] text-gray-400 font-light">
                      100% Organic Vegetables
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder contents for other tabs */}
        {activeTab === "Additional Information" && (
          <div className="py-6 text-sm text-gray-500 animate-fadeIn">
            Additional specifications, weight, and tracking information will be
            displayed here.
          </div>
        )}

        {activeTab === "Customer Feedback" && (
          <div className="py-6 text-sm text-gray-500 animate-fadeIn">
            User ratings and detailed client experiences section.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
