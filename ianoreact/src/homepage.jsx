import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">DigitalSellers</div>
        <div className="search-bar">
          <select className="dropdown">
            <option>All</option>
            <option>Children</option>
          </select>
          <input type="text" placeholder="Search " className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        <div className="nav-links">
          <span> <a href="#">Hello, sign in</a></span>
          <span> <a href="#">Returns And Orders</a></span>
          <span> <a href="#">Cart</a></span>
          
        </div>
      </header>

      <main className="main-content">
        <div className="carousel">
          <h2>Shop Best Shoes Ever</h2>
          <p>Explore Best Kicks</p>
        </div>

        <div className="categories">
          <div className="category">
            <h3>Gaming accessories</h3>
            <div className="items">
              <span>Headsets</span>
              <span>Keyboards</span>
              <span>Computer mice</span>
              <span>Chairs</span>
            </div>
          </div>

          <div className="category">
            <h3>Shop for your home essentials</h3>
            <div className="items">
              <span>Cleaning Tools</span>
              <span>Home Storage</span>
              <span>Home Decor</span>
              <span>Bedding</span>
            </div>
          </div>

          <div className="category">
            <h3>Shop deals in Fashion</h3>
            <div className="items">
              <span>Jeans under $50</span>
              <span>Tops under $25</span>
              <span>Dresses under $30</span>
              <span>Shoes under $50</span>
            </div>
          </div>

          <div className="category">
            <h3>Get your game on</h3>
            <div className="items">
              <span>Gaming PCs</span>
              <span>Accessories</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
