import React from "react";
import "../styles/Product.css";
import { useAuth } from "../context/GlobalContext";
import starIcon from "../images/icons/star.png";

export default function Product({ img, id, title, desc, price, rating }) {
  const { dispatch } = useAuth();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: img,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} alt="" />
            </p>
          ))}
      </div>
      <img src={img} alt="product-img" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
