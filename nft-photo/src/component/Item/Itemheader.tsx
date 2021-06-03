import React from "react";

function Itemhead() {
  return (
    <div>
      <div className="row row--grid">
        {/* <!-- breadcrumb --> */}
        <div className="col-12">
          <ul className="breadcrumb">
            <li className="breadcrumb__item">
              <a href="#/Home">Home</a>
            </li>
            <li className="breadcrumb__item">
              <a href="/#Author">Author</a>
            </li>
            <li className="breadcrumb__item breadcrumb__item--active">Item</li>
          </ul>
        </div>
        {/* <!-- end breadcrumb --> */}

        {/* <!-- title --> */}
        <div className="col-12">
          <div className="main__title main__title--page">
            <h1>Exclusive digital asset</h1>
          </div>
        </div>
        {/* <!-- end title --> */}
      </div>
    </div>
  );
}
export default Itemhead;
