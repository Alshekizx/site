"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Navbar from "./navbar";

const LoginHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        // If needed, you can implement profile dropdown close logic here
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-primary px-6 sm:px-12 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo (hidden on small screens) */}
        <div className="relative w-24 h-12 hidden lg:block">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain rounded-lg"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          ☰ {/* Hamburger icon */}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-primary shadow-md lg:hidden">
            <Navbar />
          </div>
        )}

        {/* Navbar and Login/SignUp */}
        <div className="hidden lg:flex items-center justify-between w-1/2">
          {/* Navbar */}
          <Navbar />

          {/* Login/SignUp Button */}
          <button
            onClick={() => router.push("/authentication/login")}
            className="text-white bg-accentRed hover:bg-opacity-70 px-4 py-2 rounded"
          >
            Login/SignUp
          </button>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;