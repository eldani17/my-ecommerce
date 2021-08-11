import React from "react";

import "./style.css";

import Navbar from "../../components/navbar";
import MainSection from "../../components/main-section";
import ItemCount from "../../components/item-count";

function Home() {
  const titles = ["The", "Classic - Collection", "Shop House"];

  const onAddProduct = (quantity) => {
    console.log(`execute onAddProduct, quantity product: ${quantity}`);
  };

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="container-fluid">
        <MainSection greeting={titles} />
      </div>
      <div className="container">
        <ItemCount stock={0} initial={5} onAdd={onAddProduct} />
      </div>
    </>
  );
}

export default Home;
