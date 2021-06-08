import React from "react";
import { getListExplore } from "../../Api/Explore";
function Itemasset() {
  return (
    <div>
      <section className="row row--grid">
        {/* <!-- title --> */}
        <div className="col-12">
          <div className="main__title main__title--border-top">
            <h2>
              <a href="#Explore">Other author assets</a>
            </h2>
          </div>
        </div>
        {/* <!-- end title -->

				<!-- carousel --> */}
        <div className="col-12">
          <div className="main__carousel-wrap">
            <div
              className="main__carousel main__carousel--explore owl-carousel"
              id="explore"
            >
              {getListExplore().map((element) => {
                return (
                  <div className="card">
                    <a href="#/Item" className="card__cover">
                      <img src={element.photo} alt="" />
                    </a>
                    <h3 className="card__title">
                      <a href="#/Item">{element.description}</a>
                    </h3>
                    <div className="card__author">
                      <img src={element.photo} alt="" />
                      <a href="#/Author">{element.adress}</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Reserve price</span>
                        <span>{element.reservePrice}</span>
                      </div>

                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>189</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="main__nav main__nav--prev"
              data-nav="#explore"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
            </button>
            <button
              className="main__nav main__nav--next"
              data-nav="#explore"
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
    </div>
  );
}
export default Itemasset;