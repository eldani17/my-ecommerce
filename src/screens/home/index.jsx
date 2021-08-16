import React from "react";

import "./style.css";

import MainSection from "../../components/main-section";
import ItemDetailContainer from "../../components/item-detail-container";

function Home() {
  const titles = ["The", "Classic - Collection", "Shop House"];

  return (
    <>
      <div className="container-fluid">
        <MainSection greeting={titles} />
      </div>
      <div className="container">
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default Home;
