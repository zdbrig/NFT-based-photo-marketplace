import React from "react";
import { getListActivity } from "../../Api/Activity";
function Activitycomponent() {
  return (
    <div className="col-12 col-xl-9 order-xl-1">
      <div className="row row--grid">
        {getListActivity().map((element) => {
          return (
            <>
              <div className="col-12 col-lg-6">
                <div className="activity">
                  <a href="#/Item" className="activity__cover">
                    <img src={element.photo} alt="" />
                  </a>
                  <div className="activity__content">
                    <h3 className="activity__title">
                      <a href="#/Item">{element.description}</a>
                    </h3>
                    <p className="activity__text">
                      listed by <a href="#/Author">{element.adress}</a> <br />
                      for <b>{element.Price}</b>{" "}
                    </p>
                    <span className="activity__time">
                      {element.temp} minutes ago
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="row row--grid">
        <div className="col-12">
          <button
            className="main__load"
            type="button"
            data-toggle="collapse"
            data-target="#collapsemore"
            aria-expanded="false"
            aria-controls="collapsemore"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
export default Activitycomponent;
