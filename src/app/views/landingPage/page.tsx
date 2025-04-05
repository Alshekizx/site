"use client";
import React, { useRef } from "react";
import HeroSection from "./hero";
import AboutUs from "./about";
import Services from "./service";
import CallToAction from "./callToction";
import WhatWeDo from "./whoWeAre";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Header from "../../component/header/header";
import BlogListPage from "./blogList";

const LandingPage = () => {
  // Create refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const blogListPageRef = useRef<HTMLDivElement>(null);
  const callToActionRef = useRef<HTMLDivElement>(null);

  
  const sections = [heroRef, aboutRef, whatWeDoRef, servicesRef,blogListPageRef, callToActionRef];

  // Keep track of current section index
  let currentSectionIndex = 0;

  const scrollToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      sections[currentSectionIndex].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrevSection = () => {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      sections[currentSectionIndex].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div ref={heroRef} className="NewSection"> <Header/><HeroSection /></div>
      <div ref={aboutRef} className="NewSection"><AboutUs /></div>
      <div ref={whatWeDoRef} className="NewSection"><WhatWeDo/></div>
      <div ref={servicesRef} className="NewSection"><Services /></div>
      <div ref={blogListPageRef} className="NewSection"><BlogListPage/></div>
      
      <div ref={callToActionRef} className="NewSection"><CallToAction /></div>



      {/* Scroll Buttons */}
      <div className="fixed m-4 bottom-0 right-0 flex flex-col opacity-80 space-y-2">
        <button
          onClick={scrollToPrevSection}
          className="p-2 rounded-lg bg-secondary-500  hover:bg-primary-500 flex items-center  justify-center w-12 h-12"
        >
          <ChevronUpIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollToNextSection}
          className="p-2 rounded-lg bg-secondary-500 hover:bg-primary-500  flex items-center justify-center w-12 h-12"
        >
          <ChevronDownIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </main>
  );
};

export default LandingPage;