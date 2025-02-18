"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TopHeader = () => {
  const [activeBrand, setActiveBrand] = useState("Humanness Program");

  return (
    <div className="border-b border-gray-300 p-3 ">
      <div className="container mx-auto gap-6 flex flex-col lg:flex-row items-center">
        {/* Left Section: Brand Switcher */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/3 space-x-4">
          {["Humanness Program", "Miel"].map((brand) => (
            <button
              key={brand}
              className={`px-1 transition-colors duration-300 text-sm md:text-base ${
                activeBrand === brand ? "border-b-2 border-gray-800 text-gray-800" : "border-b-2 border-transparent text-gray-500"
              }`}
              onClick={() => setActiveBrand(brand)}
              aria-label={`Switch to ${brand}`}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="lg:w-2/3 flex w-full justify-end lg:justify-between space-x-4">
          {/* Center Section: Active Brand Name */}
         <div className="absolute left-1/2 transform -translate-x-1/2 text-sm md:text-lg font-semibold">
          {activeBrand}
        </div>

          {/* Right Section: Search, Profile, Cart */}
          <div className="relative flex items-center lg:space-x-4 space-x-2 w-full justify-end ">
            {/* Search Bar: Icon on Mobile, Input on Larger Screens */}
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="lg:hidden">
                <button aria-label="Search p-1 border border-2 border-gray-700">
                  <MagnifyingGlassIcon className="w-5 h-5 p-1 border border-1 rounded-sm border-gray-700 lg:w-6 lg:h-6 text-gray-700 hover:text-gray-800 cursor-pointer transition-colors duration-300" />
                </button>
              </div>
              <div className="hidden lg:block relative">
                <input
                  id="search"
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-400 rounded-full px-10 py-1 focus:outline-none"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2 w-5 h-5  text-gray-500" />
              </div>
            </div>

            <Link href="/profile" aria-label="Profile">
              <UserIcon className="w-5 h-5 p-1 border border-1 rounded-sm border-gray-700 lg:w-6 lg:h-6 text-gray-700 hover:text-gray-800 cursor-pointer transition-colors duration-300" />
            </Link>
            <Link href="/cart" aria-label="Shopping Cart">
              <ShoppingCartIcon className="w-5 h-5 p-1 border border-1 rounded-sm border-gray-700 lg:w-6 lg:h-6 text-gray-700 hover:text-gray-800 cursor-pointer transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;