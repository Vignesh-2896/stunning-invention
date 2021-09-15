import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import App from "./App"
import ProductPage from "./Product/ProductPage";
import { CartContextProvider } from "./Cart/CartContext";

const Routes = () => {

    const [cartData, setCartData] = useState([])
    const value = {cartData, setCartData};

    return (
        <CartContextProvider value = {value}>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {App} />
                    <Route exact path = "/products/:productID" component = {ProductPage} />
                    <Route path = "/products">
                        <h3> Welcome to the Void. Head back <Link to ="/">home</Link>.</h3>
                    </Route>
                </Switch>
            </BrowserRouter>
        </CartContextProvider>
    )

}

export default Routes;