"use client";
import OrderHistory from "@/app/Components/OrderHistory/OrderHistroy";

import { Button } from "@heroui/react";
import React from "react";
import { useRouter } from "next/navigation";
const OrderHistoryPage = () => {
  const router = useRouter();
  return (
    <div>
      <OrderHistory></OrderHistory>
    </div>
  );
};

export default OrderHistoryPage;
