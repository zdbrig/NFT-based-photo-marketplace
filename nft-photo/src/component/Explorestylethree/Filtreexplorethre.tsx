import React from "react";

function Filtreexplorethree() {
  return (
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

      <div className="collapse filter-wrap__content" id="collapseFilter">
        {/* <!-- filter --> */}
        <div className="filter">
          <h4 className="filter__title">
            Filters <button type="button">Clear all</button>
          </h4>

          <div className="filter__group">
            <label className="filter__label">Keyword:</label>
            <input
              type="text"
              className="filter__input"
              placeholder="Keyword"
            />
          </div>

          <div className="filter__group">
            <label htmlFor="sort" className="filter__label">
              Sort by:
            </label>

            <div className="filter__select-wrap">
              <select name="sort" id="sort" className="filter__select">
                <option value="0">Relevance</option>
                <option value="1">Newest</option>
                <option value="2">Oldest</option>
              </select>
            </div>
          </div>

          <div className="filter__group">
            <label className="filter__label">Category:</label>
            <ul className="filter__checkboxes">
              <li>
                <input id="type5" type="checkbox" name="type5" checked />
                <label htmlFor="type5">Art</label>
              </li>
              <li>
                <input id="type6" type="checkbox" name="type6" />
                <label htmlFor="type6">Photography</label>
              </li>
              <li>
                <input id="type7" type="checkbox" name="type7" checked />
                <label htmlFor="type7">Games</label>
              </li>
              <li>
                <input id="type8" type="checkbox" name="type8" checked />
                <label htmlFor="type8">Metaverses</label>
              </li>
              <li>
                <input id="type9" type="checkbox" name="type9" />
                <label htmlFor="type9">Music</label>
              </li>
              <li>
                <input id="type10" type="checkbox" name="type10" />
                <label htmlFor="type10">Domains</label>
              </li>
              <li>
                <input id="type11" type="checkbox" name="type11" />
                <label htmlFor="type11">Memes</label>
              </li>
            </ul>
          </div>

          <div className="filter__group">
            <button className="filter__btn" type="button">
              APPLY FILTER
            </button>
          </div>
        </div>
        {/* <!-- end filter --> */}
      </div>
    </div>
  );
}
export default Filtreexplorethree;
