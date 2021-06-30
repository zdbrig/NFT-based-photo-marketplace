import Authorcomponent from "../component/Authors/Authorcomponent";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Explorecollection from "../component/Explore/Explorecollection";
import { getListActivity } from "../Api/Activity";
import Collectioncomponent from "../component/Collection/Collectioncomponent";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Modal } from "reactstrap";
function Author() {
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
            <Header onClickActive={handleClick} account={accountMetaMask} />
            <main className="main">
                <div className="main__author" data-bg="img/bg/bg.png"></div>
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-xl-3">
                            <Authorcomponent />
                        </div>
                        <div className="col-12 col-xl-9">
                            <div className="profile">
                                <ul
                                    className="nav nav-tabs profile__tabs"
                                    id="profile__tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#tab-1"
                                            role="tab"
                                            aria-controls="tab-1"
                                            aria-selected="true"
                                        >
                                            On Sale
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tab-2"
                                            role="tab"
                                            aria-controls="tab-2"
                                            aria-selected="false"
                                        >
                                            Created
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tab-3"
                                            role="tab"
                                            aria-controls="tab-3"
                                            aria-selected="false"
                                        >
                                            My Activity
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tab-4"
                                            role="tab"
                                            aria-controls="tab-4"
                                            aria-selected="false"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- end tabs nav --> */}
                            </div>

                            {/* <!-- content tabs --> */}
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-1"
                                    role="tabpanel"
                                >
                                    <Explorecollection />
                                    {/* <!-- end card --> */}

                                    {/* <!-- collapse --> */}

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

                                <div
                                    className="tab-pane fade"
                                    id="tab-2"
                                    role="tabpanel"
                                >
                                    <Collectioncomponent></Collectioncomponent>
                                    {/* <!-- paginator --> */}
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

                                <div
                                    className="tab-pane fade"
                                    id="tab-3"
                                    role="tabpanel"
                                >
                                    <div className="row">
                                        {/* <!-- sidebar --> */}
                                        <div className="col-12 col-xl-4 order-xl-2">
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
                                                    {/* <!-- filter --> */}
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
                                                                    />
                                                                    <label htmlFor="type5">
                                                                        Listings
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input
                                                                        id="type6"
                                                                        type="checkbox"
                                                                        name="type6"
                                                                    />
                                                                    <label htmlFor="type6">
                                                                        Purchases
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input
                                                                        id="type7"
                                                                        type="checkbox"
                                                                        name="type7"
                                                                    />
                                                                    <label htmlFor="type7">
                                                                        Sales
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input
                                                                        id="type8"
                                                                        type="checkbox"
                                                                        name="type8"
                                                                    />
                                                                    <label htmlFor="type8">
                                                                        Transfers
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input
                                                                        id="type9"
                                                                        type="checkbox"
                                                                        name="type9"
                                                                    />
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
                                                                    />
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
                                        <div className="col-12 col-xl-8 order-xl-1">
                                            <div className="row row--grid">
                                                {getListActivity().map(
                                                    (element) => {
                                                        return (
                                                            <>
                                                                {" "}
                                                                <div className="col-12 col-lg-6 col-xl-12">
                                                                    <div className="activity">
                                                                        <a
                                                                            href="#/Item"
                                                                            className="activity__cover"
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    element.photo
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                        <div className="activity__content">
                                                                            <h3 className="activity__title">
                                                                                <a href="#/Item">
                                                                                    {
                                                                                        element.description
                                                                                    }
                                                                                </a>
                                                                            </h3>
                                                                            <p className="activity__text">
                                                                                listed
                                                                                by{" "}
                                                                                <a href="#/Author">
                                                                                    {
                                                                                        element.adress
                                                                                    }
                                                                                </a>{" "}
                                                                                <br />
                                                                                for{" "}
                                                                                <b>
                                                                                    {
                                                                                        element.Price
                                                                                    }
                                                                                </b>{" "}
                                                                            </p>
                                                                            <span className="activity__time">
                                                                                {
                                                                                    element.temp
                                                                                }{" "}
                                                                                minutes
                                                                                ago
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        );
                                                    }
                                                )}

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
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="tab-4"
                                    role="tabpanel"
                                >
                                    <div className="row row--grid">
                                        {/* <!-- details form --> */}
                                        <div className="col-12 col-lg-6">
                                            <form
                                                action="#"
                                                className="sign__form sign__form--profile"
                                            >
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4 className="sign__title">
                                                            Profile details
                                                        </h4>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="username"
                                                            >
                                                                Login
                                                            </label>
                                                            <input
                                                                id="username"
                                                                type="text"
                                                                name="username"
                                                                className="sign__input"
                                                                placeholder="User123"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="email"
                                                            >
                                                                Email
                                                            </label>
                                                            <input
                                                                id="email"
                                                                type="text"
                                                                name="email"
                                                                className="sign__input"
                                                                placeholder="email@email.com"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="firstname"
                                                            >
                                                                First name
                                                            </label>
                                                            <input
                                                                id="firstname"
                                                                type="text"
                                                                name="firstname"
                                                                className="sign__input"
                                                                placeholder="John"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="lastname"
                                                            >
                                                                Last name
                                                            </label>
                                                            <input
                                                                id="lastname"
                                                                type="text"
                                                                name="lastname"
                                                                className="sign__input"
                                                                placeholder="Doe"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <button
                                                            className="sign__btn"
                                                            type="button"
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <!-- end details form -->

								<!-- password form --> */}
                                        <div className="col-12 col-lg-6">
                                            <form
                                                action="#"
                                                className="sign__form sign__form--profile"
                                            >
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4 className="sign__title">
                                                            Change password
                                                        </h4>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="oldpass"
                                                            >
                                                                Old password
                                                            </label>
                                                            <input
                                                                id="oldpass"
                                                                type="password"
                                                                name="oldpass"
                                                                className="sign__input"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="newpass"
                                                            >
                                                                New password
                                                            </label>
                                                            <input
                                                                id="newpass"
                                                                type="password"
                                                                name="newpass"
                                                                className="sign__input"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="confirmpass"
                                                            >
                                                                Confirm new
                                                                password
                                                            </label>
                                                            <input
                                                                id="confirmpass"
                                                                type="password"
                                                                name="confirmpass"
                                                                className="sign__input"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                        <div className="sign__group">
                                                            <label
                                                                className="sign__label"
                                                                htmlFor="select"
                                                            >
                                                                Select
                                                            </label>
                                                            <select
                                                                name="select"
                                                                id="select"
                                                                className="sign__select"
                                                            >
                                                                <option value="0">
                                                                    Option
                                                                </option>
                                                                <option value="1">
                                                                    Option 2
                                                                </option>
                                                                <option value="2">
                                                                    Option 3
                                                                </option>
                                                                <option value="3">
                                                                    Option 4
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <button
                                                            className="sign__btn"
                                                            type="button"
                                                        >
                                                            Change
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <!-- end password form --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end content tabs --> */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Author;
