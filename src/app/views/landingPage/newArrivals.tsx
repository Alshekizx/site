"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // Importing arrow icons
import { ClothCard } from "@/app/component/cards/clothCard";
import { newArrivalItems } from "@/page/api/data";

const NewArrival = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems = selectedCategory === "All"
    ? newArrivalItems
    : newArrivalItems.filter(item => item.category === selectedCategory);

  // Handle scrolling through the cards
  const scroll = (direction: string) => {
    const container = document.getElementById("cardContainer");
    if (container) {
      const scrollAmount = direction === "left" ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col gap-6">
      <h1 className="text-center">New Arrivals</h1>

      <div className="flex flex-wrap justify-start lg:justify-center space-x-4 px-4">
        {["All", "Hoodies", "Tops", "Bottoms", "Accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`${
              selectedCategory === cat ? "buttonSellect text-gray-800" : "button text-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="hidden lg:flex items-center absolute gap-20 top-20 right-20 z-10">
          <button
            className="text-primary "
            onClick={() => scroll("left")}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            className="text-primary "
            onClick={() => scroll("right")}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

      {/* Scrollable container with left and right arrows */}
      <div className="relative w-full">
      <div
          className="w-full overflow-x-auto pt-4 scrollbar-hide"
          id="cardContainer">
          <div className="flex w-fit">
            {filteredItems.map((item, index) => (
              <ClothCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;