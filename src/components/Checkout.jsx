import { useAuth } from "../context/GlobalContext";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";

export default function Checkout() {
  const { user, cart } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <div>
            <h2 className="checkout-title">Your Shopping Cart</h2>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <p>
                You have no items in your Cart.To buy one or more
                items,click"Add to cart".
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}
