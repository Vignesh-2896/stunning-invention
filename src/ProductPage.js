import React from "react";
import Star from "./assets/icons8-star-48-2.png";
import NoStar from "./assets/icons8-star-48.png";


const ProductPage = (props) => {

    let productData = props.location.state.itemData.item;
    let starData = displayStar(Math.floor(productData.rating.rate));

    return (
        <div className = "productPage">
            <h2>Product Pageee</h2>
            <div className = "productPage-main">
                <h3 style = {{textAlign:"center"}}>{productData.title}</h3>
                <div className = "productPage-image">
                    <img alt = {productData.title} height = "300" width = "300" src = {productData.image} />
                </div>
                <div className = "productPage-details">
                    <p>{productData.description}</p>
                    <p>{starData} ({productData.rating.count})</p>
                    <p>$ {productData.price}</p>
                    <label htmlFor = "">Quantity </label>
                    <select>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                    </select>
                    <button className = "productPage-addBtn">Add to Cart</button>
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