import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Itemhead from "../component/Item/Itemheader";
import Itemcontent from "../component/Item/Itemcontent";
import Itemsidebar from "../component/Item/Itemsidebar";
import Itemasset from "../component/Item/Itemasset";
import { Modal } from "reactstrap";
import { unlockAccount } from "../Api/web3";
function Item() {
    const [activeItem, setActiveItem] = useState(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    const [photo, setPhoto] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [networkModal, setNetworkModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [accountMetamask, setAccountMetamask] = useState("");

    const copyLink = window.location.href;
    const toggle = () => setNetworkModal(false);
    const [nft, setNFT] = useState<any>();
    useEffect(() => {
        if (localStorage.getItem("wallettype") === "metamask") {
            //@ts-ignore
            const web3 = new Web3(ethereum);
            const netId1 = web3.eth.net.getId();
            netId1.then((value: any) => {
                if (value !== 42) {
                    setNetworkModal(true);
                } else {
                    const accoun = web3.eth.getAccounts().then((acco: any) => {
                        setAccountMetamask(acco[0]);
                    });
                }
            });
        } else {
            window.location.assign("#/Signin");
        }
        setPhoto(localStorage.getItem("photo"));
        console.log("xx" + photo);
        setPrice(localStorage.getItem("prix"));
        setNFT(localStorage.getItem("nft"));
    });
    function goHome() {
        window.location.assign("#/Home");
    }
    return (
        <div>
            <>
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
                <Modal
                    isOpen={loading}
                    toggle={toggle}
                    className="modalLoading"
                    wrapClassName="modalLoadingWrap"
                    modalClassName="modalLoadingModal"
                    backdropClassName="modalLoadingBackdrop"
                    contentClassName="modalLoadingContent"
                >
                    <div>
                        <p className="modalPara">
                            {" "}
                            Waiting for validation of the transaction
                        </p>
                        <img src="loading.gif" alt="" />
                    </div>
                </Modal>
            </>
            <Header
                onClickActive={handleClick}
                account={accountMetamask}
            ></Header>
            <main className="main">
                <div className="container">
                    <Itemhead />

                    <>
                        <Itemsidebar
                            activeItem={activeItem}
                            price={price}
                            nft={nft}
                        ></Itemsidebar>
                    </>

                    <Itemasset></Itemasset>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
}
export default Item;
