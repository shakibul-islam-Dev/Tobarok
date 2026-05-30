"use client";

import React from "react";

const BillingCard = ({ user, onEdit }) => {
  // যদি কোনো কারণে পেরেন্ট থেকে ইউজার ডেটা না আসে, অ্যাপ যেন ক্র্যাশ না করে সেজন্য একটি সেফ ফলব্যাক ডামি ডেটা
  const currentUser = user || {
    name: "Dianne Russell",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    email: "dianne.russell@gmail.com",
    phone: "(671) 555-0110",
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-2xs flex flex-col justify-between h-full w-full max-w-sm">
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-3">
          Billing Address
        </span>

        {/* ডাইনামিক ইউজার নেম */}
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          {currentUser.name}
        </h4>

        {/* ডাইনামিক অ্যাড্রেস */}
        <p className="text-sm text-gray-500 leading-relaxed font-light mb-2 max-w-xs">
          {currentUser.address}
        </p>

        {/* ডাইনামিক ইমেইল */}
        <p className="text-sm text-gray-800 font-light break-all mb-1">
          {currentUser.email}
        </p>

        {/* ডাইনামিক ফোন নম্বর */}
        <p className="text-sm text-gray-800 font-light">{currentUser.phone}</p>
      </div>

      {/* এডিট বাটন অ্যাকশন */}
      <button
        onClick={onEdit}
        className="text-[#00b207] hover:text-[#009906] font-semibold text-sm transition-colors mt-5 text-left w-max"
      >
        Edit Address
      </button>
    </div>
  );
};

export default BillingCard;
