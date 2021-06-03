import React from "react";
import { getListExplore } from "../../Api/Explore";
function Collectioncomponent() {
  return (
    <div className="row row--grid">
      {getListExplore().map((element) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4">
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                  </svg>
                  <span>189</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Collectioncomponent;
