import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Author from "../component/Authors/Authorcomponent";
import Collectioncomponent from "../component/Collection/Collectioncomponent";
import Hotcollection from "../component/Collection/Hotcollection";
import Web3 from "web3";
import { Modal } from "reactstrap";
function Collection() {
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
                <div className="main__author" data-bg="img/bg/bg.png"></div>
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-xl-3">
                            <Author></Author>
                        </div>
                        <div className="col-12 col-xl-9">
                            {" "}
                            <Collectioncomponent></Collectioncomponent>
                        </div>
                    </div>

                    <Hotcollection></Hotcollection>
                </div>
            </main>
        </div>
    );
}
export default Collection;
