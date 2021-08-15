import React, { useEffect, useState } from "react";

import { getProductsMocks } from "../../mocks/products-mock";
import ItemList from "../item-list";
import "./styles.css";

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
      {loading && (
        <span className="loading">replace loading with spinner....</span>
      )}
      {!loading && <ItemList items={itemList} />}
    </>
  );
}

export default ItemListContainer;
