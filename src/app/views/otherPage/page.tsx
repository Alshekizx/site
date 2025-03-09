"use client";
import { useState } from "react";
import { Cloth2ndCard } from "@/app/component/cards/clothCard";
import { newArrivalItems } from "@/page/api/data";
import FilterButton from "@/app/component/filter";

const OtherPage = () => {

   const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
    // Filter only items that are new and match the selected category
    const filteredItems = newArrivalItems.filter(
      (item) =>  (selectedCategory === "All" || item.category === selectedCategory)
    );
  
   

  return (
    <div className=" flex flex-col gap-10 p-4">
    <div className="relative flex justify-between ">
        <div>
            <p>Home/<span>New Season Clothing</span></p>
            <h1>New Season Clothing</h1>
        </div>
        <FilterButton/>
    </div>

    <div className="flex flex-wrap justify-start space-x-4 ">
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

      <div className="relative w-full">
  <div className="pt-4" id="cardContainer">
    <div className="flex flex-wrap justify-center gap-2 w-full">
      {filteredItems.map((item, index) => (
        <Cloth2ndCard key={index} {...item} />
      ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default OtherPage;
