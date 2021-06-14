import React, { useEffect, useState } from "react";
import useAsync from "../../component/useAsync";
import Web3 from "web3";
import { unlockAccount } from "../../Api/web3";
import { Modal } from "reactstrap";
import { WalletsTypes } from "../../Api/WalletUtils";
import { useHistory } from "react-router";
import "./Header.css";
function Header(props: any) {
    const history = useHistory();
    // @ts-ignore
    const { ethereum } = window;
    const web3 = new Web3(ethereum);
    const { pending, error, call } = useAsync(unlockAccount);
    const [netName, setNetName] = useState("");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [walletType, setWalletType] = useState("");
    const togglenetwork = () => setModalNetwork(true);
    const toggleConnect = () => setModalConnect(false);
    const [netId, setNetId] = useState<any>();
    const [modalnetwork, setModalNetwork] = useState(false);
    const [myWallet, setMyWallet] = useState(undefined);
    const [modalConnect, setModalConnect] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [accountAlgo, setAccountSign] = useState();
    const [account, setAccount] = useState("");
    function namenetwork(netId: number) {
        if (netId == 1) {
            setNetName("Main");
        } else if (netId == 42) {
            setNetName("Kovan");
        } else if (netId == 0) {
            setNetName("Loading");
        } else {
            togglenetwork();
            setNetName("Unknow");
        }
    }
    async function onClickSign() {
        web3.eth.getAccounts(function (err: any, accounts: any) {
            if (err != null) {
                console.error("An error occurred: " + err);
                setModalConnect(true);
            } else if (accounts.length == 0) {
                console.log("User is not logged in to MetaMask");

                setModalConnect(true);
            } else {
                const netId1 = web3.eth.net.getId();
                netId1.then((value: any) => {
                    if (value !== 42) {
                        setModalNetwork(true);
                        localStorage.setItem("publicKey", accounts[0]);
                        localStorage.setItem("netName", value);
                    } else {
                        alert("vous avez deja connectez");
                        localStorage.setItem("publicKey", accounts[0]);
                        localStorage.setItem("netName", value);
                    }
                });
            }
        });

        // @ts-ignore

        //this.algoConnected = JSON.stringify(d, null, 2);

        // @ts-ignore

        AlgoSigner.accounts({
            ledger: "TestNet",
        })
            .then((d: any) => {
                let accounts = d;
                setModalConnect(false);
                alert("vous avez deja connect with algosigner");
            })

            .catch((e: any) => {
                let algoConnected = null;
                setModalConnect(false);
            });
    }

    const connectAlgo = () => {
        let algosigned;
        let algoconnect;
        setModalConnect(false);
        // @ts-ignore

        if (typeof AlgoSigner !== "undefined") {
            algosigned = "AlgoSigner is installed.";
            // @ts-ignore
            AlgoSigner.connect()
                .then((d: any) => {
                    localStorage.setItem("wallettype", "algosigner");

                    setWalletType(WalletsTypes.ALGO);
                    setModalConnect(false);
                    // @ts-ignore

                    AlgoSigner.accounts({
                        ledger: "TestNet",
                    })
                        .then((d: any) => {
                            let accounts = d;
                        })
                        .then((result: any) => {
                            algoconnect = true;
                        });

                    algoconnect = true;
                })
                .catch((e: any) => {
                    let algoConnected = null;
                });
        } else {
            algosigned = "AlgoSigner is NOT installed.";
            window.open(
                "https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm",
                "_blank",
                "location=yes,height=570,width=520,scrollbars=yes,status=yes"
            );
            algoconnect = false;
        }
    };

    async function onClickConnectMetamask() {
        setModalConnect(false);
        if (!ethereum) {
            toggle();
        } else {
            const { error, data } = await call(null);
            if (error) {
            }
            if (data) {
                localStorage.setItem("wallettype", "metamask");
                setWalletType(WalletsTypes.METAMASK);
                const netId = await web3.eth.net.getId();
                setNetId(netId);
                namenetwork(netId);
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                alert("netid" + accounts[0]);
            }
        }
    }

    function goExplore() {
        window.location.assign("#/Explore");
    }
    function goExploreSecond() {
        window.location.assign("#/Exploresecond");
    }
    function goItem() {
        window.location.assign("#/Item");
        const active = true;
        props.onClickActive(active);
    }
    function goItemSecond() {
        window.location.assign("#/Item");
        const active = false;
        props.onClickActive(active);
    }

    return (
        <div className="header">
            <>
                <Modal
                    isOpen={modalConnect}
                    toggle={toggleConnect}
                    wrapClassName="modalLoadingWrap"
                    modalClassName="modalLoadingModal"
                    backdropClassName="modalLoadingBackdrop"
                    contentClassName="modalLoadingContent"
                >
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={onClickConnectMetamask}
                    >
                        Connect with Meta Mask
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={connectAlgo}
                    >
                        Connect with Algo Signer
                    </button>
                </Modal>
            </>
            <>
                <Modal
                    isOpen={modalnetwork}
                    toggle={togglenetwork}
                    wrapClassName="modalLoadingWrap"
                    modalClassName="modalLoadingModal"
                    backdropClassName="modalLoadingBackdrop"
                    contentClassName="modalLoadingContent"
                >
                    <div className="modal-header headerModal">
                        <h2>Wrong Network</h2>
                        <button
                            onClick={() => setModalNetwork(false)}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true" className="spanx">
                                &times;
                            </span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <h5>Network not supported</h5>
                    </div>
                    {/* <h1>Wrong Network</h1>
                    <button
                        onClick={() => setModalNetwork(false)}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <p>Network not supported</p> */}
                </Modal>
            </>
            <>
                <Modal isOpen={modal} toggle={toggle}>
                    <div
                        className="modal-"
                        style={{ background: "#0d151f", padding: "22px" }}
                    >
                        <p
                            className="modal-"
                            style={{
                                color: "wheat",
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: 700,
                            }}
                        >
                            {" "}
                            Metamask extension not installed
                        </p>
                        <p
                            className="modal-link"
                            style={{
                                color: "wheat",
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: 700,
                            }}
                        >
                            {" "}
                            Download it{" "}
                            <a
                                style={{
                                    color: "#6f42c1",
                                    fontSize: "16px",
                                    fontWeight: "bolder",
                                }}
                                href="https://metamask.io/download.html"
                                target="_blank"
                            >
                                here!
                            </a>{" "}
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <img src="img/metamask.png" width="15%" />{" "}
                        </div>
                    </div>
                </Modal>
            </>
            <div className="header__content">
                <div className="header__logo">
                    <a href="#/Home"></a>
                </div>

                <form action="#">
                    <input
                        type="text"
                        className="account"
                        disabled
                        value={account}
                    ></input>
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                        </svg>
                    </button>
                    <button type="button" className="close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                        </svg>
                    </button>
                </form>

                <div className="header__menu">
                    <ul className="header__nav">
                        <li className="header__nav-item">
                            <a
                                className="header__nav-link"
                                href="#"
                                role="button"
                                id="dropdownMenuHome"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Home Pages{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                </svg>
                            </a>

                            <ul
                                className="dropdown-menu header__nav-menu"
                                aria-labelledby="dropdownMenuHome"
                            >
                                <li>
                                    <a href="#/Home">Home Page 1</a>
                                </li>
                                <li>
                                    <a href="#/Homesecond">Home Page 2</a>
                                </li>
                                <li>
                                    <a href="#/Homethree">Home Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <a
                                className="header__nav-link"
                                href="#"
                                role="button"
                                id="dropdownMenu"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Explore Pages{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                </svg>
                            </a>

                            <ul
                                className="dropdown-menu header__nav-menu"
                                aria-labelledby="dropdownMenu"
                            >
                                <li>
                                    <a onClick={goExplore}>Explore page 1</a>
                                </li>
                                <li>
                                    <a onClick={goExploreSecond}>
                                        Explore page 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#/Explorethree">Explore page 3</a>
                                </li>
                                <li>
                                    <a onClick={goItem}>Place a bid</a>
                                </li>
                                <li>
                                    <a onClick={goItemSecond}>Buy photo</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <a href="#/Activity" className="header__nav-link">
                                Marketplace
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a
                                className="header__nav-link"
                                href="#"
                                role="button"
                                id="dropdownMenu0"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Community{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                </svg>
                            </a>

                            <ul
                                className="dropdown-menu header__nav-menu"
                                aria-labelledby="dropdownMenu0"
                            >
                                <li>
                                    <a href="#/Token">Token</a>
                                </li>
                                <li className="dropdown-submenu">
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        role="button"
                                        id="dropdownMenuSub"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Blog{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                        </svg>
                                    </a>

                                    <ul
                                        className="dropdown-menu header__nav-menu"
                                        aria-labelledby="dropdownMenuSub"
                                    >
                                        <li>
                                            <a href="#/Blog">Blog style 1</a>
                                        </li>
                                        <li>
                                            <a href="#/Blog">Blog style 2</a>
                                        </li>
                                        <li>
                                            <a href="#/Article">Article</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/Faq">Help center</a>
                                </li>
                                <li>
                                    <a href="#/contact">Contacts</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <a
                                className="header__nav-link"
                                href="#"
                                role="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Photos{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                </svg>
                            </a>

                            <ul
                                className="dropdown-menu header__nav-menu"
                                aria-labelledby="dropdownMenu1"
                            >
                                <li>
                                    <a href="#/Authors">Authors</a>
                                </li>
                                <li>
                                    <a href="#/Author">Author</a>
                                </li>
                                <li>
                                    <a href="#/Collection">Collection</a>
                                </li>
                                <li>
                                    <a href="#/Create">Create Photo</a>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <a
                                className="header__nav-link header__nav-link--menu"
                                href="#"
                                role="button"
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
                                </svg>
                            </a>

                            <ul
                                className="dropdown-menu header__nav-menu"
                                aria-labelledby="dropdownMenu2"
                            >
                                <li>
                                    <a href="#/Signin">Sign in</a>
                                </li>
                                <li>
                                    <a href="#/Signup">Sign up</a>
                                </li>
                                <li>
                                    <a href="#/Forgot">Forgot password</a>
                                </li>
                                <li>
                                    <a href="#/PageNotFound">404 Page</a>
                                </li>
                                <li>
                                    <a href="#/Privacy">Privacy policy</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="header__actions">
                    <div className="header__action header__action--search">
                        <button className="header__action-btn" type="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                            </svg>
                        </button>
                    </div>

                    <div className="header__action header__action--signin">
                        <button
                            className={
                                activeButton === false
                                    ? "header__action-btn header__action-btn--signin"
                                    : "buttonDisabled"
                            }
                            onClick={onClickSign}
                        >
                            <span>Sign in</span>
                        </button>
                    </div>
                </div>

                <button className="header__btn" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
}
export default Header;
