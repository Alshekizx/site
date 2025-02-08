"use client";

import React from "react";
import { FaShoppingCart, FaDonate, FaBoxOpen, FaCalendarAlt } from "react-icons/fa";
import AdminDashboardLayout from "./adminDashboardLayout";
import SalesAndDonations from "./dashboardComponents/salesNdDonations";
import EventAnalysis from "./dashboardComponents/eventAnalysis";
import ProductAnalysis from "./dashboardComponents/productAnalysis";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AdminDashboardPage: React.FC = () => {
  const stats: Stat[] = [
    { icon: <FaShoppingCart className="text-primary text-3xl" />, label: "Total Sales", value: "$12,340" },
    { icon: <FaDonate className="text-primary text-3xl" />, label: "Donations", value: "$4,560" },
    { icon: <FaBoxOpen className="text-primary text-3xl" />, label: "Products", value: "120" },
    { icon: <FaCalendarAlt className="text-primary text-3xl" />, label: "Events", value: "8" },
  ];

  return (
    <AdminDashboardLayout>
      <main className="p-6">
        {/* Welcome Message */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Admin!</h1>
          <p className="text-gray-600 mt-2">Here’s an overview of your dashboard.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex items-center p-4 space-x-4 hover:shadow-lg transition"
            >
              <div>{stat.icon}</div>
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <h2 className="text-xl font-bold text-gray-800">{stat.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Sales and Donations */}
        <SalesAndDonations />

        {/* Event and Product Analysis */}
        
          <EventAnalysis />
          <ProductAnalysis />
        
      </main>
    </AdminDashboardLayout>
  );
};

export default AdminDashboardPage;