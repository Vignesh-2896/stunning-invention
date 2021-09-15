import React from "react";

const CartItem = (props) => {

    let cartData =  props.cartData;
    let cartFunction = props.cartFunction;

    return (
        <div className = "cart-item" key = {cartData["id"]}>
            <div className = "cart-item-image">
                <img height = "90" width = "90" src = {cartData["image"]} alt = "Cart Item" />
            </div>
            <div className = "cart-item-details">
                <h4 className = "cart-item-title">{cartData["title"]}</h4>
                <button style = {{display:"inline-block"}} className = "quantity" onClick = {() => cartFunction("-",cartData["id"])}>&minus;</button>
                <h4 style = {{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>{cartData["quantity"]}</h4>
                <button className = "quantity" style = {{display:"inline-block"}} onClick = {() => cartFunction("+",cartData["id"])}>+</button>
                <h4>$ {cartData["price"]}</h4>
            </div>
        </div>
    )

}

export default CartItem;