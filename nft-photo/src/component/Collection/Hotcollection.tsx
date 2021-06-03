import React from "react";

import { getListCollection } from "../../Api/Collection";
function Hotcollection() {
  return (
    <div>
      {/* <!-- collections --> */}
      <section className="row row--grid">
        {/* <!-- title --> */}
        <div className="col-12">
          <div className="main__title">
            <h2>Hot collections</h2>
          </div>
        </div>
        {/* <!-- end title -->

            <!-- carousel --> */}
        <div className="col-12">
          <div className="main__carousel-wrap">
            <div
              className="main__carousel main__carousel--collections owl-carousel"
              id="collections"
            >
              {getListCollection().map((element) => {
                return (
                  <div className="collection">
                    <a
                      href="#/Collection"
                      className="collection__cover"
                      data-bg={element.photo}
                    ></a>
                    <div className="collection__meta">
                      <a
                        href="#/Author"
                        className="collection__avatar collection__avatar--verified"
                      >
                        <img src={element.photoUser} alt="" />
                      </a>
                      <h3 className="collection__name">
                        <a href="#/Collection">{element.name}</a>
                      </h3>
                      <span className="collection__number">
                        {element.token}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="main__nav main__nav--prev"
              data-nav="#collections"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
            </button>
            <button
              className="main__nav main__nav--next"
              data-nav="#collections"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- end carousel --> */}
      </section>
      {/* <!-- end collections --> */}
    </div>
  );
}
export default Hotcollection;
