import React from "react";
import "../styles/Product.css";

export default function Product({ img, id, title, desc, price }) {
  console.log({ id, img, title, desc, price });
  return (
    <div>
      <p className="product-p">{desc}</p>
      <p className="product-p">{price}</p>
      {/* <img src={img} alt="" /> */}
    </div>
  );
}
