"use client";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, PointElement, Tooltip, Legend } from "chart.js";

// Registering all necessary chart elements
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement, // Ensure PointElement is registered
  Tooltip,
  Legend
);

const SalesAndDonations: React.FC = () => {
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [5000, 7000, 8000, 10000, 12000, 15000, 20000, 25000, 30000, 40000, 45000, 50000],
        backgroundColor: "#83C5BE",
      },
    ],
  };

  const donationData = {
    labels: ["Individual", "Corporate", "Fundraiser"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#FFD166", "#FF6B6B", "#83C5BE"],
      },
    ],
  };

  return (
    <div className="py-6">
      {/* Sales and Donations Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Sales Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Monthly Sales Overview</h3>
          <div style={{ height: '300px' }}>
            <Bar data={salesData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Donations Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Donations Breakdown</h3>
          <div style={{ height: '300px' }}>
            <Pie data={donationData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4">Detailed Statistics</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Percentage</th>
              <th className="p-2 border">Trend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Sales</td>
              <td className="p-2 border">$450,000</td>
              <td className="p-2 border">70%</td>
              <td className="p-2 border text-green-500">+25%</td>
            </tr>
            <tr>
              <td className="p-2 border">Donations</td>
              <td className="p-2 border">$200,000</td>
              <td className="p-2 border">30%</td>
              <td className="p-2 border text-red-500">-5%</td>
            </tr>
            <tr>
              <td className="p-2 border">Fundraisers</td>
              <td className="p-2 border">$50,000</td>
              <td className="p-2 border">10%</td>
              <td className="p-2 border text-green-500">+10%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesAndDonations;