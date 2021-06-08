import React from "react";
import { getListBlog } from "../../Api/Blog";

function Homeblog() {
  return (
    <section className="row row--grid">
      {/* <!-- title --> */}
      <div className="col-12">
        <div className="main__title">
          <h2>Our Blog</h2>

          <a href="#/Blog" className="main__link">
            View more{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
            </svg>
          </a>
        </div>
      </div>
      {/* <!-- end title -->


    <!-- post --> */}
      {getListBlog().map((ele) => {
        return (
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="post">
              <a href="#/Article" className="post__img">
                <img src="img/posts/1.jpg" alt="" />
              </a>

              <div className="post__content">
                <a href="#" className="post__category">
                  {ele.typeButton}
                </a>
                <h3 className="post__title">
                  <a href="#/Article">{ele.description}</a>
                </h3>
                <div className="post__meta">
                  <span className="post__date">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                    </svg>{" "}
                    {ele.date}
                  </span>
                  <span className="post__comments">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                    </svg>{" "}
                    119
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
export default Homeblog;
