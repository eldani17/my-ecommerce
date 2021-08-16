import React from "react";

import "./styles.css";

function ItemDetail({ item }) {
  const { title, price, pictureUrl, description, picturesUrl } = item;
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
        <button className="btn-primary">ADD TO CART</button>
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
