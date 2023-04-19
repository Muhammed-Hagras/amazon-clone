import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../context/AppRreducer";
import { useAuth } from "../context/GlobalContext";
import "../styles/Subtotal.css";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const { cart } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
