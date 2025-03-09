"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ClothCardProps } from "@/page/api/data";

const ClothCard: React.FC<ClothCardProps> = ({ name, price, image, colors, link, isNew = false, category }) => {
  const [newCollection,] = useState(isNew);

  return (
    <div className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px]  h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[75%] sm:h-[80%]">
        <Image src={image} alt={name} fill className="object-cover" />
        
        {/* Show New Tag only if newCollection is true */}
        {newCollection && (
          <p className="absolute right-4 top-4 px-2 py-1 text-xs font-bold border-2 border-gray-900 ">
            New
          </p>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex items-start justify-between p-3">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">{name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">{price}</p>
          <p className="hidden text-xs text-gray-500 capitalize">{category}</p>
          {/* Colors */}
          <div className="flex gap-1 ">
            {colors.map((color, index) => (
              <div
                key={index}
                className="h-3 w-3 sm:h-4 sm:w-4 border border-gray-400"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Cart Icon */}
        <Link href={link}>
          <ShoppingCartIcon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 p-1 border border-gray-700 rounded-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

const Cloth2ndCard: React.FC<ClothCardProps> = ({ name, price, image, colors, link, isNew = false, category }) => {
  const [newCollection] = useState(isNew);

  return (
    <div className="flex-grow min-w-[200px] max-w-[300px] sm:min-w-[220px] sm:max-w-[350px] md:min-w-[250px] md:max-w-[400px] lg:w-1/5 xl:w-1/6 h-[450px] sm:h-[500px] md:h-[550px] xl:h-[600px] overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[75%] sm:h-[80%]">
        <Image src={image} alt={name} fill className="object-cover" />
        
        {/* Show New Tag only if newCollection is true */}
        {newCollection && (
          <p className="absolute right-4 top-4 px-2 py-1 text-xs font-bold border-2 border-gray-900 ">
            New
          </p>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex items-start justify-between p-3">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">{name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">{price}</p>
          <p className="hidden text-xs text-gray-500 capitalize">{category}</p>
          {/* Colors */}
          <div className="flex gap-1">
            {colors.map((color, index) => (
              <div
                key={index}
                className="h-3 w-3 sm:h-4 sm:w-4 border border-gray-400"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Cart Icon */}
        <Link href={link}>
          <ShoppingCartIcon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 p-1 border border-gray-700 rounded-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export {ClothCard, Cloth2ndCard};
