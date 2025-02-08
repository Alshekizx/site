import React, { useState } from "react";
import {
  FaHome,
  FaChevronDown,
  FaChevronUp,
  
} from "react-icons/fa";
import Link from "next/link";

const AdminDashboardSidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>({});

  const handleDropdownToggle = (section: string) => {
    setOpenDropdown((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const getLinkClass = (section: string) =>
    activeSection === section ? "text-primary font-bold" : "text-gray-100";

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Sidebar Navigation */}
      <aside className="bg-primary min-h-screen text-white w-64 p-4">
        <nav className="space-y-4">
          {/* Dashboard Link */}
          < Link
            href="/dashboard"
            className={`flex items-center space-x-2 hover:text-primary transition ${getLinkClass("Dashboard")}`}
            onClick={() => handleSectionClick("Dashboard")}
          >
            <FaHome className="text-lg" />
            <span className="text-gray-100" >Dashboard (Home)</span>
          </ Link>

          {/* Manage Blogs */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-primary text-gray-100 transition"
              onClick={() => handleDropdownToggle("blogs")}
            >
              <h3 className="text-lg text-gray-100  ">Manage Blogs</h3>
              {openDropdown["blogs"] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown["blogs"] && (
              <div className="ml-4 space-y-2">
                < Link
                  href="/admin/dashboard/manageBlog/bloglist/"
                  className={`block transition hover:text-primary ${getLinkClass("View Blogs")}`}
                  onClick={() => handleSectionClick("View Blogs")}
                >
                  Blog List
                </ Link>
                < Link
                  href="/admin/dashboard/manageBlog/blogUpload"
                  className={`block transition hover:text-primary ${getLinkClass("Upload Blogs")}`}
                  onClick={() => handleSectionClick("Upload Blogs")}
                >
                  Upload New Blog
                </ Link>
              </div>
            )}
          </div>

          {/* Manage Products */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-primary text-gray-100 transition"
              onClick={() => handleDropdownToggle("products")}
            >
              <h3 className="text-lg text-gray-100 ">Manage Products</h3>
              {openDropdown["products"] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown["products"] && (
              <div className="ml-4 space-y-2">
                < Link
                  href="/products/view"
                  className={`block transition hover:text-primary ${getLinkClass("View Products")}`}
                  onClick={() => handleSectionClick("View Products")}
                >
                  View Products
                </ Link>
                < Link
                  href="/products/upload"
                  className={`block transition hover:text-primary ${getLinkClass("Upload Products")}`}
                  onClick={() => handleSectionClick("Upload Products")}
                >
                  Upload New Product
                </ Link>
              </div>
            )}
          </div>

          {/* Manage Events */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-primary text-gray-100 transition"
              onClick={() => handleDropdownToggle("events")}
            >
              <h3 className="text-lg text-gray-100">Manage Events</h3>
              {openDropdown["events"] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown["events"] && (
              <div className="ml-4 space-y-2">
                < Link
                  href="/events/view"
                  className={`block transition hover:text-primary ${getLinkClass("View Events")}`}
                  onClick={() => handleSectionClick("View Events")}
                >
                  View Events
                </ Link>
                < Link
                  href="/events/upload"
                  className={`block transition hover:text-primary ${getLinkClass("Upload Events")}`}
                  onClick={() => handleSectionClick("Upload Events")}
                >
                  Upload New Event
                </ Link>
              </div>
            )}
          </div>

          {/* Statistics */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-primary text-gray-100 transition"
              onClick={() => handleDropdownToggle("statistics")}
            >
              <h3 className="text-lg text-gray-100">Statistics</h3>
              {openDropdown["statistics"] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openDropdown["statistics"] && (
              <div className="ml-4 space-y-2">
                < Link
                  href="/statistics/sales"
                  className={`block transition hover:text-primary ${getLinkClass("Sales Statistics")}`}
                  onClick={() => handleSectionClick("Sales Statistics")}
                >
                  Sales Statistics
                </ Link>
                < Link
                  href="/statistics/donations"
                  className={`block transition hover:text-primary ${getLinkClass("Donation Statistics")}`}
                  onClick={() => handleSectionClick("Donation Statistics")}
                >
                  Donation Statistics
                </ Link>
                < Link
                  href="/products/available"
                  className={`block transition hover:text-primary ${getLinkClass("Available Product List")}`}
                  onClick={() => handleSectionClick("Available Product List")}
                >
                  Available Product List
                </ Link>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default AdminDashboardSidebar;
