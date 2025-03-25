import React, { useState, useEffect } from "react";
import "./adminPanel.css";

const AdminPanel = () => {
  const [shoes, setShoes] = useState([]);
  const [newShoe, setNewShoe] = useState({ name: "", description: "", price: "", image: "", category: "" });
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ name: "", email: "" });

  useEffect(() => {
    // Fetch existing data (shoes and admins)
    // This would typically be done with API calls
    // Example:
    // fetch('/api/shoes').then(response => response.json()).then(data => setShoes(data));
    setShoes([ // Placeholder data
      { id: 1, name: "Running Shoe", description: "Comfortable running shoe", price: 50, category: "Running", image: "image-url" },
      { id: 2, name: "Sneakers", description: "Casual sneakers", price: 40, category: "Casual", image: "image-url" }
    ]);

    setAdmins([ // Placeholder data
      { id: 1, name: "Admin One", email: "admin1@example.com" },
      { id: 2, name: "Admin Two", email: "admin2@example.com" }
    ]);
  }, []);

  const handleShoeChange = (e) => {
    const { name, value } = e.target;
    setNewShoe((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddShoe = () => {
    // Add shoe logic (typically an API call)
    setShoes((prev) => [...prev, { ...newShoe, id: Date.now() }]);
    setNewShoe({ name: "", description: "", price: "", image: "", category: "" });
  };

  const handleDeleteShoe = (id) => {
    // Delete shoe logic (typically an API call)
    setShoes((prev) => prev.filter((shoe) => shoe.id !== id));
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAdmin = () => {
    // Add admin logic (typically an API call)
    setAdmins((prev) => [...prev, { ...newAdmin, id: Date.now() }]);
    setNewAdmin({ name: "", email: "" });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="section">
        <h2>Manage Shoes</h2>
        <input
          type="text"
          name="name"
          value={newShoe.name}
          onChange={handleShoeChange}
          placeholder="Shoe Name"
        />
        <input
          type="text"
          name="description"
          value={newShoe.description}
          onChange={handleShoeChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={newShoe.price}
          onChange={handleShoeChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="image"
          value={newShoe.image}
          onChange={handleShoeChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="category"
          value={newShoe.category}
          onChange={handleShoeChange}
          placeholder="Category"
        />
        <button onClick={handleAddShoe}>Add Shoe</button>

        <ul>
          {shoes.map((shoe) => (
            <li key={shoe.id}>
              {shoe.name} - ${shoe.price}
              <button onClick={() => handleDeleteShoe(shoe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Manage Admins</h2>
        <input
          type="text"
          name="name"
          value={newAdmin.name}
          onChange={handleAdminChange}
          placeholder="Admin Name"
        />
        <input
          type="email"
          name="email"
          value={newAdmin.email}
          onChange={handleAdminChange}
          placeholder="Admin Email"
        />
        <button onClick={handleAddAdmin}>Add Admin</button>

        <ul>
          {admins.map((admin) => (
            <li key={admin.id}>
              {admin.name} - {admin.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
