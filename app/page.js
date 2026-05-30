import { Button } from "@heroui/react";

import TopCategories from "./Components/Categories/TopCategories";

import HeroSlider from "./Components/Banner/HeroBanner";
import ProductCards from "./Components/ProductCards";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSlider></HeroSlider>
      <TopCategories></TopCategories>
      <ProductCards></ProductCards>
    </div>
  );
}
