import TopCategories from "./Components/Categories/TopCategories";
import HeroSlider from "./Components/Banner/HeroBanner";
import ProductCards from "./Components/ProductCards";
import ProductDetail from "./productDetails/ProductDetail";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSlider></HeroSlider>
      <TopCategories></TopCategories>
      <ProductCards></ProductCards>
      <ProductDetail></ProductDetail>
    </div>
  );
}
