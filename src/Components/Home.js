import React, { useContext } from "react";
import { CartContext } from "./CreateContext";
// import { useNavigate } from "react-router-dom";
import { AcData, BookData, ComputerData, FurnitureData, MenswearData, WomanData } from "../Data";

const featuredProducts = [
  ...AcData.slice(0, 2),      
  ...BookData.slice(0, 2),
  ...ComputerData.slice(0, 2),
  ...FurnitureData.slice(0, 2),
  ...MenswearData.slice(0, 2),
  ...WomanData.slice(0, 2),
];

const Home = () => {
  const { addToCart } = useContext(CartContext);
 

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>✨ Featured Products</h2>
      <div style={styles.grid}>
        {featuredProducts.map((product) => (
          <div key={`${product.product}-${product.id}`} style={styles.card}>
            <img
              src={product.image}
              alt={product.model || product.title || product.type}
              style={styles.image}
            />
            <h3 style={styles.title}>{product.model || product.title || product.type}</h3>
            <p style={styles.price}>₹{product.price}</p>
            <button
              style={styles.button}
              onClick={() => handleAddToCart(product)}
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Inline CSS styles
const styles = {
  container: {
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "30px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#222",
  },
  price: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "12px",
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Home;
