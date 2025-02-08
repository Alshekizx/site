"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import LoginHeader from "./loginHeader";
import { useAuth } from "app/authContext"; 

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track authentication status
  const [user, setUser] = useState<{ profileImage?: string } | null>(null); // User state
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useAuth(); // Only calling useAuth() without destructuring unused values

  useEffect(() => {
    // Simulating user data fetch (Replace with actual API call or localStorage retrieval)
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    setIsLoggedIn(false); // Correctly update the login state
    setUser(null); // Clear user data
    router.push("/authentication/login"); // Redirect to login page
  };

  if (!isLoggedIn) {
    return <LoginHeader />; // Show LoginHeader when logged out
  }

  return (
    <header className="bg-primary px-6 sm:px-12 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center h-16">
          {/* Logo */}
          <div className="relative w-24 h-12">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain rounded-lg"
              />
            </Link>
          </div>

          <div className="flex items-center w-full lg:w-1/2 justify-between space-x-4">
            <Navbar />

            {/* Profile */}
            <div className="flex items-center space-x-4">
              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={handleProfileToggle}
                  className="flex items-center focus:outline-none"
                >
                  <Image
                    src={user?.profileImage || "/images/dafaultImage.jpg"}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full border border-gray-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/defaultImage.jpg"; // Fallback if image fails to load
                    }}
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-transform transform scale-100">
                    <Link
                      href="/views/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>

                    <Link
                      href="/views/setting"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      className="block px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;