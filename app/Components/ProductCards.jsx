"use client";

import React, { useState } from "react";
import ProductCard from "./SmallCard/ProductCard";
import ProductQuickView from "../Components/ProductQuickView/ProductQuickView";

const ProductCards = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const dummyProducts = [
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.99,
      originalPrice: 20.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1628773822503-930a85890060?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 2,
      name: "Red Tomato",
      price: 4.5,
      originalPrice: null,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 3,
      name: "Fresh Broccoli",
      price: 8.0,
      originalPrice: 10.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 4,
      name: "Organic Banana",
      price: 3.2,
      originalPrice: null,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=300&auto=format&fit=crop",
      inStock: false,
    },
    {
      id: 5,
      name: "Fresh Sujapuri Mango",
      price: 9.0,
      originalPrice: 12.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 6,
      name: "Red Chili Pepper",
      price: 5.5,
      originalPrice: null,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119cb665?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 7,
      name: "Crunchy Carrots",
      price: 2.99,
      originalPrice: 4.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
    {
      id: 8,
      name: "Fresh Red Apple",
      price: 6.0,
      originalPrice: null,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=300&auto=format&fit=crop",
      inStock: true,
    },
  ];

  const handleOpenQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    );
  };

  return (
    <div className="w-full bg-white py-6 md:py-10 px-4">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 md:gap-6">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={handleOpenQuickView}
            onAddToWishlist={handleAddToWishlist}
            isWishlisted={wishlist.some((item) => item.id === product.id)}
          />
        ))}
      </div>

      {/* মডাল কানেকশন */}
      <ProductQuickView
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={selectedProduct}
        isWishlisted={
          selectedProduct
            ? wishlist.some((item) => item.id === selectedProduct.id)
            : false
        }
        onAddToWishlist={handleAddToWishlist}
      />
    </div>
  );
};

export default ProductCards;
