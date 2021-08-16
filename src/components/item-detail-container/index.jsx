import React, { useEffect, useState } from "react";

import "./styles.css";
import { getProductById } from "../../mocks/products-mock";
import ItemDetail from "../item-detail";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState();
  useEffect(() => {
    getProductById().then((response) => {
      setItem({ ...response });
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading && (
        <span className="loading">replace loading with spinner....</span>
      )}
      {!loading && <ItemDetail item={item} />}
    </>
  );
}

export default ItemDetailContainer;
