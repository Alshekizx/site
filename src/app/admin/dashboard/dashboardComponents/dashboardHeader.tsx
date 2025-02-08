import React from "react";
import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const AdminDashboardHeader = () => {
  return (
    <main className="bg-secondary text-white p-4 flex items-center justify-between">
      {/* Title Section */}
      <h1 className="text-2xl text-gray-100 font-heading">Admin Dashboard</h1>
      {/* Navbar Section */}
      <nav className="flex items-center space-x-6">
        {/* Home Link */}
        < Link
          href="/home"
          className="flex items-center rounded space-x-2 text-white hover:bg-tertiary2 p-1 transition"
        >
          <FaHome className="text-xl bg-gray-100" />
          <span className="text-gray-100">Home</span>
        </ Link>

        {/* User Profile Link */}
        < Link
          href="/profile"
          className="flex items-center rounded space-x-2 text-white hover:bg-tertiary2 p-1 transition"
        >
          <FaUser className="text-xl  bg-gray-100" />
          <span className="text-gray-100">Profile</span>
        </ Link>

        {/* Logout Link */}
        < Link
          href="/logout"
          className="flex items-center rounded space-x-2 hover:bg-tertiary2 p-1 transition"
        >
          <FaSignOutAlt className="text-xl  bg-gray-100" />
          <span className="text-gray-100">Logout</span>
        </ Link>
      </nav>
    </main>
  );
};

export default AdminDashboardHeader;