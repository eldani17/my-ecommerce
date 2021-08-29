import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./styles.css";

import ItemCount from "./../item-count";
import { CartContext } from "../../context/cartContext";

function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const { title, price, pictureUrl, description, picturesUrl } = item;
  const [quantity, setQuantity] = useState(0);
  const onAdd = (quantity) => {
    setQuantity(quantity);
    addItem(item, quantity);
  };

  return (
    <div className="container-item-detail">
      <div className="container-photos">
        <img className="image-main" src={pictureUrl} alt="" />
        <div className="container-images-secondary">
          {picturesUrl.map((image, index) => (
            <div className="card-img-secondary" key={index}>
              <img src={image.pictureUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="container-information">
        <h1 className="title-detail">{title}</h1>
        <h6 className="category-detail">BLUE & WHITE</h6>
        <span className="price-detail">${price}</span>
        {quantity !== 0 && (
          <NavLink exact to={`/shop/cart`}>
            <button className="btn-primary" component={Link} to="/shop-cart">
              TERMINAR MI COMPRA
            </button>
          </NavLink>
        )}
        {quantity === 0 && <ItemCount stock={20} initial={1} onAdd={onAdd} />}
        <span className="delivery-detail">
          Delivery from Ushuaia, 3-4 week delivery
        </span>
        <span className="label-description">Description</span>
        <p className="content-description">{description}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
