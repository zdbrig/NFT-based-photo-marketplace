import React from "react";
import { getListAuthors } from "../../Api/Authors";

function Homeauther() {
  return (
    <div>
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
  );
}
export default Homeauther;
