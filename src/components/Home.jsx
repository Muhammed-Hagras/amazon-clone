import React, { useEffect, useState } from "react";
import homeImg from "../images/homeImg.webp";
import "../styles/Home.css";
import Product from "./Product";
import shortid from "shortid";
import ProductImg1 from "../images/products/1.png";
import ProductImg2 from "../images/products/2.png";
import ProductImg3 from "../images/products/3.png";
import ProductImg4 from "../images/products/4.png";
import ProductImg5 from "../images/products/5.png";
import ProductImg6 from "../images/products/6.png";

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
        {/* <div className="home-row">
          <Product
            id={shortid.generate()}
            image={ProductImg1}
            price={64}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={ProductImg2}
            price={682.95}
            title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={ProductImg3}
            price={449}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={ProductImg4}
            price={229}
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            rating={3}
          />
          <Product
            id={shortid.generate()}
            image={ProductImg5}
            price={239}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={ProductImg6}
            price={(1, 142)}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
            rating={5}
          />
        </div> */}
      </div>
    </div>
  );
}
