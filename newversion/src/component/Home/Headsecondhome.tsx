import React from "react";
function Headsecondhome() {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home__content home__content--center">
                            <h1 className="home__title">
                                Discover, collect, and sell <br />
                                extraordinary{" "}
                                <span>
                                    <b>NFTs</b>
                                </span>
                            </h1>
                            <p className="home__text">
                                Digital marketplace for crypto collectibles and
                                non-fungible tokens.
                            </p>

                            <div className="home__btns">
                                <a
                                    href="#/Explore"
                                    className="home__btn home__btn--clr"
                                >
                                    Explore
                                </a>
                                <a href="#/Create" className="home__btn">
                                    Create Photo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Headsecondhome;
