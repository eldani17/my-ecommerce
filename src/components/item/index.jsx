import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

function Item({ item }) {
  const { id, title, price, pictureUrl } = item;

  return (
    <div className="container-item">
      <NavLink exact to={`/shop/product/${id}`}>
        <div className="card-img">
          <img src={pictureUrl} alt="" />
          <span className="price">${price}</span>
        </div>
        {/* </NavLink>
      <NavLink exact to={`/shop/product/${id}`}> */}
        <div className="title-stock">
          <h3 className="title">{title}</h3>
          <span className="stock">(25)</span>
        </div>
      </NavLink>
      <h6 className="category">BLUE & WHITE</h6>
      <button className="btn-order">ORDER NOW</button>
    </div>
  );
}

export default Item;
