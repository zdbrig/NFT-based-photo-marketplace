import React from "react";

function Blogfirststyle() {
  return (
    <div className="col-12">
      <ul className="nav nav-tabs main__tabs" id="main__tabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="tab"
            href="#tab-1"
            role="tab"
            aria-controls="tab-1"
            aria-selected="true"
          >
            All
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#tab-2"
            role="tab"
            aria-controls="tab-2"
            aria-selected="false"
          >
            Digital Art
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#tab-3"
            role="tab"
            aria-controls="tab-3"
            aria-selected="false"
          >
            Collectibles
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#tab-4"
            role="tab"
            aria-controls="tab-4"
            aria-selected="false"
          >
            Domains
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Blogfirststyle;