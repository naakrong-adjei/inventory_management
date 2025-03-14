import React from "react";
import { 
  FiBox, FiLayers, FiClipboard, FiUsers, 
  FiActivity, FiAlertTriangle, FiCheckCircle, FiRefreshCw 
} from "react-icons/fi";

export const Dashboard = () => {
  return (
    <div className="p-8 min-h-screen">
      {/* Dashboard Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Products"
          count="250"
          icon={<FiBox size={32} />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Categories"
          count="12"
          icon={<FiLayers size={32} />}
          color="bg-green-500"
        />
        <DashboardCard
          title="Low Stock"
          count="8"
          icon={<FiClipboard size={32} />}
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Users"
          count="5"
          icon={<FiUsers size={32} />}
          color="bg-red-500"
        />
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="bg-white p-6 shadow-lg rounded-xl">
          <ActivityItem icon={<FiActivity size={20} className="text-blue-500" />} text="New product added: Wireless Mouse" />
          <ActivityItem icon={<FiAlertTriangle size={20} className="text-yellow-500" />} text="Low stock alert: Laptop Charger" />
          <ActivityItem icon={<FiCheckCircle size={20} className="text-green-500" />} text="Order #1023 completed" />
          <ActivityItem icon={<FiRefreshCw size={20} className="text-gray-500" />} text="Stock updated: Gaming Keyboard" />
        </ul>
      </div>
    </div>
  );
};

// Reusable Card Component
const DashboardCard = ({ title, count, icon, color }) => (
  <div className={`p-6 text-white rounded-xl shadow-md flex items-center space-x-4 transition transform hover:scale-105 hover:shadow-lg ${color}`}>
    <div className="bg-white/20 p-3 rounded-full">{icon}</div>
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  </div>
);

// Reusable Activity Item Component
const ActivityItem = ({ icon, text }) => (
  <li className="flex items-center space-x-3 border-b border-gray-200 py-3 last:border-0">
    <span>{icon}</span>
    <p className="text-gray-700">{text}</p>
  </li>
);
