import React from "react";

const ProductItem = (props) => {

    return (
        <div className = "productItem">
            <div className = "productItem-image">
                <img alt = {props.itemData.id} src = {props.itemData.image} height = "200" width = "200" />
            </div>
            <div className = "productItem-details">
                <h3>{props.itemData.title}</h3>
                <h3>${props.itemData.price}</h3>
            </div>
        </div>
    )

}

export default ProductItem;