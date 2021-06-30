import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Headsecondhome from "../component/Home/Headsecondhome";
import Explorecollection from "../component/Explore/Explorecollection";
import Homelive from "../component/Home/Homelive";
import HomeBlog from "../component/Home/HomeBlog";
import Footer from "../component/Footer/Footer";
import { Modal } from "reactstrap";
import Web3 from "web3";
function Homesecond() {
    const [activeExplore, setActiveexplore] = useState(true);
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
                <Headsecondhome></Headsecondhome>
                <div className="container">
                    {/* <!-- explore --> */}
                    <section className="row row--grid">
                        {/* <!-- title --> */}
                        <div className="col-12">
                            <div className="main__title main__title--center">
                                <h2>Explore exclusive digital assets</h2>
                            </div>
                        </div>
                        <Explorecollection
                            activeButton={activeExplore}
                        ></Explorecollection>
                        ;
                    </section>{" "}
                    <>
                        <Homelive></Homelive>
                        <HomeBlog></HomeBlog>
                    </>
                    <div className="row">
                        <div className="col-12">
                            <div className="partners owl-carousel">
                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/3docean-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/activeden-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/audiojungle-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/codecanyon-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/photodune-light-background.png"
                                        alt=""
                                    />
                                </a>

                                <a href="#" className="partners__img">
                                    <img
                                        src="img/partners/themeforest-light-background.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Homesecond;
