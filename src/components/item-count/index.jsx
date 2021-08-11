import React, { useEffect, useState } from "react";

import "./styles.css";

function ItemCount({ stock, initial, onAdd }) {
  const [stockEnabled, setStockEnabled] = useState(false);
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("useEffect");
    stock >= count ? setStockEnabled(false) : setStockEnabled(true);
  }, []);

  const onIncrement = () => {
    stock >= count + 1 ? setCount(count + 1) : setCount(count);
    stock >= count ? setStockEnabled(false) : setStockEnabled(true);
  };

  const onDecrement = () => {
    count - 1 <= 0 ? setCount(1) : setCount(count - 1);
    stock >= count ? setStockEnabled(false) : setStockEnabled(true);
  };

  return (
    <div className="container-count">
      <div className="container-selector-count">
        <button className="button-count" onClick={() => onDecrement()}>
          -
        </button>
        <span className="number-count">{count}</span>
        <button className="button-count" onClick={() => onIncrement()}>
          +
        </button>
      </div>
      <button
        className="button-add-cart"
        disabled={stockEnabled}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
