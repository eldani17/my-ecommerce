import React, { useEffect, useState } from "react";

import "./styles.css";

import { getProductsMocks } from "../../mocks/products-mock";

import ItemList from "../../components/item-list";
import Loading from "../../components/loading";

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
    <div className="container">
      {loading && <Loading />}
      {!loading && <ItemList items={itemList} />}
    </div>
  );
}

export default ItemListContainer;
