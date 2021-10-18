import React from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import { ProductList } from "./pages/ProductList";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Cart />
    </div>
  );
};

export default App;
