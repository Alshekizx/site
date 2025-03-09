"use client";
import ThreeScene from "./threejs";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {

  const links: string[] = [
    "Welcome To 17K Technologies Limited",
    "Welcome To 17K Technologies Limited",
    "Welcome To 17K Technologies Limited",
    "Welcome To 17K Technologies Limited",
  ];
  

  return (
    <section className="relative bg-primary-500 h-[94vh] overflow-hidden">
      <ThreeScene />

      <div className="w-full absolute bottom-0 bg-primary-800 text-white overflow-hidden py-4">
      <motion.div
        className="flex space-x-10 whitespace-nowrap"
        animate={{ x: [0, -500] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...links, ...links].map((text, index) => (
          <span key={index} className="text-lg font-medium px-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>

      

     
    </section>
  );
};

export default HeroSection;