import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/style.scss";
import { AuthContext } from "../../Auth";
import { CartContext } from "../../CartContext";

import app from "../../firebase";

function Nav({ sticky }) {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg text-white">
      <div className="container">
        <div className="navbar-header text-white">
          <Link className="navbar-brand logo text-white" to={"/"}>
            <img
              className="logo-img img-responsive text-white"
              src={require("./assets/images/22141.svg")}
              alt="App Logo" 
            />
            F r u i t
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right ">
          {!currentUser ? (
            <Link className="nav-link text-white" to="/signup">
              Sign in
            </Link>
          ) : (
            <Link
              className="nav-link text-white"
              to=""
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </Link>
          )}

          <li>
            <Link className="nav-link text-white" to="/cart">
              {" "}
              <i className="fas fa-shopping-bag pr-3"></i>My cart{" "}
              <span className="cart-size">( {cart.length} )</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
