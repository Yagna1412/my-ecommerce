import React, { useContext } from "react";
import { CartContext } from "../Components/CreateContext";
import { AcData, BookData, ComputerData, FurnitureData, MenswearData, WomanData } from "../Data";

const allProducts = [
  ...AcData,
  ...BookData,
  ...ComputerData,
  ...FurnitureData,
  ...MenswearData,
  ...WomanData,
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ Adds product to cart
    // DO NOT navigate anywhere
  };

  return (
    <div className="shop-container">
      {allProducts.map((product) => (
        <div key={`${product.product}-${product.id}`} className="product-card">
          <img
            src={product.image}
            alt={product.model || product.title || product.type}
            width="200"
          />
          <h3>{product.model || product.title || product.type}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
