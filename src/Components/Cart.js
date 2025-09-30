import React, { useContext } from "react";
import { CartContext } from "./CreateContext";
const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);
return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.empty}>The cart is empty.</p>
      ) : (
        <div style={styles.cartList}>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <h3 style={styles.name}>
                  {item.name || item.model || item.title || item.type}
                </h3>
                <p style={styles.price}>₹{item.price}</p>

                {/* Quantity Controls */}
                <div style={styles.quantityContainer}>
                  <button
                    style={styles.quantityBtn}
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button
                    style={styles.quantityBtn}
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <p style={styles.total}>
                  Total: ₹{item.price * item.quantity}
                </p>

                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    padding: "30px",
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    color: "#333",
  },
  empty: {
    textAlign: "center",
    color: "#777",
    fontSize: "18px",
  },
  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  details: {
    flex: 1,
  },
  name: {
    margin: "0 0 5px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#222",
  },
  price: {
    margin: "5px 0",
    fontSize: "18px",
    color: "#444",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "10px 0",
  },
  quantityBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    transition: "0.2s",
  },
  quantity: {
    fontSize: "18px",
    fontWeight: "600",
  },
  total: {
    margin: "8px 0",
    fontSize: "16px",
    color: "#555",
  },
  removeBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};

export default Cart;