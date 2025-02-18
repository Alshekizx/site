"use client";
import React from "react";
import { sectionData } from "@/page/api/data";

const HungerFightingSection: React.FC = () => {
  // Define all section properties in one object
 
  return (
    <section className="text-center flex flex-col mt-10 gap-6">
      {/* Video Wrapper */}
      <div className="flex justify-center">
        <iframe
          className="w-full sm:w-[100%] lg:w-[80%] h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-md shadow-lg"
          src={sectionData.videoUrl}
          title={sectionData.videoTitle}
          allowFullScreen
        ></iframe>
      </div>
      {/* Section Header */}
      <h2 className="text-h3 hidden font-lighter">{sectionData.title}</h2>
    </section>
  );
};

export default HungerFightingSection;