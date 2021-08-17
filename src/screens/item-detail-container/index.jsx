import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles.css";

import { getProductById } from "../../mocks/products-mock";

import ItemDetail from "../../components/item-detail";
import Loading from "../../components/loading";

function ItemDetailContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState();

  useEffect(() => {
    getProductById(id).then((response) => {
      setItem({ ...response });
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="container">
      {loading && <Loading />}
      {!loading && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
