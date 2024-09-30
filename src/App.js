import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import ProductPage from "./Product/ProductPage";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:productID" element={<ProductPage />} />
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
    </Provider>
  );
};

export default App;
