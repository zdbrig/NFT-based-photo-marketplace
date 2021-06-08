import React from "react";
import { getListAuthors } from "../../Api/Authors";

function Homeauther() {
  return (
    <div className="col-12">
      <div className="main__carousel-wrap">
        <div
          className="main__carousel main__carousel--authors owl-carousel"
          id="authorsc"
        >
          {getListAuthors().map((element) => {
            return (
              <div className="author">
                <a
                  href="#/Author"
                  className="author__cover author__cover--bg"
                  data-bg={element.photo}
                ></a>
                <div className="author__meta">
                  <a
                    href="#/Author"
                    className="author__avatar author__avatar--verified"
                  >
                    <img src={element.photoUser} alt="" />
                  </a>
                  <h3 className="author__name">
                    <a href="#/Author">{element.name}</a>
                  </h3>
                  <h3 className="author__nickname">
                    <a href="#/Author">{element.adress}</a>
                  </h3>
                  <p className="author__text">{element.description}</p>
                  <div className="author__wrap">
                    <div className="author__followers">
                      <p>{element.follow}</p>
                      <span>Followers</span>
                    </div>
                    <button className="author__follow" type="button">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="main__nav main__nav--prev"
          data-nav="#authorsc"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
          </svg>
        </button>
        <button
          className="main__nav main__nav--next"
          data-nav="#authorsc"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Homeauther;
