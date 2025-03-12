import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus, FiX } from "react-icons/fi";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });

  // Add new product
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price) {
      if (editProduct) {
        setProducts(products.map((p) => (p.id === editProduct.id ? { ...editProduct, ...newProduct } : p)));
        setEditProduct(null);
      } else {
        setProducts([...products, { id: Date.now(), ...newProduct }]);
      }
      setNewProduct({ name: "", category: "", price: "" });
      setShowForm(false);
    }
  };

  // Open edit form
  const handleEditProduct = (product) => {
    setNewProduct(product);
    setEditProduct(product);
    setShowForm(true);
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      {/* Add Product Button */}
      <button
        onClick={() => {
          setNewProduct({ name: "", category: "", price: "" });
          setEditProduct(null);
          setShowForm(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center"
      >
        <FiPlus size={20} className="mr-2" /> Add Product
      </button>

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Price ($)</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-3 text-center text-gray-600">No products found.</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3 flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEditProduct(product)}>
                    <FiEdit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteProduct(product.id)}>
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Add/Edit Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{editProduct ? "Edit Product" : "Add Product"}</h3>
              <FiX size={22} className="cursor-pointer" onClick={() => setShowForm(false)} />
            </div>
            <input
              type="text"
              placeholder="Product name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="border p-2 rounded w-full mb-4"
            />
            <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              {editProduct ? "Update Product" : "Add Product"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
