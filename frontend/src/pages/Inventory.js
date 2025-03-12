import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus, FiBox } from "react-icons/fi";

export const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", category: "Electronics", stock: 15 },
    { id: 2, name: "T-Shirt", category: "Clothing", stock: 50 },
    { id: 3, name: "Sofa", category: "Furniture", stock: 8 },
    { id: 4, name: "Basketball", category: "Sports", stock: 20 },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    stock: "",
  });

  const [editingItem, setEditingItem] = useState(null);

  // Add new inventory item
  const handleAddItem = () => {
    if (newItem.name.trim() && newItem.category.trim() && newItem.stock) {
      setInventory([...inventory, { id: Date.now(), ...newItem }]);
      setNewItem({ name: "", category: "", stock: "" });
    }
  };

  // Edit inventory item
  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  // Save edited inventory item
  const handleSaveItem = () => {
    setInventory(
      inventory.map((i) =>
        i.id === editingItem.id ? editingItem : i
      )
    );
    setEditingItem(null);
  };

  // Delete inventory item
  const handleDeleteItem = (id) => {
    setInventory(inventory.filter((i) => i.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <FiBox className="mr-2" /> Inventory
      </h2>

      {/* Add Item */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Item name..."
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category..."
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Stock quantity..."
          value={newItem.stock}
          onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded col-span-3 flex items-center justify-center"
        >
          <FiPlus size={20} className="mr-2" /> Add Item
        </button>
      </div>

      {/* Inventory List */}
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Item</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className="border-b">
              {editingItem?.id === item.id ? (
                <>
                  <td className="p-3">
                    <input
                      type="text"
                      value={editingItem.name}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, name: e.target.value })
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      value={editingItem.category}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, category: e.target.value })
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      value={editingItem.stock}
                      onChange={(e) =>
                        setEditingItem({ ...editingItem, stock: e.target.value })
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-3">
                    <button
                      onClick={handleSaveItem}
                      className="text-green-500 hover:text-green-700 mr-2"
                    >
                      ✅
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.stock}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEditItem(item)}
                      className="text-blue-500 hover:text-blue-700 mr-3"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
