import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";
import logo from "./img/logo.png";

function CartWidget() {
  return (
    <NavLink exact to={`/`}>
      <img src={logo} alt="" />
    </NavLink>
  );
}

export default CartWidget;
