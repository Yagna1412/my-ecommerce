// src/App.js
import React from "react";
import Main from "./Components/Main";
import { CartProvider } from "./Components/CreateContext";

function App() {
  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
