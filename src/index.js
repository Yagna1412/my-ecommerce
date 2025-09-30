import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./Components/CreateContext";
export { AcData } from "./Data/AcData";
export { BookData } from "./Data/BookData";
export { ComputerData } from "./Data/ComputerData";
export { FurnitureData } from "./Data/FurnitureData";
export { MenswearData } from "./Data/MenswearData";
export { WomanData } from "./Data/WomanData";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
