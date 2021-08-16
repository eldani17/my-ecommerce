import React from "react";

import "./style.css";

import Navbar from "../../components/navbar";
import MainSection from "../../components/main-section";
import ItemListContainer from "../../components/item-list-container";
import ItemDetailContainer from "../../components/item-detail-container";

function Home() {
  const titles = ["The", "Classic - Collection", "Shop House"];

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="container-fluid">
        <MainSection greeting={titles} />
      </div>
      <div className="container">
        <ItemListContainer />
      </div>
      <div className="container">
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default Home;
