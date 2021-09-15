import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import ProductItem from "./Product/ProductItem";
import { Cart, ShowCart } from "./Cart/Cart";
import CartIcon from "./assets/icons8-shopping-cart-24.png"
import CartContext, { CartContextProvider } from "./Cart/CartContext";

const Homepage = () => {

    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isProductLoading, setIsProductLoadng] = useState(false)

    const {cartData, setCartData } = useContext(CartContext)
    const value = {cartData, setCartData}

    useEffect(() => {

        (async () => {
            let response = await fetchProducts("");
            updateProductData(response)


            response = await fetchCategory();
            let tempData = [];
            response.forEach(function(item,index){
                tempData.push(<button className = "categoryItem" onClick = {filterWithCategory} key = {index}>{capitalize(item)}</button>)
            })
            setCategoryData(tempData);
            setIsLoading(false);
        })()

    },[])


    const updateProductData = (tempProductData) => {
        let tempData = [];
        tempProductData.forEach(function(item){
            tempData.push(
            <Link key = {item.id} to = {{pathname:`products/${item.id}`,state:{itemData:{item}}}} >
                <ProductItem itemData = {item} />
            </Link>
            )
        })
        setProductData(tempData);
    }

    const filterWithCategory = async(e) => {
        e.preventDefault();

        let elementList = document.getElementsByClassName("categoryItem")
        for(let item of elementList) item.classList.remove("active")
  
        e.target.className += " active";

        setProductData([])
        setIsProductLoadng(true);

        let requiredCategory = (e.target.innerHTML).toLowerCase();

        let response = await fetchProducts(requiredCategory)
        updateProductData(response)
        setIsProductLoadng(false);
    }

    return (
        <div>
            {isLoading
            ? (<div className = "loaderDiv"><Loader type="TailSpin" color="#00BFFF" height={120} width={120}/></div>)
            : (
                <div className = "homepage">
                    <h1 style = {{textAlign:"center"}}>This, That and Everything Else.</h1>
                    <div className = "productPage-cart">
                        <span id = "cartBtn" className = "cartBtn" onClick = {() => ShowCart("homepage")} ><img alt = "Cart Icon" src={CartIcon}/></span>
                        <CartContextProvider value = {value}>
                            <Cart />
                        </CartContextProvider>
                    </div>
                    <div className = "categories">
                        <h2> Categories </h2>
                        {categoryData.map(function(item){
                            return item;
                        })}
                    </div>
                    {isProductLoading
                    ? (<div className = "loaderDiv"><Loader type="TailSpin" color="#00BFFF" height={120} width={120}/></div>)
                    : (                    
                        <div className = "products">
                            <h2> Products </h2>
                            {productData.map(function(item){
                                return item;
                            })} 
                        </div>
                    )} 
                </div>
            )}
        </div>
    )
}


const fetchProducts = async(categoryRequired) => {

    let url = "https://fakestoreapi.com/products"
    if(categoryRequired) url = `https://fakestoreapi.com/products/category/${categoryRequired}`

    let response = await fetch(url);
    response = await response.json();
    return response;
}


const fetchCategory = async() => {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    response = await response.json();
    return response;
}

function capitalize(strParam){
    return strParam[0].toUpperCase() + strParam.slice(1);
}

export default Homepage;