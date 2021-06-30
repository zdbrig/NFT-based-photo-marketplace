import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Author from "../component/Home/Homeauthor";
import { getListAuthors } from "../Api/Authors";
import Web3 from "web3";
import { Modal } from "reactstrap";
function Authors() {
    const [activeItem, setActiveItem] = useState(false);
    const [networkModal, setModalNetwork] = useState(false);
    const [accountMetaMask, setAccountMetamask] = useState(false);

    const toggle = () => setModalNetwork(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
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
                <div className="container">
                    <div className="row row--grid">
                        {/* <!-- breadcrumb --> */}
                        <div className="col-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb__item">
                                    <a href="#/Home">Home</a>
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--active">
                                    Authors
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end breadcrumb -->

				<!-- title --> */}
                        <div className="col-12">
                            <div className="main__title main__title--page">
                                <h1>Authors</h1>
                            </div>
                        </div>
                        {/* <!-- end title -->

				<!-- filter --> */}
                        <div className="col-12">
                            <div className="main__filter">
                                <form
                                    action="#"
                                    className="main__filter-search"
                                >
                                    <input
                                        type="text"
                                        placeholder="Search for a creator…"
                                    />
                                    <button type="button">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                                        </svg>
                                    </button>
                                </form>

                                <div className="main__filter-wrap">
                                    <select
                                        className="main__select"
                                        name="status"
                                    >
                                        <option value="rating">
                                            By rating
                                        </option>
                                        <option value="views">By views</option>
                                        <option value="popularity">
                                            By popularity
                                        </option>
                                    </select>

                                    <select
                                        className="main__select"
                                        name="authors"
                                    >
                                        <option value="0">All Authors</option>
                                        <option value="1">Verified only</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end filter --> */}
                    </div>

                    {/* <!-- authors --> */}
                    <div className="row row--grid">
                        {getListAuthors().map((element) => {
                            return (
                                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                                    {" "}
                                    <div className="author">
                                        <a
                                            href="#/Author"
                                            className="author__cover author__cover--bg"
                                            data-bg={element.photo}
                                        ></a>
                                        <div className="author__meta">
                                            <a
                                                href="#/Author"
                                                className="author__avatar author__avatar--verified"
                                            >
                                                <img
                                                    src={element.photoUser}
                                                    alt=""
                                                />
                                            </a>
                                            <h3 className="author__name">
                                                <a href="#/Author">
                                                    {element.name}
                                                </a>
                                            </h3>
                                            <h3 className="author__nickname">
                                                <a href="#/Author">
                                                    {element.adress}
                                                </a>
                                            </h3>
                                            <p className="author__text">
                                                {element.description}
                                            </p>
                                            <div className="author__wrap">
                                                <div className="author__followers">
                                                    <p>{element.follow}</p>
                                                    <span>Followers</span>
                                                </div>
                                                <button
                                                    className="author__follow"
                                                    type="button"
                                                >
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <!-- end authors -->

			<!-- paginator --> */}
                    <div className="row row--grid">
                        <div className="col-12">
                            <div className="paginator">
                                <span className="paginator__pages">
                                    8 from 169
                                </span>

                                <ul className="paginator__list">
                                    <li>
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end paginator --> */}
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Authors;
