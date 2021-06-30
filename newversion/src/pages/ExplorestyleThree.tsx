import React, { useState, useEffect } from "react";
import Explorehead from "../component/Explore/Explorehead";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Collection from "../component/Collection/Collectioncomponent";
import Explorecollection from "../component/Explore/Explorecollection";
import Filtreexplorethree from "../component/Explorestylethree/Filtreexplorethre";
import "./Explorethree.css";
import { Modal } from "reactstrap";
import Web3 from "web3";
function Explorestylethree() {
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
        <div className="Explorethree">
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
                    <Explorehead></Explorehead>
                    <div className="row">
                        <div className="col-12 col-xl-3 order-xl-2">
                            <Filtreexplorethree />
                        </div>
                        <div className="col-12 col-xl-9 order-xl-1">
                            {/* <Collection /> */}
                            <Explorecollection></Explorecollection>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Explorestylethree;
