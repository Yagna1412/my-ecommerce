import React, { useContext } from "react";
import { CartContext } from "./CreateContext";
import { Link } from "react-router-dom";
import "./Header.css"; // We'll create some styles

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/shop"><h1>ShopEase</h1></Link>
      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>
    </header>
  );
};

export default Header;
