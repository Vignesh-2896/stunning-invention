import React, { useContext } from "react";
import Star from "../assets/icons8-star-48-2.png";
import NoStar from "../assets/icons8-star-48.png";
import CartIcon from "../assets/icons8-shopping-cart-24.png"
import { Link } from "react-router-dom";
import CartContext from "../Cart/CartContext";
import { Cart, ShowCart } from "../Cart/Cart";

const ProductPage = (props) => {

    let productData = props.location.state.itemData.item;
    let starData = displayStar(Math.floor(productData.rating.rate));

    const { cartData, setCartData} = useContext(CartContext)
    const value = {cartData, setCartData};

    const addToCart = () => {

        let cartData = {};
        cartData["id"] = productData.id;
        cartData["title"] = productData.title;
        cartData["image"] = productData.image;
        cartData["price"] = productData.price;
        cartData["quantity"] = document.getElementById("productPage-quantity").value;
        
        setCartData(arr => [...arr, cartData])
        ShowCart();
        
    }

    let updateQuantity = (arithmeticSymbol) => {
        let valueInField = parseInt(document.getElementById("productPage-quantity").value);
        if(arithmeticSymbol === "+") document.getElementById("productPage-quantity").value = valueInField + 1;
        else{
            if(valueInField === 1) alert("Minimum quantity is 1 unit.")
            else document.getElementById("productPage-quantity").value = valueInField - 1;
        }
    }

    let validateQuantity = () => {
        let valueInField = parseInt(document.getElementById("productPage-quantity").value);
        if(isNaN(valueInField) === true){
            alert("Please input digits.");
            document.getElementById("productPage-quantity").focus();
            return false;
        } else return true;
    }

    return (
        <div className = "productPage">
            <h2>Product Pageee</h2>
            <Link to = "/">Homepage</Link>
            <div className = "productPage-cart">
                <span id = "cartBtn" className = "cartBtn" onClick = {ShowCart} ><img alt = "Cart Icon" src={CartIcon}/></span>
                <CartContext.Provider value = {value}>
                    <Cart />
                </CartContext.Provider>
            </div>
            <div className = "productPage-main">
                <h3 style = {{textAlign:"center"}}>{productData.title}</h3>
                <div className = "productPage-image">
                    <img alt = {productData.title} height = "300" width = "300" src = {productData.image} />
                </div>
                <div className = "productPage-details">
                    <p>{productData.description}</p>
                    <p>{starData} ({productData.rating.count})</p>
                    <p>$ {productData.price}</p>
                    <label htmlFor = "productPage-quantity">Quantity :  </label>
                    <button onClick = {() => updateQuantity("-")} className = "quantity">&minus;</button><input type = "text" name = "productPage-quantity" id = "productPage-quantity" className = "productPage-quantity" value = "1" onChange = {validateQuantity} /><button onClick = {() => updateQuantity("+")} className = "quantity">+</button>
                    <button id = "addCartBtn" className = "productPage-addBtn" onClick = {addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


const displayStar = (ratingNumber) => {
    let tempData = [];
    for(let i = 1; i <= ratingNumber; i++) tempData.push(<img key = {`star_${i}`} alt = "Rating with Star" src = {Star} />)
    for(let i = 1; i <= 5 - ratingNumber; i++) tempData.push(<img key = {`nostar_${i}`} alt = "Rating without Star" src = {NoStar} />)
    return tempData
}

export default ProductPage;