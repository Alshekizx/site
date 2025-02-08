"use client";

// EventAnalysis.js
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const EventAnalysis = () => {
  const eventData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Event Attendance",
        data: [50, 75, 100, 120, 200, 250, 300, 350, 400, 500, 600, 700],
        backgroundColor: "#83C5BE",
      },
    ],
  };

  const eventRevenueData = {
    labels: ["Seminars", "Workshops", "Fundraisers", "Conferences"],
    datasets: [
      {
        data: [5000, 7000, 8000, 10000],
        backgroundColor: ["#FFD166", "#FF6B6B", "#83C5BE", "#28a745"],
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-lg font-bold mb-4">Event Performance Overview</h3>
      
      {/* Chart Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Attendance Bar Chart */}
        <div className="h-80">
          <Bar data={eventData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Event Revenue Pie Chart */}
        <div className="h-80">
          <Pie data={eventRevenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Event Details Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Event Type</th>
              <th className="p-2 border">Attendance</th>
              <th className="p-2 border">Revenue</th>
              <th className="p-2 border">Growth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Seminars</td>
              <td className="p-2 border">300</td>
              <td className="p-2 border">$5,000</td>
              <td className="p-2 border text-green-500">+20%</td>
            </tr>
            <tr>
              <td className="p-2 border">Workshops</td>
              <td className="p-2 border">150</td>
              <td className="p-2 border">$7,000</td>
              <td className="p-2 border text-green-500">+15%</td>
            </tr>
            <tr>
              <td className="p-2 border">Fundraisers</td>
              <td className="p-2 border">250</td>
              <td className="p-2 border">$8,000</td>
              <td className="p-2 border text-red-500">-5%</td>
            </tr>
            <tr>
              <td className="p-2 border">Conferences</td>
              <td className="p-2 border">400</td>
              <td className="p-2 border">$10,000</td>
              <td className="p-2 border text-green-500">+25%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventAnalysis;