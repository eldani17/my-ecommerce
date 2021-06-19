import React from "react";

import './styles.css';
import logo from './img/logo.png';
import searchIcon from './img/search-icon.png';
import cartIcon from './img/cart-icon.png';

function Header() {
  return <>
    <header className="container-header">
      <img src={logo} alt="" />
      <div className="container-navbar">
        <nav className="nav-bar">
          {/* 
            utilice tag span porque el ancor me tiraba error 
            al no poner el href, esto es solo de manera momentanea
          */}
          <span className="nav-item nav-active">home</span>
          <span className="nav-item">shop</span>
          <span className="nav-item">about</span>
          <span className="nav-item">blog</span>
          <span className="nav-item">contact us</span>
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
  </>
}

export default Header;
