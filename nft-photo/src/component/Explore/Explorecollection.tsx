import React from "react";

import { getListExploreExclusive } from "../../Api/Exploreexclusive";
function Explorecollection(props: any) {
  return (
    <div>
      <div className="row row--grid">
        {getListExploreExclusive().map((element) => {
          if (element.temp !== undefined) {
            return (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="card">
                  <a href="#/item" className="card__cover">
                    <img src={element.photo} alt="" />
                    <span className="card__time">{element.temp}</span>
                  </a>
                  <h3 className="card__title">
                    <a href="#/item">{element.description}</a>
                  </h3>
                  <div className="card__author card__author--verified">
                    <img src="img/avatars/avatar5.jpg" alt="" />
                    <a href="#/Author">{element.adress}</a>
                  </div>
                  <div className="card__info">
                    <div className="card__price">
                      <span>Current price</span>
                      <span>{element.currentPrice}</span>
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
              </div>
            );
          } else {
            return (
              <>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
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

                  {/* <!-- end carousel card --> */}
                </div>
              </>
            );
          }
        })}
      </div>
      {/* 
			// <!-- paginator --> */}
      <div className="row row--grid">
        <div className="col-12">
          <div className="paginator">
            <span className="paginator__pages">8 from 169</span>

            <ul className="paginator__list">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                  </svg>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {props.activeButton === true ? (
        <div className="col-12">
          <button
            className="main__load"
            type="button"
            data-toggle="collapse"
            data-target="#collapsemore4"
            aria-expanded="false"
            aria-controls="collapsemore4"
          >
            Load more
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Explorecollection;
