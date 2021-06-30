import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Homethreehead from "../component/Home/Homethreehead";
import Explorehead from "../component/Explore/Explorehead";
import Explorecollection from "../component/Explore/Explorecollection";
import Footer from "../component/Footer/Footer";
import Homeauther from "../component/Home/Homeauthor";
import { Modal } from "reactstrap";
import Web3 from "web3";
function Homethree() {
    const [activeExplore, setActiveexplore] = useState(true);
    const [activeItem, setActiveItem] = useState(false);
    const [networkModal, setModalNetwork] = useState(false);
    const [accountMetaMask, setAccountMetamask] = useState(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    const toggle = () => setModalNetwork(false);
    //@ts-ignore
    const { ethereum } = window;
    useEffect(() => {
        if (localStorage.getItem("wallettype") === "metamask") {
            //@ts-ignore
            const web3 = new Web3(ethereum);
            const netId1 = web3.eth.net.getId();
            netId1.then((value: any) => {
                if (value !== 42) {
                    setModalNetwork(true);
                } else {
                    const accoun = web3.eth.getAccounts().then((acco: any) => {
                        setAccountMetamask(acco[0]);
                    });
                }
            });
        } else {
            window.location.assign("#/Signin");
        }
    });
    function goHome() {
        window.location.assign("#/Home");
    }
    return (
        <div>
            <Modal
                isOpen={networkModal}
                toggle={toggle}
                wrapClassName="modalLoadingWrap"
                modalClassName="modalLoadingModal"
                backdropClassName="modalLoadingBackdrop"
                contentClassName="modalLoadingContent"
            >
                <div className="modal-header headerModal">
                    <h2 className="modal-title" id="exampleModalLabel">
                        Wrong Network
                    </h2>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => goHome()}
                    >
                        <span aria-hidden="true" className="spanx">
                            &times;
                        </span>
                    </button>
                </div>

                <div className="modal-body">
                    <h5>Network not supported</h5>
                </div>
            </Modal>{" "}
            <Header
                onClickActive={handleClick}
                account={accountMetaMask}
            ></Header>
            <main className="main">
                <div className="home home--hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero owl-carousel" id="hero">
                                    <div
                                        className="hero__slide"
                                        data-bg="img/home/slide1.jpg"
                                    >
                                        <h1 className="hero__title">
                                            Exclusive digital asset
                                        </h1>
                                        <p className="hero__text">
                                            There are many variations of
                                            passages of Lorem Ipsum available,
                                            but the majority have suffered
                                            alteration in some form, by injected
                                            humour.
                                        </p>
                                        <div className="hero__btns">
                                            {/* item2 */}
                                            <a
                                                href="#/Item"
                                                className="hero__btn hero__btn--clr"
                                            >
                                                More details
                                            </a>
                                            <a
                                                href="#/Item"
                                                className="hero__btn"
                                            >
                                                Place a bid
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="main__nav main__nav--hero main__nav--prev"
                                    data-nav="#hero"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                                    </svg>
                                </button>
                                <button
                                    className="main__nav main__nav--hero main__nav--next"
                                    data-nav="#hero"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Explorehead></Explorehead>

                    <Explorecollection
                        activeButton={activeExplore}
                    ></Explorecollection>
                    <section className="row row--grid">
                        {/* <!-- title --> */}
                        <div className="col-12">
                            <div className="main__title">
                                <h2>
                                    <a href="#/Authors">New Authors</a>
                                </h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="main__carousel-wrap">
                                <Homeauther></Homeauther>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Homethree;
