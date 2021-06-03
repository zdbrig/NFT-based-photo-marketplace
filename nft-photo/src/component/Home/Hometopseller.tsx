import React from "react";
import { getTopSeller } from "../../Api/Topseller";
function Hometopseller() {
  return (
    <section className="row row--grid">
      {/* <!-- title --> */}
      <div className="col-12">
        <div className="main__title">
          <h2>Top sellers</h2>

          <a href="#/Author" className="main__link">
            View all{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
            </svg>
          </a>
        </div>
      </div>
      {/* <!-- end title -->

        <!-- sellers list --> */}
      <div className="col-12">
        <ul className="sellers-list">
          {getTopSeller().map((ele) => {
            return (
              <li>
                <span className="sellers-list__number">{ele.index}</span>
                <div className="sellers-list__author sellers-list__author--verified">
                  <img src="img/avatars/avatar.jpg" alt="" />
                  <a href="#/Author">{ele.adress}</a>
                  <span>{ele.currentPrice}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <!-- end sellers list --> */}
    </section>
  );
}
export default Hometopseller;
