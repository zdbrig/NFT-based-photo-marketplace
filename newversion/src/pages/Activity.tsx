import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Activitycomponent from "../component/Activity/Activitycomponent";
import Web3 from "web3";
import "./Activity.css";
import { getListActivity } from "../Api/Activity";

function Activity() {
    const [activeItem, setActiveItem] = useState(false);
    const [ShowComponent, setShowComponent] = useState(false);
    const [modalnetwork, setModalNetwork] = useState(false);
    const toggle = () => setActiveItem(!modalnetwork);
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
                    //alert(value);
                    setModalNetwork(true);
                }
            });
        } else {
            window.location.assign("#/Signin");
        }
    });
    function goHome() {
        window.location.assign("#/Home");
    }
    function show() {
        setShowComponent(true);
    }
    return (
        <div className="Activity">
            <Header onClickActive={handleClick}></Header>
            {modalnetwork === true ? (
                <>
                    <Modal
                        isOpen={modalnetwork}
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
                </>
            ) : (
                <>
                    <main className="main">
                        <div className="container">
                            <div className="row row--grid">
                                <div className="col-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb__item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb__item breadcrumb__item--active">
                                            Activity
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12">
                                    <div className="main__title main__title--page">
                                        <h1>Activity</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-xl-3 order-xl-2">
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

                                        <div
                                            className="collapse filter-wrap__content"
                                            id="collapseFilter"
                                        >
                                            <div className="filter filter--sticky">
                                                <h4 className="filter__title">
                                                    Filters{" "}
                                                    <button type="button">
                                                        Clear all
                                                    </button>
                                                </h4>

                                                <div className="filter__group">
                                                    <ul className="filter__checkboxes">
                                                        <li>
                                                            <input
                                                                id="type5"
                                                                type="checkbox"
                                                                name="type5"
                                                            />{" "}
                                                            <label htmlFor="type5">
                                                                Listings
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                id="type6"
                                                                type="checkbox"
                                                                name="type6"
                                                            />{" "}
                                                            <label htmlFor="type6">
                                                                Purchases
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                id="type7"
                                                                type="checkbox"
                                                                name="type7"
                                                                checked
                                                            />{" "}
                                                            <label htmlFor="type7">
                                                                Sales
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                id="type8"
                                                                type="checkbox"
                                                                name="type8"
                                                                checked
                                                            />{" "}
                                                            <label htmlFor="type8">
                                                                Transfers
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                id="type9"
                                                                type="checkbox"
                                                                name="type9"
                                                            />{" "}
                                                            <label htmlFor="type9">
                                                                Bids
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                id="type10"
                                                                type="checkbox"
                                                                name="type10"
                                                            />

                                                            <label htmlFor="type10">
                                                                Likes
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                id="type11"
                                                                type="checkbox"
                                                                name="type11"
                                                            />{" "}
                                                            <label htmlFor="type11">
                                                                Followings
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Activitycomponent
                                    onClickCharge={show}
                                ></Activitycomponent>
                            </div>
                        </div>
                    </main>
                </>
            )}
            <Footer></Footer>{" "}
        </div>
    );
}
export default Activity;
