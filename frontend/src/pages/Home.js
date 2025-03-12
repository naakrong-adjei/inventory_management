import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Sidebar } from '../inc/Sidebar';
import { Dashboard } from "../pages/Dashboard";
import { Products } from "../pages/Products";
import { Categories } from "../pages/Categories";
import { Inventory } from "../pages/Inventory";
import { Stock } from "../pages/Stock";
import { Reports } from "../pages/Reports";
import { Settings } from "../pages/Settings";

export const Home = () => {
  const location = useLocation(); // Get the current URL path
  const page = location.pathname.split("/")[2] || "dashboard"; // Extract page name

    const renderContent = () => {
        switch (page) {
        case "dashboard":
            return <Dashboard />;
        case "products":
            return <Products />;
        case "categories":
            return <Categories />;
        case "inventory":
            return <Inventory />;
        case "stock-management":
            return <Stock/>;
        case "reports":
            return <Reports />;
        case "settings":
            return <Settings />;
        default:
            return <Dashboard />; // Fallback option
        }
    };

    return (
        <div className="flex">
        {/* Sidebar (Stays Fixed) */}
        <Sidebar />

        {/* Main Content (Changes when sidebar item is clicked) */}
        <div className="flex-1 p-4">{renderContent()}</div>
        </div>
    );
};
