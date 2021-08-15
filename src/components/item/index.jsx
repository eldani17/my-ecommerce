import React from "react";

import "./styles.css";

function Item({ item }) {
  const { title, price, pictureUrl } = item;

  return (
    <div className="container-item">
      <div className="card-img">
        <img src={pictureUrl} alt="" />
        <span className="price">${price}</span>
      </div>
      <div className="title-stock">
        <h3 className="title">{title}</h3>
        <span className="stock">(25)</span>
      </div>
      <h6 className="category">BLUE & WHITE</h6>
      <button className="btn-order">ORDER NOW</button>
    </div>
  );
}

export default Item;
