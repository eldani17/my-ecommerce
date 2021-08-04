import React from "react";

import "./styles.css";

function MainSection(props) {
  const { greeting } = props;
  return (
    <div className="container-fluid container-main">
      <div className="main-background">
        <div className="info-main">
          <h1 className="title-home first-title">{greeting[0]}</h1>
          <h1 className="title-home">{greeting[1]}</h1>
          <h1 className="title-home">{greeting[2]}</h1>
          <button className="btn-primary btn-main">shop now</button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
