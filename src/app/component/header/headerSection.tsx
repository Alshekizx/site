import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger effect slightly after scrolling starts
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full text-text z-50 transition-all duration-500 ease-in-out
        ${isScrolled ? " py-2  top-0" : " top-auto py-4 "}`}
    >
      <div
        className={`container mx-auto flex items-center justify-between p-4 transition-all duration-500`}
      >
        <div
          className={`flex rounded-lg h-30 w-30 overflow-hidden items-center transition-transform duration-500
          ${isScrolled ? "scale-90" : "scale-100"}`}
        >
          <Image 
            src="/images/logo.png" 
            alt="Company Logo" 
            width={50} 
            height={50} 
          />
        </div>

        <div>
          <button className="bg-primary-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;