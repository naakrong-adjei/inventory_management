import React from "react";
import { FiBox, FiLayers, FiClipboard, FiUsers } from "react-icons/fi";

export const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Products"
          count="250"
          icon={<FiBox size={28} />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Categories"
          count="12"
          icon={<FiLayers size={28} />}
          color="bg-green-500"
        />
        <DashboardCard
          title="Low Stock"
          count="8"
          icon={<FiClipboard size={28} />}
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Users"
          count="5"
          icon={<FiUsers size={28} />}
          color="bg-red-500"
        />
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="bg-white p-4 shadow-md rounded-lg">
          <li className="border-b py-2">📦 New product added: "Wireless Mouse"</li>
          <li className="border-b py-2">⚠ Low stock alert: "Laptop Charger"</li>
          <li className="border-b py-2">✅ Order #1023 completed</li>
          <li className="py-2">🔄 Stock updated: "Gaming Keyboard"</li>
        </ul>
      </div>
    </div>
  );
};

// Reusable Card Component
const DashboardCard = ({ title, count, icon, color }) => (
  <div className={`p-6 text-white rounded-lg shadow-md flex items-center ${color}`}>
    <div className="mr-4">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl">{count}</p>
    </div>
  </div>
);
