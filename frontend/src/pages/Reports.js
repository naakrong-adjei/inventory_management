import React from "react";

export const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-xl">$50,000</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-xl">1,250</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Out of Stock Items</h2>
          <p className="text-xl">12</p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
            <tr className="border-t">
              <td className="p-3">2025-03-11</td>
              <td className="p-3">$5,000</td>
              <td className="p-3">150</td>
              <td className="p-3">2</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">2025-03-10</td>
              <td className="p-3">$4,200</td>
              <td className="p-3">120</td>
              <td className="p-3">3</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">2025-03-09</td>
              <td className="p-3">$3,800</td>
              <td className="p-3">110</td>
              <td className="p-3">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
