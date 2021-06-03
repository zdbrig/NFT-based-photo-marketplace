import React from "react";
import Blogfirststyle from "../component/Blog/Blogfirststyle";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Blogseconstyle from "../component/Blog/Blogseconstyle";
import "./Blog.css";
function Blog() {
  return (
    <div className="Blog">
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
                  Blog
                </li>
              </ul>
            </div>
            {/* <!-- end breadcrumb -->

				<!-- title --> */}
            <div className="col-12">
              <div className="main__title main__title--page">
                <h1>Our Blog</h1>
              </div>
            </div>
            {/* <Blogfirststyle></Blogfirststyle> */}
            <Blogseconstyle></Blogseconstyle>
            {/* <!-- end title --> */}
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
            >
              <div className="row row--grid">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/2.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Digital Art
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 24, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          88
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/3.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Digital Art
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          The beginners guide to creating & selling digital art
                          NFTs
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 22, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          54
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/1.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Charity
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          Save Thousands Of Lives Through This NFT
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 25, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          119
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/4.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Digital Art
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 27, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/5.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Collectibles
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">Rare NFT Series</a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          102
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/6.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Domains
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          Control Your Own Top Level Domain on the DNS & ENS
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          325
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post --> */}
              </div>

              <div className="row row--grid collapse" id="collapsemore">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/2.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Digital Art
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 24, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          88
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/3.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Digital Art
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          The beginners guide to creating & selling digital art
                          NFTs
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 22, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          54
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/1.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Charity
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          Save Thousands Of Lives Through This NFT
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 25, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          119
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/4.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Digital Art
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 27, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/5.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Collectibles
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">Rare NFT Series</a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          102
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/6.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <a href="#" className="post__category">
                        Domains
                      </a>
                      <h3 className="post__title">
                        <a href="article.html">
                          Control Your Own Top Level Domain on the DNS & ENS
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          325
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post --> */}
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
              {/* <!-- end collapse --> */}
            </div>

            <div className="tab-pane fade" id="tab-2" role="tabpanel">
              <div className="row row--grid">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/2.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 24, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          88
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/3.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          The beginners guide to creating & selling digital art
                          NFTs
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 22, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          54
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/1.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          Save Thousands Of Lives Through This NFT
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 25, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          119
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/4.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 27, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post --> */}
              </div>
            </div>

            <div className="tab-pane fade" id="tab-3" role="tabpanel">
              <div className="row row--grid">
                {/* <!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/1.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          Save Thousands Of Lives Through This NFT
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 25, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          119
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/4.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 27, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/5.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">Rare NFT Series</a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          102
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/6.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          Control Your Own Top Level Domain on the DNS & ENS
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          325
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post --> */}
              </div>
            </div>

            <div className="tab-pane fade" id="tab-4" role="tabpanel">
              <div className="row row--grid">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/3.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          The beginners guide to creating & selling digital art
                          NFTs
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 22, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          54
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/1.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          Save Thousands Of Lives Through This NFT
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 25, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          119
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/4.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">
                          A Month of Rare Digital Art from MakersPlace
                        </a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 27, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post -->

						<!-- post --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="post">
                    <a href="article.html" className="post__img">
                      <img src="img/posts/5.jpg" alt="" />
                    </a>

                    <div className="post__content">
                      <h3 className="post__title">
                        <a href="article.html">Rare NFT Series</a>
                      </h3>
                      <div className="post__meta">
                        <span className="post__date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                          </svg>{" "}
                          April 28, 2021
                        </span>
                        <span className="post__comments">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
                          </svg>{" "}
                          102
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end post --> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
export default Blog;
