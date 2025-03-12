import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

export const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Furniture" },
    { id: 4, name: "Sports" },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

  // Add new category
  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, { id: Date.now(), name: newCategory }]);
      setNewCategory("");
    }
  };

  // Edit category
  const handleEditCategory = (id, name) => {
    setEditingCategory({ id, name });
  };

  // Save edited category
  const handleSaveCategory = () => {
    setCategories(
      categories.map((cat) =>
        cat.id === editingCategory.id ? { ...cat, name: editingCategory.name } : cat
      )
    );
    setEditingCategory(null);
  };

  // Delete category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>

      {/* Add Category */}
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="New category..."
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 w-full rounded-l-md"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white px-4 rounded-r-md flex items-center"
        >
          <FiPlus size={20} />
        </button>
      </div>

      {/* Categories List */}
      <ul className="bg-white shadow-md rounded-lg p-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex justify-between items-center border-b py-2"
          >
            {editingCategory?.id === category.id ? (
              <input
                type="text"
                value={editingCategory.name}
                onChange={(e) =>
                  setEditingCategory({ ...editingCategory, name: e.target.value })
                }
                className="border p-1 rounded"
              />
            ) : (
              <span>{category.name}</span>
            )}

            <div className="flex items-center gap-3">
              {editingCategory?.id === category.id ? (
                <button
                  onClick={handleSaveCategory}
                  className="text-green-500 hover:text-green-700"
                >
                  ✅
                </button>
              ) : (
                <button
                  onClick={() => handleEditCategory(category.id, category.name)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FiEdit size={18} />
                </button>
              )}
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
