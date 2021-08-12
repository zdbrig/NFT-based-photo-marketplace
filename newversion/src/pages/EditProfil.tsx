import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Web3 from "web3";
import Footer from "../component/Footer/Footer";
import ipfs from "../component/Ipfs/ipfsApi";

var base64Img = require("base64-img-promise");
var fs = require("fs");
function EditProfil() {
    const [photo, setPhoto] = useState<any>();
    const [username, setUserName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [publicKey, setPublicKey] = useState<any>();
    const [user, setUser] = useState<any>();
    const [activeItem, setActiveItem] = useState(false);
    const [ipfsPhoto, setipfsPhoto] = useState<any>();
  
    useEffect(() => {
        if (localStorage.getItem("wallettype") === "metamask") {
            //@ts-ignore
            const web3 = new Web3(ethereum);
            const netId1 = web3.eth.net.getId();

            netId1.then((value: any) => {
                if (value !== 42) {
                } else {
                    const accoun = web3.eth.getAccounts().then((acco: any) => {
                        setPublicKey(acco[0]);
                    });
                }
            });
        } else {
            window.location.assign("#/Signin");
        }
    });
    function changePhoto(event: any) {
        event.preventDefault();

        const file = event.target.files[0];

        const reader = new window.FileReader();

        reader.readAsArrayBuffer(file); // Read bufffered file

        // Callback
        reader.onloadend = () => {
            //@ts-ignore
            const buffer = new Buffer(reader.result);
            console.log("photo" + photo);

            ipfs.files.add(buffer, (error: any, result: any) => {
                setipfsPhoto(result[0].hash);
                console.log(result[0].hash);
                console.log("=== buffer ===", buffer);
            });
            setPhoto(event.target.value);
        };
    }
    function editProfil() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                publicKey: publicKey,
                photo: ipfsPhoto,
            }),
        };

        fetch("api/updateUsers?id=" + publicKey, requestOptions)
            .then((response) => response.text())

            .then((data) => {});
    }

    useEffect(() => {
        if (localStorage.getItem("wallettype") === "metamask") {
            //@ts-ignore
            const web3 = new Web3(ethereum);
            const netId1 = web3.eth.net.getId();

            netId1.then((value: any) => {
                if (value !== 42) {
                } else {
                    const accoun = web3.eth.getAccounts().then((acco: any) => {
                        getUserByPublicKey(acco[0]);
                    });
                }
            });
        } else {
            window.location.assign("#/Signin");
        }
    }, []);

    function getUserByPublicKey(publicKey: any) {
        fetch("/api/getUserByPublickey?publicKey=" + publicKey)
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
                    setUserName(data.username);
                    setEmail(data.email);
                    setPhoto(data.photo);
                    setUser(data);
                    console.log("data" + JSON.stringify(data));
                });
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err);
            });
    }
    function changeUsername(event: any) {
        setUserName(event.target.value);
    }
    function changeEmail(event: any) {
        setEmail(event.taget.value);
    }
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    return (
        <div>
             <Header
                onClickActive={handleClick}
                account={publicKey}
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
                                    Edit Profil
                                </li>
                            </ul>
                        </div>
                        {/* <!-- end breadcrumb -->

				<!-- authorization form --> */}
                        <div className="col-12">
                            <div className="sign">
                                <div className="sign__content">
                                    <form action="#" className="sign__form">
                                        {/* <a href="#/Home" className="sign__logo">
                                            <img src="img/logo.svg" alt="" />
                                        </a> */}

                                        <div className="sign__group">
                                            {/* <label
                                                id="file1"
                                                htmlFor="sign__file-upload"
                                                className="uploadFile"
                                            ></label> */}
                                            <input
                                                data-name="#file1"
                                                id="sign__file-upload"
                                                name="file"
                                                className="sign__file-upload filePhoto"
                                                type="file"
                                                accept=".png,.jpg,.jpeg"
                                                required
                                                placeholder="e. g. Image, Audio, Video"
                                                onChange={changePhoto}
                                            />
                                        </div>
                                        <div className="sign__group">
                                            <input
                                                type="text"
                                                className="sign__input"
                                                placeholder="username"
                                                value={username}
                                                onChange={changeUsername}
                                            />
                                        </div>

                                        <div className="sign__group">
                                            <input
                                                type="text"
                                                className="sign__input"
                                                placeholder="Email"
                                                value={email}
                                                onChange={changeEmail}
                                            />
                                        </div>

                                        {/* <div className="sign__group sign__group--checkbox">
                                            <input
                                                id="remember"
                                                name="remember"
                                                type="checkbox"
                                                checked
                                            />
                                            <label htmlFor="remember">
                                                I agree to the{" "}
                                                <a href="privacy.html">
                                                    Privacy Policy
                                                </a>
                                            </label>
                                        </div> */}

                                        <button
                                            className="sign__btn"
                                            type="button"
                                            onClick={editProfil}
                                        >
                                            Edit Profil
                                        </button>

                                        {/* <span className="sign__text">
                                            We will send a password to your
                                            Email
                                        </span> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end authorization form --> */}
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </div>
    );
}
export default EditProfil;
