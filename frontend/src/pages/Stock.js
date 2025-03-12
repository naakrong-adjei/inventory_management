import React, { useState, useEffect } from "react";

export const Stock = () => {
    const [stocks, setStocks] = useState([]);

   {/* useEffect(() => {
        // Fetch stock data from API or local storage
        const fetchStockData = async () => {
            try {
                // Example API call
                const response = await fetch("/api/stocks");
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error("Error fetching stock data:", error);
            }
        };
        fetchStockData();
    }, []);*/}

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Product Name</th>
                        <th className="border p-2">Stock Quantity</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.length > 0 ? (
                        stocks.map((stock, index) => (
                            <tr key={index} className="border">
                                <td className="border p-2">{stock.productName}</td>
                                <td className="border p-2">{stock.quantity}</td>
                                <td className="border p-2">{stock.quantity > 0 ? "Available" : "Out of Stock"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center p-4">No stock data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

