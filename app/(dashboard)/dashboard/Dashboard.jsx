"use client";

import React from "react";
import RecentOrdersHistory from "@/app/Components/RecentOrderHistory";
import BillingCard from "@/app/Components/BillingCard";
import ProfileCard from "@/app/Components/ProfileCard";

const Dashboard = () => {
  return (
    <div className="w-full bg-white font-sans text-black py-6 sm:py-12 px-4 md:px-[5%] lg:px-[10%]">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <ProfileCard />
            <BillingCard />
          </div>

          <RecentOrdersHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
