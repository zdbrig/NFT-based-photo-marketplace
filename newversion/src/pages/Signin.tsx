import React, { useState,useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Web3 from "web3";
import useAsync from "../component/useAsync";
import { unlockAccount } from "../Api/web3";
import { Modal } from "reactstrap";
import "./Signin.css";
function Signin() {
    const [activeItem, setActiveItem] = useState(false);

    // @ts-ignore
    const { ethereum } = window;
    const web3 = new Web3(ethereum);

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
    const { pending, error, call } = useAsync(unlockAccount);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };


    
    function getUserByPublicKey(publicKey: any) {
        fetch("/api/getUserByPublickey?publicKey=" + publicKey, {
            method: "GET",
            mode: "no-cors",
            credentials: "same-origin",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer abc123def.abc123def.abc123def",
            },
        })
            .then(function (response) {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " +
                            response.status
                    );
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log("data1" + data.user);

                    if (data.user !== "undefined") {
                        window.location.assign("#/Create");
                    } else {
                        window.location.assign("#/Signup");
                    }
                    console.log("data" + JSON.stringify(data));
                });
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err);
            });
    }
    function namenetwork(netId: number) {
        if (netId == 1) {
            setNetName("Main");
        } else if (netId == 42) {
            setNetName("kovan");
            //setShowInput(true)
        } else if (netId == 0) {
            setNetName("Loading");
        } else {
            togglenetwork();
            setNetName("Unknow");
        }
    }
    useEffect(() => {
        //console.log(showConnect)
        web3.eth.getAccounts(function (err: any, accounts: any) {
            if (err != null) {
              console.error("An error occurred: " + err);
            } else if (accounts.length == 0) {
              console.log("User is not logged in to MetaMask");
             
              //store.dispatch(setLoadFromPage(pageFrom))
             // history.push("/ConnectAccount");
            } else {
                web3.eth.net.getId(function (err: any, id: any) {
               
                console.log("net"+id)
                namenetwork(id)
              } )}
          });
    });
    async function onClickConnectMetamask() {
        setModalConnect(false);
        if (!ethereum) {
         setModal(true)
        } else {
            const { error, data } = await call(null);
            if (error) {
            }
            if (data) {
                localStorage.setItem("wallettype", "metamask");
                setWalletType("metamask");
                const netId = await web3.eth.net.getId();
                namenetwork(netId);
                setNetId(netId);

                const accounts = await web3.eth.getAccounts();
                console.log("accounts => "+JSON.stringify(accounts))
                getUserByPublicKey(accounts[0]);
                setAccount(accounts[0]);
                // window.location.assign("#/home");
            }
        }
    }
    return (
        <div className="Signin">
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
            <Modal
                isOpen={modalnetwork}
                toggle={togglenetwork}
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
            <main className="main">
                <div className="container">
                    <div className="row row--grid">
                        {/* <!-- breadcrumb --> */}
                        {/* <div className="col-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb__item">
                                    <a href="#/Home">Home</a>
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--active">
                                    Sign in
                                </li>
                            </ul>
                        </div> */}
                        {/* <!-- end breadcrumb --> */}

                        {/* <!-- sign in --> */}
                        <div className="col-12">
                            <div className="sign">
                                <div className="sign__content">
                                    {/* <!-- authorization form --> */}
                                    <form action="#" className="sign__form">
                                        {/* <a href="#/Home" className="sign__logo">
                                            <img src="img/logo.svg" alt="" />
                                        </a> */}
                                        <p className="titleNft" >  Nft Marketplace Sqoin </p>
                                      
                                        {/* <div className="sign__group">
                                            <input
                                                type="text"
                                                className="sign__input"
                                                placeholder="Email"
                                            />
                                        </div> */}
                                        {/* 
                                        <div className="sign__group">
                                            <input
                                                type="password"
                                                className="sign__input"
                                                placeholder="Password"
                                            />
                                        </div> */}
                                        {/* <div className="sign__group sign__group--checkbox">
                                            <input
                                                id="remember"
                                                name="remember"
                                                type="checkbox"
                                                checked
                                            />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div> */}
                                        <button
                                            className="sign__btn"
                                            type="button"
                                            onClick={onClickConnectMetamask}
                                        >
                                            Sign in with Metamask
                                        </button>
                                        <button
                                            className="sign__btn"
                                            type="button"
                                        >
                                            Sign in with Algorand
                                        </button>
                                        {/* <span className="sign__delimiter">
                                            or
                                        </span> */}
                                        {/* <div className="sign__social">
                                            <a className="fb" href="#">
                                                <svg
                                                    viewBox="0 0 9 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z" />
                                                </svg>
                                            </a>
                                            <a className="tw" href="#">
                                                <svg
                                                    viewBox="0 0 16 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z" />
                                                </svg>
                                            </a>
                                            <a className="gl" href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ionicon"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
                                                </svg>
                                            </a>
                                        </div>

                                        <span className="sign__text">
                                            Don't have an account?{" "}
                                            <a href="signup.html">Sign up!</a>
                                        </span>

                                        <span className="sign__text">
                                            <a href="#/Forgot">
                                                Forgot password?
                                            </a>
                                        </span> */}
                                    </form>
                                    {/* <!-- end authorization form --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- end sign in --> */}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Signin;
