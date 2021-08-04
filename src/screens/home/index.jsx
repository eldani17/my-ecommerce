import React from "react";

import "./style.css";

import Navbar from "../../components/navbar";
import MainSection from "../../components/main-section";

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
    </>
  );
}

export default Home;
