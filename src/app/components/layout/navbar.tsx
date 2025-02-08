"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setHoveredDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav >
      <div className="flex justify-between items-center ">

        {/* Mobile Menu Toggle */}
        <button
        className="md:hidden focus:outline-none "
        onClick={toggleMobileMenu}
        >
        {isMobileMenuOpen ? (
        <XMarkIcon className="w-6 h-6 text-gray-100" />
        ) : (
        <Bars3Icon className="w-6 h-6 text-gray-100" />
        )}
        </button>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-100 hover:text-accentRed">
            Home
          </Link>

          <Link href="/views/shop/allProducts" className="text-gray-100 hover:text-accentRed">
          Shop
          </Link>

      
         
          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-100 hover:text-accentRed focus:outline-none">
              About
            </button>
            {hoveredDropdown === "about" && (
              <div className="absolute left-0 mt-0 w-48 bg-primary shadow-lg rounded-md">
                <Link
                  href="/views/about/ourStory"
                  className="block px-4 py-2 text-gray-100 hover:text-accentRed"
                >
                  Our Story
                </Link>
                <Link
                  href="/views/about/impactReports"
                  className="block px-4 py-2 text-gray-100 hover:text-accentRed"
                >
                  Impact Reports
                </Link>
                <Link
                  href="/views/about/sustainability"
                  className="block px-4 py-2 text-gray-100 hover:text-accentRed"
                >
                  Sustainability
                </Link>
                <Link
                  href="/views/about/charitableInitiatives"
                  className="block px-4 py-2 text-gray-100 hover:text-accentRed"
                >
                  Charitable Initiatives
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-100 hover:text-accentRed focus:outline-none">
              Blog/News
            </button>
            {hoveredDropdown === "blog" && (
              <div className="absolute left-0 mt-0 w-48 bg-primary shadow-lg rounded-md">
                <Link
                  href="/views/blog/latestStories"
                  className="block px-4 py-2 text-gray-100 hover:text-accentRed"
                >
                  Latest Stories
                </Link>
                <Link
                  href="/views/blog/ourEvents"
                  className="block px-4 py-2 text-gray-100 hover:text-accentRed"
                >
                  Our Events
                </Link>
              </div>
            )}
          </div>

          <Link href="/views/contact" className="text-gray-100 hover:text-accentRed">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 top-[-210%] w-[100vh] mt-[200px] bg-primary shadow-lg">
          <div className="px-4 py-6">
            <Link href="/" className="block text-gray-100 hover:text-accentRed">
              Home
            </Link>

            {/* Shop Dropdown */}
            <div>
              <button
                className="w-full text-left text-gray-100 hover:text-accentRed focus:outline-none"
                onClick={() =>
                  setHoveredDropdown(hoveredDropdown === "shop" ? null : "shop")
                }
              >
                Shop
              </button>
              {hoveredDropdown === "shop" && (
                <div className="mt-2 space-y-2">
                  <Link
                    href="/views/shop/allProducts"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/views/shop/newArrival"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/views/shop/brandedApparel"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Branded Apparel
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div>
              <button
                className="w-full text-left text-gray-100 hover:text-accentRed focus:outline-none"
                onClick={() =>
                  setHoveredDropdown(hoveredDropdown === "about" ? null : "about")
                }
              >
                About
              </button>
              {hoveredDropdown === "about" && (
                <div className="mt-2 space-y-2">
                  <Link
                    href="/views/about/ourStory"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/views/about/impactReports"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Impact Reports
                  </Link>
                  <Link
                    href="/views/about/sustainability"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/views/about/charitableInitiatives"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Charitable Initiatives
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div>
              <button
                className="w-full text-left text-gray-100 hover:text-accentRed focus:outline-none"
                onClick={() =>
                  setHoveredDropdown(hoveredDropdown === "blog" ? null : "blog")
                }
              >
                Blog/News
              </button>
              {hoveredDropdown === "blog" && (
                <div className="mt-2 space-y-2">
                  <Link
                    href="/views/blog/latestStories"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Latest Stories
                  </Link>
                  <Link
                    href="/views/blog/events"
                    className="block px-4 text-gray-100 hover:bg-gray-700"
                  >
                    Our Events
                  </Link>
                </div>
              )}
            </div>

            <Link href="/views/contact" className="block text-gray-100 hover:text-accentRed">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;