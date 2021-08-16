import React, { useEffect, useState } from "react";

import "./styles.css";

import { getProductById } from "../mocks/products-mock";

import ItemDetail from "../components/item-detail";
import Loading from "../components/loading";

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
      {loading && <Loading />}
      {!loading && <ItemDetail item={item} />}
    </>
  );
}

export default ItemDetailContainer;
