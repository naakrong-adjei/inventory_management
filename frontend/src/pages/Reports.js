import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export const Reports = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const salesData = [
    { date: "2025-03-09", sales: 3800, orders: 110 },
    { date: "2025-03-10", sales: 4200, orders: 120 },
    { date: "2025-03-11", sales: 5000, orders: 150 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-xl">$50,000</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-xl">1,250</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Best-Selling Product</h2>
          <p className="text-xl">Wireless Headphones</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Out of Stock Items</h2>
          <p className="text-xl">12</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Sales Performance</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="orders" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Reports Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Sales</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Stock Issues</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{data.date}</td>
                <td className="p-3">${data.sales}</td>
                <td className="p-3">{data.orders}</td>
                <td className="p-3">{index === 1 ? 3 : 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Export Options */}
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FiDownload /> Export as CSV
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FiDownload /> Export as PDF
        </button>
      </div>
    </div>
  );
};
