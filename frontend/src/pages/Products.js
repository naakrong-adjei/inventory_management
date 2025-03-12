import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

export const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 25 },
    { id: 3, name: "Sofa", category: "Furniture", price: 500 },
    { id: 4, name: "Basketball", category: "Sports", price: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
  });

  const [editingProduct, setEditingProduct] = useState(null);

  // Add new product
  const handleAddProduct = () => {
    if (newProduct.name.trim() && newProduct.category.trim() && newProduct.price) {
      setProducts([...products, { id: Date.now(), ...newProduct }]);
      setNewProduct({ name: "", category: "", price: "" });
    }
  };

  // Edit product
  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  // Save edited product
  const handleSaveProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === editingProduct.id ? editingProduct : p
      )
    );
    setEditingProduct(null);
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      {/* Add Product */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Product name..."
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category..."
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price..."
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded col-span-3 flex items-center justify-center"
        >
          <FiPlus size={20} className="mr-2" /> Add Product
        </button>
      </div>

      {/* Products List */}
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Price ($)</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              {editingProduct?.id === product.id ? (
                <>
                  <td className="p-3">
                    <input
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, name: e.target.value })
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      value={editingProduct.category}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, category: e.target.value })
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, price: e.target.value })
                      }
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="p-3">
                    <button
                      onClick={handleSaveProduct}
                      className="text-green-500 hover:text-green-700 mr-2"
                    >
                      ✅
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">${product.price}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="text-blue-500 hover:text-blue-700 mr-3"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
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
