import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { SetCartData } from "../redux/action";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    updatePrice();
    updateTotalQuantity();
  }, [cartData]);

  let updateQuantity = (arithmeticSymbol, ID) => {
    let tempData = [...cartData];
    tempData.forEach(function (item, index, object) {
      if (item["id"] === ID) {
        if (arithmeticSymbol === "+")
          item["quantity"] = parseInt(item["quantity"]) + 1;
        else {
          if (Math.abs(item["quantity"]) === 1) object.splice(index, 1);
          else item["quantity"] = parseInt(item["quantity"]) - 1;
        }
      }
    });
    dispatch(SetCartData([...tempData]));
    updatePrice();
  };

  let updateTotalQuantity = () => {
    let tempQuantity = 0;
    cartData.forEach(function (item) {
      tempQuantity += parseInt(item["quantity"]);
    });
    setTotalQuantity(tempQuantity);
  };

  let updatePrice = () => {
    let tempPrice = 0;
    cartData.forEach(function (item) {
      tempPrice += parseFloat(item["price"] * item["quantity"]);
    });
    setTotalPrice(tempPrice);
  };

  return (
    <div className="cart">
      <h3 onClick={CloseCart} className="closeBtn">
        &times;
      </h3>
      <h3 style={{ textAlign: "center" }}> Cart </h3>
      {cartData.map(function (item, index) {
        return (
          <CartItem
            key={item["id"]}
            cartFunction={updateQuantity}
            cartData={item}
          />
        );
      })}
      {cartData.length > 0 ? (
        <div>
          <h2 style={{ textAlign: "left", marginLeft: "40px" }}>
            Total : ${totalPrice} , {totalQuantity} item(s).{" "}
          </h2>
        </div>
      ) : (
        <div>
          <h3> Empty Cart. Add some items !</h3>
        </div>
      )}
    </div>
  );
};

const ShowCart = (pageName) => {
  // Function to display the filter on click of the Filter Icon.

  if (pageName === "homepage") {
    document.getElementsByClassName("categories")[0].style.filter =
      "blur(10px)";
    document.getElementsByClassName("products")[0].style.filter = "blur(10px)";
  } else {
    document.getElementsByClassName("productPage-main")[0].style.filter =
      "blur(10px)";
  }

  document.getElementsByClassName("cart")[0].style.width = "450px";
  document.getElementsByClassName("cart")[0].style.borderLeft =
    "2px solid black";
  document.getElementById("cartBtn").style.display = "none";
};

let CloseCart = () => {
  // Function to hide the filter on click of the Close Icon.

  if (document.getElementsByClassName("categories")[0]) {
    document.getElementsByClassName("categories")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("products")[0].style.filter = "blur(0px)";
  } else {
    document.getElementsByClassName("productPage-main")[0].style.filter =
      "blur(0px)";
  }

  document.getElementsByClassName("cart")[0].style.width = "0px";
  document.getElementsByClassName("cart")[0].style.borderLeft = "none";
  document.getElementById("cartBtn").style.display = "block";
};

export { Cart, ShowCart };
