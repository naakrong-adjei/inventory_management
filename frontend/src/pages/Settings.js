import React, { useState } from "react";
import { FiUser,  FiCamera, FiSave, FiEye, FiEyeOff } from "react-icons/fi";

export const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [about, setAbout] = useState("Hey there! I am using this app.");
  const [profilePic, setProfilePic] = useState(null);
  const [settings, setSettings] = useState({
    username: "admin",
    email: "admin@example.com",
    password: "",
    confirmPassword: "",
  });

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSaveSettings = () => {
    if (settings.password !== settings.confirmPassword) {
      setSuccessMessage("❌ Passwords do not match!");
      return;
    }
    setSuccessMessage("✅ Settings saved successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className={`p-6 min-h-screen `}>
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <FiUser className="mr-2" /> Settings
      </h2>
      {/* Profile Settings */}
      <div className={`p-4 shadow-md rounded-lg mb-6`}>
        <h3 className="text-lg font-semibold mb-3">Profile Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2 rounded w-full bg-transparent"
          />
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded w-full bg-transparent"
          />
        </div>
      </div>
      {/* Profile Settings */}
      <div className="p-4 shadow-md rounded-lg bg-white text-black mb-6">
        <h3 className="text-lg font-semibold mb-3">Profile</h3>
        <div className="flex items-center mb-3">
          <label className="relative cursor-pointer">
            <input type="file" accept="image/*" className="hidden" onChange={handleProfilePicChange} />
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="w-16 h-16 rounded-full" />
            ) : (
              <FiCamera className="w-16 h-16 text-gray-500 border rounded-full p-4" />
            )}
          </label>
          <div className="ml-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded w-full" />
            <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} className="border p-2 rounded w-full mt-2" />
          </div>
        </div>
      </div>

      {/* Password Settings */}
      <div className={`p-4 shadow-md rounded-lg mb-6 `}>
        <h3 className="text-lg font-semibold mb-3">Change Password</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={settings.password}
              onChange={handleChange}
              placeholder="New Password"
              className="border p-2 rounded w-full bg-transparent pr-10"
            />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          <div className="relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              value={settings.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="border p-2 rounded w-full bg-transparent pr-10"
            />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>
      </div>

       {/* Save Button */}
      <button
        onClick={handleSaveSettings}
        className="bg-blue-500 text-white px-6 py-2 rounded flex items-center transition hover:bg-blue-600"
      >
        <FiSave className="mr-2" /> Save Changes
      </button>

      {/* Success Message */}
      {successMessage && (
        <div className={`mt-4 p-2 rounded-lg ${successMessage.includes("❌") ? "bg-red-500" : "bg-green-500"} text-white`}>
          {successMessage}
        </div>
      )}
      
    </div>
      
  
  
  );
};