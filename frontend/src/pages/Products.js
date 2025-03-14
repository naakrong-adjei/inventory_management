import React, { useState } from "react";
import { FiEdit, FiTrash2, FiPlus, FiX, FiSearch } from "react-icons/fi";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortType, setSortType] = useState("name");
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", stock: "" });

  // Add or update product
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stock) {
      if (editProduct) {
        setProducts(products.map((p) => (p.id === editProduct.id ? { ...editProduct, ...newProduct } : p)));
        setEditProduct(null);
      } else {
        setProducts([...products, { id: Date.now(), ...newProduct }]);
      }
      setNewProduct({ name: "", category: "", price: "", stock: "" });
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

  // Filter & Search Logic
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory ? product.category === filterCategory : true)
    )
    .sort((a, b) => (a[sortType] > b[sortType] ? 1 : -1));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      {/* Search & Filter */}
      <div className="flex space-x-4 mb-4">
        <div className="flex items-center border p-2 rounded w-1/3">
          <FiSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none"
          />
        </div>
        <select onChange={(e) => setFilterCategory(e.target.value)} className="border p-2 rounded">
          <option value="">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select onChange={(e) => setSortType(e.target.value)} className="border p-2 rounded">
          <option value="name">Sort by Name</option>
          <option value="category">Sort by Category</option>
          <option value="price">Sort by Price</option>
          <option value="stock">Sort by Stock</option>
        </select>
      </div>

      {/* Add Product Button */}
      <button
        onClick={() => {
          setNewProduct({ name: "", category: "", price: "", stock: "" });
          setEditProduct(null);
          setShowForm(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center mb-4 hover:bg-blue-700 transition"
      >
        <FiPlus size={20} className="mr-2" /> Add Product
      </button>

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Price ($)</th>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-3 text-center text-gray-600">No products found.</td>
            </tr>
          ) : (
            filteredProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.stock}</td>
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

      {/* Add/Edit Product Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-96 rounded shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{editProduct ? "Edit Product" : "Add Product"}</h3>
              <FiX size={22} className="cursor-pointer" onClick={() => setShowForm(false)} />
            </div>
            <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="border p-2 rounded w-full mb-3" />
            <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="border p-2 rounded w-full mb-3" />
            <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} className="border p-2 rounded w-full mb-3" />
            <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} className="border p-2 rounded w-full mb-4" />
            <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">{editProduct ? "Update" : "Add"}</button>
          </div>
        </div>
      )}
    </div>
  );
};