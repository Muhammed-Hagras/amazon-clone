import React from "react";

import Logo from "../images//login-logo.png";
import { Link } from "react-router-dom";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}
