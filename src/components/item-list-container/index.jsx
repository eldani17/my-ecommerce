import React, { useEffect, useState } from "react";

import "./styles.css";

import { getProductsMocks } from "../../mocks/products-mock";

import ItemList from "../item-list";
import Loading from "../loading";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getProductsMocks().then((response) => {
      setItemList([...response]);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && <ItemList items={itemList} />}
    </>
  );
}

export default ItemListContainer;
