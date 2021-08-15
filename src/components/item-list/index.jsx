import React from "react";

import Item from "../item";
import "./styles.css";

function ItemList({ items }) {
  return (
    <div className="container-list-item">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ItemList;
