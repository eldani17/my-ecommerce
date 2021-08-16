import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";
import searchIcon from "./img/search-icon.png";
import cartIcon from "./img/cart-icon.png";
import CartWidget from "../cart-widget/index";

function Navbar() {
  return (
    <div className="container">
      <header className="container-header">
        <CartWidget />
        <div className="container-navbar">
          <nav>
            <ul className="nav-bar">
              <li>
                <NavLink
                  exact
                  to={`/`}
                  className="nav-item"
                  activeClassName="nav-active"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/shop`}
                  className="nav-item"
                  activeClassName="nav-active"
                >
                  shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/about`}
                  className="nav-item"
                  activeClassName="nav-active"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/blog`}
                  className="nav-item"
                  activeClassName="nav-active"
                >
                  blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/contact-us`}
                  className="nav-item"
                  activeClassName="nav-active"
                >
                  contact us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar-actions">
          <img src={searchIcon} alt="" />
          <div className="container-cart">
            <img src={cartIcon} alt="" />
            <div className="position-cart-number">
              <span className="cart-number">5</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
