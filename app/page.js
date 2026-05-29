import { Button } from "@heroui/react";
import { ThemeSwitch } from "./Components/ThemeButton";
import Wishlist from "./Components/Wishlist/Wishlist";
import Testimonial from "./Components/Testimonials/Testimonials";
import ProductCard from "./Components/SmallCard/ProductCard";
import ShoppingCart from "./Components/Shoppincart/ShoppingCart";
import ProductQuickView from "./Components/ProductQuickView/ProductQuickView";
import ProductDescription from "./Components/ProductDescription/ProductDescription";
import OrderDetails from "./Components/OrderHistory/Orderdetails";
import OrderHistory from "./Components/OrderHistory/OrderHistroy";
import Dashboard from "./Components/Dashboard/Dashboard";
import TopCategories from "./Components/Categories/TopCategories";
import HeroBanner from "./Components/Banner/HeroBanner";
import AccountSettings from "./Components/AccountSettings/AccountSettings";

export default function Home() {
  return (
    <div>
      <Wishlist></Wishlist>
      <Testimonial></Testimonial>
      <ProductCard></ProductCard>
      <ShoppingCart></ShoppingCart>
      {/* <ProductQuickView></ProductQuickView> */}
      <ProductDescription></ProductDescription>
      <OrderDetails></OrderDetails>
      <OrderHistory></OrderHistory>

      <TopCategories></TopCategories>
      <HeroBanner></HeroBanner>
      <AccountSettings></AccountSettings>
    </div>
  );
}
