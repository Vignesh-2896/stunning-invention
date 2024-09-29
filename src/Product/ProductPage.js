import React from "react";
import { Cart, ShowCart } from "../Cart/Cart";
import { SideMenu, ShowMenu } from "../Components/SideMenu";
import HamburgerIcon from "../assets/icons8-menu-48.png";
import Star from "../assets/icons8-star-48-2.png";
import NoStar from "../assets/icons8-star-48.png";
import CartIcon from "../assets/icons8-shopping-cart-24.png";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SetCartData } from "../redux/action";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);
  let { state: productData } = useLocation();
  let starData = displayStar(Math.floor(productData.rating.rate));

  const addToCart = () => {
    let newCartItemValidity = checkValidItem(productData.id);

    if (newCartItemValidity === false) {
      let tempCart = [...cartData];
      let newCartItem = {
        id: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        quantity: document.getElementById("productPage-quantity").value,
      };
      tempCart.push(newCartItem);
      dispatch(SetCartData([...tempCart]));
      ShowCart();
    } else {
      alert("Oops ! You have already added this product in your cart.");
      ShowCart();
    }
  };

  let checkValidItem = (productID) => {
    let productFound = false;
    cartData.forEach(function (item) {
      if (item["id"] === productID) productFound = true;
    });
    return productFound;
  };

  let updateQuantity = (arithmeticSymbol) => {
    let valueInField = parseInt(
      document.getElementById("productPage-quantity").value
    );
    if (arithmeticSymbol === "+")
      document.getElementById("productPage-quantity").value = valueInField + 1;
    else {
      if (valueInField === 1) alert("Minimum quantity is 1 unit.");
      else
        document.getElementById("productPage-quantity").value =
          valueInField - 1;
    }
  };

  let validateQuantity = () => {
    let valueInField = parseInt(
      document.getElementById("productPage-quantity").value
    );
    if (isNaN(valueInField) === true) {
      alert("Please input digits.");
      document.getElementById("productPage-quantity").focus();
      return false;
    } else return true;
  };

  return (
    <div className="productPage">
      <h1 style={{ textAlign: "center" }}>This, That and Everything Else.</h1>
      <div className="productPage-cart">
        <span id="sideMenuBtn" className="sideMenuBtn" onClick={ShowMenu}>
          <img alt="HamburgerIcon" src={HamburgerIcon} />
        </span>
        <SideMenu />
        <span id="cartBtn" className="cartBtn" onClick={ShowCart}>
          <img alt="Cart Icon" src={CartIcon} />
        </span>
        <Cart />
      </div>
      <div className="productPage-main">
        <h3 style={{ textAlign: "center" }}>{productData.title}</h3>
        <div className="productPage-image">
          <img
            alt={productData.title}
            height="300"
            width="300"
            src={productData.image}
          />
        </div>
        <div className="productPage-details">
          <p>{productData.description}</p>
          <p>
            {starData} ({productData.rating.count})
          </p>
          <p>$ {productData.price}</p>
          <label htmlFor="productPage-quantity">Quantity : </label>
          <button onClick={() => updateQuantity("-")} className="quantity">
            &minus;
          </button>
          <input
            type="text"
            name="productPage-quantity"
            id="productPage-quantity"
            className="productPage-quantity"
            value="1"
            onChange={validateQuantity}
          />
          <button onClick={() => updateQuantity("+")} className="quantity">
            +
          </button>
          <button
            id="addCartBtn"
            className="productPage-addBtn"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const displayStar = (ratingNumber) => {
  let tempData = [];
  for (let i = 1; i <= ratingNumber; i++)
    tempData.push(<img key={`star_${i}`} alt="Rating with Star" src={Star} />);
  for (let i = 1; i <= 5 - ratingNumber; i++)
    tempData.push(
      <img key={`nostar_${i}`} alt="Rating without Star" src={NoStar} />
    );
  return tempData;
};

export default ProductPage;
