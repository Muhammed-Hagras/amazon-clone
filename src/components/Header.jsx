import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import "../styles/Header.css";
import { useAuth } from "../context/GlobalContext";
import { auth } from "../firebase";

export default function Header() {
  const { user, cart } = useAuth();

  const signOutHandler = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option">
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Geust"}
            </span>
            <span className="header-optionLineTwo" onClick={signOutHandler}>
              {user ? "Sign Out" : " Sign In "}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="" />
            <span className="header-optionLineTwo header-basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
