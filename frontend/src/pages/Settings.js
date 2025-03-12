import React, { useState } from "react";
import { FiUser, FiLock, FiMoon, FiSun, FiSave } from "react-icons/fi";

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState({
    username: "admin",
    email: "admin@example.com",
    password: "",
    confirmPassword: "",
  });

  // Toggle Dark Mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  // Save Settings
  const handleSaveSettings = () => {
    if (settings.password !== settings.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Settings saved successfully!");
  };

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <FiUser className="mr-2" /> Settings
      </h2>

      {/* Profile Settings */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Profile Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Password Settings */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Change Password</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            placeholder="New Password"
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            name="confirmPassword"
            value={settings.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Preferences</h3>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            {darkMode ? <FiMoon size={20} className="mr-2" /> : <FiSun size={20} className="mr-2" />}
            Dark Mode
          </span>
          <button
            onClick={handleDarkModeToggle}
            className={`px-4 py-2 rounded transition ${
              darkMode ? "bg-yellow-500 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {darkMode ? "Disable" : "Enable"}
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveSettings}
        className="bg-blue-500 text-white px-6 py-2 rounded flex items-center"
      >
        <FiSave className="mr-2" /> Save Changes
      </button>
    </div>
  );
};
