import React from "react";
import "../styles/CheckoutProduct.css";
import { useAuth } from "../context/GlobalContext";
import starIcon from "../images/icons/star.png";

export default function CheckoutProduct({
  image,
  id,
  title,
  desc,
  price,
  rating,
}) {
  const { dispatch } = useAuth();
  const removeFromCartHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-img" />
      <div className="checkout-product-info">
        <span className="checkout-product-title">{title}</span>
        <span className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <span className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>
                <img src={starIcon} alt="" />
              </span>
            ))}
        </span>
        <button onClick={removeFromCartHandler}>Remove from cart</button>
      </div>
    </div>
  );
}
