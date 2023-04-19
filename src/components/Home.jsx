import React, { useEffect, useState } from "react";
import homeImg from "../images/homeImg.webp";
import "../styles/Home.css";
import Product from "./Product";

export default function Home() {
  let [products, setproducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setproducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="landing-img">
          <img src={homeImg} alt="" className="home-img" />
        </div>
        <div className="home-row">
          <Product
            id={products[11]?.id}
            img={products[11]?.image}
            price={products[11]?.price}
            title={products[11]?.title}
            desc={products[11]?.description}
            rating={5}
          />
          <Product
            id={products[2]?.id}
            img={products[2]?.image}
            price={products[2]?.price}
            title={products[2]?.title}
            desc={products[2]?.description}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={products[3]?.id}
            img={products[3]?.image}
            price={products[3]?.price}
            title={products[3]?.title}
            desc={products[3]?.description}
            rating={4}
          />
          <Product
            id={products[4]?.id}
            img={products[4]?.image}
            price={products[4]?.price}
            title={products[4]?.title}
            desc={products[4]?.description}
            rating={3}
          />
          <Product
            id={products[5]?.id}
            img={products[5]?.image}
            price={products[5]?.price}
            title={products[5]?.title}
            desc={products[5]?.description}
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id={products[6]?.id}
            img={products[6]?.image}
            price={products[6]?.price}
            title={products[6]?.title}
            desc={products[6]?.description}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
