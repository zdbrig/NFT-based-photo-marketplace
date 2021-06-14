import React from "react";
function Homeheader() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home__content">
                            <h1 className="home__title">
                                The largest NFT marketplace
                            </h1>
                            <p className="home__text">
                                Digital marketplace for crypto collectibles and
                                non-fungible tokens. <br />
                                Buy, sell, and discover exclusive digital
                                assets.
                            </p>

                            <div className="home__btns">
                                <a
                                    href="#/Explore"
                                    className="home__btn home__btn--clr"
                                >
                                    Explore
                                </a>
                                <a href="#/Create" className="home__btn">
                                    Create photo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Homeheader;
