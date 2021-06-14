import React, { useState } from "react";
import Header from "../component/Header/Header";
import Footor from "../component/Footer/Footer";
function Pagenotfound() {
    const [activeItem, setActiveItem] = useState(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    return (
        <div>
            <Header onClickActive={handleClick}></Header>
            <main className="main">
                <div className="container">
                    <div className="row row--grid">
                        {/* <!-- breadcrumb --> */}
                        <div className="col-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb__item">
                                    <a href="#/Home">Home</a>
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--active">
                                    Error 404
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end breadcrumb -->

				<!-- error --> */}
                        <div className="col-12">
                            <div className="page-404">
                                <div className="page-404__wrap">
                                    <div className="page-404__content">
                                        <h1 className="page-404__title">404</h1>
                                        <p className="page-404__text">
                                            The page you are looking for not
                                            available!
                                        </p>
                                        <a
                                            href="#/Home"
                                            className="page-404__btn"
                                        >
                                            go back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end error --> */}
                    </div>
                </div>
            </main>
            <Footor></Footor>
        </div>
    );
}
export default Pagenotfound;
