import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React from "react";
import App from "./App"
import ProductPage from "./ProductPage";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {App} />
                <Route exact path = "/products/:productID" component = {ProductPage} />
                <Route path = "/products">
                    <h3> Welcome to the Void. Head back <Link to ="/">home</Link>.</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;