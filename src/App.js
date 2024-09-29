import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import ProductPage from "./Product/ProductPage";
import { CartContextProvider } from "./Cart/CartContext";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const value = { cartData, setCartData };

  return (
    <CartContextProvider value={value}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={Homepage} />
          <Route exact path="/products/:productID" element={ProductPage} />
          <Route
            path="/products"
            errorElement={
              <h3>
                {" "}
                Welcome to the Void. Head back <Link to="/">home</Link>.
              </h3>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
