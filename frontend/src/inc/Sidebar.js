import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiMenu, FiBox, FiClipboard, FiLayers, FiBarChart, 
  FiSettings, FiLogOut, FiArchive, FiFileText 
} from "react-icons/fi";

export const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(
        JSON.parse(localStorage.getItem("sidebarExpanded")) || false
    );

    const navigate = useNavigate(); // Navigation function

    useEffect(() => {
        localStorage.setItem("sidebarExpanded", JSON.stringify(isExpanded));
    }, [isExpanded]);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
    <div className={`h-screen text-white flex flex-col transition-all duration-300 ${isExpanded ? "w-52" : "w-16"}`} style={{ backgroundColor: "#007bff" }}>
      {/* Sidebar Toggle Button */}
        <button onClick={toggleSidebar} className="p-4 text-white hover:bg-gray-700">
            <FiMenu size={22} />
        </button>

      {/* Sidebar Items */}
        <nav className="flex-1">
            <SidebarItem icon={<FiBarChart size={22}/>} text="Dashboard" isExpanded={isExpanded} onClick={() => navigate("/home/dashboard")} />
            <SidebarItem icon={<FiBox size={22}/>} text="Products" isExpanded={isExpanded} onClick={() => navigate("/home/products")} />
            <SidebarItem icon={<FiLayers size={22}/>} text="Categories" isExpanded={isExpanded} onClick={() => navigate("/home/categories")} />
            <SidebarItem icon={<FiClipboard size={22}/>} text="Inventory" isExpanded={isExpanded} onClick={() => navigate("/home/inventory")} />
            <SidebarItem icon={<FiArchive size={22}/>} text="Stock Management" isExpanded={isExpanded} onClick={() => navigate("/home/stock-management")} />
            <SidebarItem icon={<FiFileText size={22}/>} text="Reports" isExpanded={isExpanded} onClick={() => navigate("/home/reports")} />
            <SidebarItem icon={<FiSettings size={22}/>} text="Settings" isExpanded={isExpanded} onClick={() => navigate("/home/settings")} />
        </nav>

      {/* Logout Button */}
        <button className="p-4 text-white hover:bg-red-600 flex items-center" onClick={() => navigate("/")}>
            <FiLogOut size={22} className="mr-3" />
            {isExpanded && <span>Logout</span>}
        </button>
    </div>
    );
};

const SidebarItem = ({ icon, text, isExpanded, onClick }) => (
    <div onClick={onClick} className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
        {icon}
        {isExpanded && <span className="ml-3">{text}</span>}
    </div>
);
