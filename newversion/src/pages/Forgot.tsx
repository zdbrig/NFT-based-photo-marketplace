import React, { useState } from "react";
import Header from "../component/Header/Header";

import Footer from "../component/Footer/Footer";
function Forgot() {
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
                                    Restore password
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end breadcrumb -->

				<!-- authorization form --> */}
                        <div className="col-12">
                            <div className="sign">
                                <div className="sign__content">
                                    <form action="#" className="sign__form">
                                        <a href="#/Home" className="sign__logo">
                                            <img src="img/logo.svg" alt="" />
                                        </a>

                                        <div className="sign__group">
                                            <input
                                                type="text"
                                                className="sign__input"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="sign__group sign__group--checkbox">
                                            <input
                                                id="remember"
                                                name="remember"
                                                type="checkbox"
                                                checked
                                            />
                                            <label htmlFor="remember">
                                                I agree to the{" "}
                                                <a href="privacy.html">
                                                    Privacy Policy
                                                </a>
                                            </label>
                                        </div>

                                        <button
                                            className="sign__btn"
                                            type="button"
                                        >
                                            Send
                                        </button>

                                        <span className="sign__text">
                                            We will send a password to your
                                            Email
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end authorization form --> */}
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
}
export default Forgot;
