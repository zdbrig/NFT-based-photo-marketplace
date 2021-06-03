import React from "react";
function Homethreehead() {
  return (
    <div className="home home--hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero owl-carousel" id="hero">
              <div className="hero__slide" data-bg="img/home/slide1.jpg">
                <h1 className="hero__title">Exclusive digital asset</h1>
                <p className="hero__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
                <div className="hero__btns">
                  {/* item2 */}
                  <a href="#/Item" className="hero__btn hero__btn--clr">
                    More details
                  </a>
                  <a href="#/Item" className="hero__btn">
                    Place a bid
                  </a>
                </div>
              </div>

              <div className="hero__slide" data-bg="img/home/slide2.jpg">
                <h2 className="hero__title">
                  Discover, collect, and sell <br />
                  extraordinary NFTs
                </h2>
                <p className="hero__text">
                  Securely buy and sell unique digital collectibles. <br />
                  Lowest transaction costs across all NFT markets guaranteed.
                </p>
                <div className="hero__btns">
                  <a href="#/Explore" className="hero__btn hero__btn--clr">
                    Explore
                  </a>
                  <a href="#/Signin" className="hero__btn">
                    Create
                  </a>
                </div>
              </div>

              <div className="hero__slide" data-bg="img/home/slide3.jpg">
                <h2 className="hero__title">
                  Unitok – NFT Marketplace <br />
                  HTML Template
                </h2>
                <p className="hero__text">
                  Digital marketplace for crypto collectibles and non-fungible
                  tokens. <br />
                  Buy, sell, and discover exclusive digital assets.
                </p>
                <div className="hero__btns">
                  <a href="#/Explore" className="hero__btn hero__btn--clr">
                    Explore
                  </a>
                  <a href="#/Signin" className="hero__btn">
                    Create
                  </a>
                </div>
              </div>
            </div>

            <button
              className="main__nav main__nav--hero main__nav--prev"
              data-nav="#hero"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
            </button>
            <button
              className="main__nav main__nav--hero main__nav--next"
              data-nav="#hero"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homethreehead;
