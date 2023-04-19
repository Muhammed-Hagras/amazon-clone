import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalContext";
import CheckoutProduct from "./CheckoutProduct";
import { getCartTotal } from "../context/AppRreducer";
import CurrencyFormat from "react-currency-format";
import { CardElement } from "@stripe/react-stripe-js";
import "../styles/Payment.css";

export default function Payment() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = async (e) => {
    e.preventDefault();
  };
  const { user, cart } = useAuth();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{cart.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Benha, Egypt</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {cart.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <h3>Payment Method</h3>
          <form className="payment-details">
            <div onSubmit={handleSubmit}>
              {/* <CardElement onChange={handleChange} /> */}
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <button type="submit" className="buy-btn">
                <span>Buy Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
