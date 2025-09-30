import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Components/CreateContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AcData } from "../Data/AcData";
import { BookData } from "../Data/BookData";
import { ComputerData } from "../Data/ComputerData";
import { FurnitureData } from "../Data/FurnitureData";
import { MenswearData } from "../Data/MenswearData";
import { WomanData } from "../Data/WomanData";

const Prod = () => {
  const { addToCart } = useContext(CartContext);

  const categories = {
    AC: AcData,
    Books: BookData,
    Computers: ComputerData,
    Furniture: FurnitureData,
    "Men's Wear": MenswearData,
    "Woman's Wear": WomanData,
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.model || product.title} added to cart!`);
  };

  return (
    <div className="prod-page">
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="proSection">
            {categories[category].map((product) => (
              <div key={`${product.product}-${product.id}`} className="productCard">
                <Link to={`/${product.product.toLowerCase()}/${product.id}`}>
                  <img
                    className="proImg"
                    src={product.image}
                    alt={product.model || product.title}
                  />
                </Link>
                <h3>{product.brand} {product.model || product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ₹{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Prod;
