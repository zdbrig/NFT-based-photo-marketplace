import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Activitycomponent from "../component/Activity/Activitycomponent";
import "./Activity.css";
import { getListActivity } from "../Api/Activity";
function Activity() {
  return (
    <div className="Activity">
      <Header></Header>

      <main className="main">
        <div className="container">
          <div className="row row--grid">
            <div className="col-12">
              <ul className="breadcrumb">
                <li className="breadcrumb__item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb__item breadcrumb__item--active">
                  Activity
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="main__title main__title--page">
                <h1>Activity</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-xl-3 order-xl-2">
              <div className="filter-wrap">
                <button
                  className="filter-wrap__btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFilter"
                  aria-expanded="false"
                  aria-controls="collapseFilter"
                >
                  Open filter
                </button>

                <div
                  className="collapse filter-wrap__content"
                  id="collapseFilter"
                >
                  <div className="filter filter--sticky">
                    <h4 className="filter__title">
                      Filters <button type="button">Clear all</button>
                    </h4>

                    <div className="filter__group">
                      <ul className="filter__checkboxes">
                        <li>
                          <input id="type5" type="checkbox" name="type5" />{" "}
                          <label htmlFor="type5">Listings</label>
                        </li>
                        <li>
                          <input id="type6" type="checkbox" name="type6" />{" "}
                          <label htmlFor="type6">Purchases</label>
                        </li>
                        <li>
                          <input
                            id="type7"
                            type="checkbox"
                            name="type7"
                            checked
                          />{" "}
                          <label htmlFor="type7">Sales</label>
                        </li>
                        <li>
                          <input
                            id="type8"
                            type="checkbox"
                            name="type8"
                            checked
                          />{" "}
                          <label htmlFor="type8">Transfers</label>
                        </li>
                        <li>
                          <input id="type9" type="checkbox" name="type9" />{" "}
                          <label htmlFor="type9">Bids</label>
                        </li>
                        <li>
                          <input id="type10" type="checkbox" name="type10" />

                          <label htmlFor="type10">Likes</label>
                        </li>
                        <li>
                          <input id="type11" type="checkbox" name="type11" />{" "}
                          <label htmlFor="type11">Followings</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Activitycomponent></Activitycomponent>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Activity;
