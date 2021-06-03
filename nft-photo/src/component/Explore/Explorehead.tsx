import React from "react";
import "./Explorehead.css";
function Explorehead() {
  return (
    <div className="Explorehead">
      <div className="col-12">
        <ul className="breadcrumb">
          <li className="breadcrumb__item">
            <a href="#/Home">Home</a>
          </li>
          <li className="breadcrumb__item breadcrumb__item--active">Explore</li>
        </ul>
      </div>
      {/* <!-- end breadcrumb -->

<!-- title --> */}
      <div className="col-12">
        <div className="main__title main__title--page">
          <h1>Explore exclusive digital assets</h1>
        </div>
      </div>
    </div>
  );
}

export default Explorehead;
