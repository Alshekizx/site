"use client";
import { useState, useEffect } from "react";

import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const productTypes = [
  "Bags", "Body", "Dresses", "Footwear", "Jackets and Coats", "Tops",
  "Bottoms", "Skirts", "Hoodies", "Pants", "Shorts", "Tanks and Singlets",
  "Tees", "Accessories"
];

const colors = ["Black", "Blue", "Brown", "Green", "Metallic", "Neutral", "Pink", "Red", "White", "Yellow"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
const priceRanges = ["$50-$150", "$150-$250", "$250-$350", "$350-$450", "$450-$550", "$550-$650", "$650-$750", "$750 and up"];

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<{
    productType: string[];
    color: string[];
    size: string[];
    price: string[];
  }>({
    productType: [],
    color: [],
    size: [],
    price: []
  });

  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value]
      };
    });
  };

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="relative z-100">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 text-primary font-medium hover:opacity-80"
      >
        <FunnelIcon className="w-5 h-5" />
        Filters
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-500 flex justify-end">
          <motion.div
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "50%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-[100vh] overflow-y-auto max-w-lg sm:w-[80%] md:w-[60%] lg:w-[40%] p-6 relative z-1000"
          >
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-200 rounded-md">
                <XMarkIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {[{ label: "Product Type", options: productTypes, key: "productType" },
                { label: "Color", options: colors, key: "color" },
                { label: "Size", options: sizes, key: "size" },
                { label: "Price", options: priceRanges, key: "price" }
              ].map(({ label, options, key }) => (
                <div key={key}>
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="text-md font-medium w-full text-left py-2 border-b"
                  >
                    {label}
                  </button>
                  {dropdowns[key] && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {options.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter(key as keyof typeof filters, option)}
                          className={`px-3 py-1 border rounded-md transition-all ${
                            filters[key as keyof typeof filters].includes(option)
                              ? "bg-gray-800 text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                console.log("Selected Filters:", filters);
                setIsOpen(false);
              }}
              className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-all"
            >
              Apply Filters
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
