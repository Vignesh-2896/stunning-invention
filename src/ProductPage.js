import React from "react";
import { useParams } from "react-router";

const ProductPage = () => {


    let productParam = useParams;
    console.log(productParam);

    return (
        <div className = "productPage">
            <h3>Product Pageee</h3>
        </div>
    )
}

export default ProductPage;