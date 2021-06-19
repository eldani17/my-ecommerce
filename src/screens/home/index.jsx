import React from "react";

import "./style.css";

import Header from "../../components/header";
import MainSection from "../../components/main-section";

function Home() {
  const titles = ["The", "Classic - Collection", "Shop House"];
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container-fluid">
        <MainSection titles={titles} />
      </div>
    </>
  );
}

export default Home;
