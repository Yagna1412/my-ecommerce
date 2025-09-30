import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CreateContext";

const Nav = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { cartItemCount } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">ShopEase</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Contact Menu */}
        <li
          className="contact-link"
          onMouseEnter={() => setHoveredMenu("contact")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          Contact
          {hoveredMenu === "contact" && (
            <div className="contact-popup">
              <p>Email: support@shopease.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Address: 123, Main Street, Hyderabad, India</p>
            </div>
          )}
        </li>

        {/* Shop Dropdown */}
        <li
          className="shop-link"
          onMouseEnter={() => setHoveredMenu("shop")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <Link to="/shop">Shop</Link>
          {hoveredMenu === "shop" && (
            <div className="contact-popup">
              <p>AC</p>
              <p>Book</p>
              <p>Furniture</p>
              <p>Computers</p>
              <p>Menswear</p>
              <p>Womanswear</p>
            </div>
          )}
        </li>

        {/* Cart Section */}
        <li className="cart-link">
          <Link to="/cart" className="cart-btn">
            🛒 Cart
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>

          {/* {showNotification && lastAddedProduct && (
            <div className="cart-notification">
              <p>Added to cart!</p>
              <div className="notification-product">
                <div>
                  <p>{lastAddedProduct.model || lastAddedProduct.title || lastAddedProduct.type}</p>
                  <p>₹{lastAddedProduct.price}</p>
                </div>
              </div>
            </div>
          )} */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
