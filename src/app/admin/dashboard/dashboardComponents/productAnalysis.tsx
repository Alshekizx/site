"use client";
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, LineElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, LineElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProductAnalysis = () => {
  const product = [
    { category: "Sweatshirts", sales: 5000, stock: 150, trend: "+10%" },
    { category: "Sweatpants", sales: 8000, stock: 180, trend: "+12%" },
    { category: "Hoodies", sales: 7000, stock: 200, trend: "+15%" },
    { category: "T-shirts", sales: 10000, stock: 300, trend: "+18%" },
    { category: "Leggings", sales: 6000, stock: 150, trend: "-5%" },
    { category: "Cargo Pants", sales: 7500, stock: 120, trend: "+20%" },
    { category: "Bags", sales: 4000, stock: 100, trend: "-3%" },
    { category: "Accessories", sales: 9000, stock: 200, trend: "+14%" },
  ];

  const productData = {
    labels: product.map(item => item.category),
    datasets: [
      {
        label: "Product Sales Breakdown",
        data: product.map(item => item.sales),
        backgroundColor: [
          "#FFD166", "#FF6B6B", "#83C5BE", "#28a745", "#FF9F40", 
          "#A8DADC", "#FF6B6B", "#28a745"
        ],
      },
    ],
  };

  const salesTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales Trend ($)",
        data: [2000, 3000, 2500, 4000, 3500, 4500, 5000, 5500, 6000, 7000, 7500, 8000],
        backgroundColor: "#83C5BE",
        borderColor: "#83C5BE",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-lg font-bold mb-4">Product Performance Overview</h3>
      
      {/* Product Sales Breakdown Bar Chart */}
      <div style={{ height: "300px", flex: "1 1 100%" }}>
        <Bar data={productData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      
      {/* Sales Trend Line Chart */}
      <div style={{ height: "300px", flex: "1 1 100%" }} className="mt-6 md:mt-0 md:ml-6">
        <Line data={salesTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      
      {/* Product Details Table */}
      <table className="w-full table-auto border-collapse mt-6">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Product Category</th>
            <th className="p-2 border">Sales ($)</th>
            <th className="p-2 border">Stock Level</th>
            <th className="p-2 border">Trend</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border">{item.category}</td>
              <td className="p-2 border">${item.sales}</td>
              <td className="p-2 border">{item.stock}</td>
              <td className={`p-2 border ${item.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{item.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductAnalysis;
