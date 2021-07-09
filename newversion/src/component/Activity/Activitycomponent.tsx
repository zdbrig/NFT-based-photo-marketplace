import React, { useEffect, useState, useRef } from "react";
import { ListGroupItem } from "reactstrap";
import moment from "moment";
import { getListActivity } from "../../Api/Activity";
import { unlockAccountImpl } from "../../Ethereum/Unlockaccount";
import Iframe from "react-iframe";
import IframeResizer from "iframe-resizer-react";
import "./Activitycomponent.css";

import Web3 from "web3";
import { Modal } from "reactstrap";
import en from "javascript-time-ago/locale/en";
// import TimeAgo from "javascript-time-ago";
import Swal from "sweetalert2";
import TimeAgo from "react-timeago";
import { finished } from "stream";

function Activitycomponent(props: any) {
    const [photo, setPhoto] = useState();
    const [namePhoto, setNamePhoto] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [web3, setWeb3] = useState<any>();
    const [accounts, setAcounts] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [networkId, setNetworkId] = useState<any>();
    const [networkType, setNetworkType] = useState<any>();
    const [photoNFTData, setPhotoNFTData] = useState<any>();
    const [photoNFTMarketplace, setPhotoNFTMarketplace] = useState<any>();
    const [PHOTO_NFT_MARKETPLACE, setPHOTO_NFT_MARKETPLACE] = useState<any>();
    const [allPhotos, setAllPhoto] = useState<any>([]);
    const [allPhotos1, setAllPhoto1] = useState<any>([]);
    const [tailleTab, setTailleTab] = useState(8);
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showMorePhoto, setShowMorePhoto] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [isImage, setIsImage] = useState(true);
    const toggleModal = () => setShowModal(false);

    const connectContract = async () => {
        // const web3 = await unlockAccountImpl();
        //@ts-ignore
        const { ethereum } = window;

        const web3 = new Web3(ethereum);
        let PhotoNFTMarketplace = require("../../contract/contracts/PhotoNFTMarketplace.json");

        let PhotoNFTData = require("../../contract/contracts/PhotoNFTData.json");

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        const currentAccount = accounts[0];

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();
        let balance =
            accounts.length > 0
                ? await web3.eth.getBalance(accounts[0])
                : web3.utils.toWei("0");
        balance = web3.utils.fromWei(balance, "ether");

        let instancePhotoNFTMarketplace = null;
        let instancePhotoNFTData = null;
        let PHOTO_NFT_MARKETPLACE;
        let deployedNetwork = null;
        // Create instance of contracts
        if (PhotoNFTData.networks) {
            deployedNetwork = PhotoNFTData.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoNFTData = new web3.eth.Contract(
                    PhotoNFTData.abi,
                    deployedNetwork && deployedNetwork.address
                );
                console.log(
                    "=== instancePhotoNFTData ===",
                    instancePhotoNFTData
                );
            }
        }

        // setPhotoNFTData(instancePhotoNFTData);
        if (PhotoNFTMarketplace.networks) {
            deployedNetwork =
                PhotoNFTMarketplace.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoNFTMarketplace = new web3.eth.Contract(
                    PhotoNFTMarketplace.abi,
                    deployedNetwork && deployedNetwork.address
                );
                PHOTO_NFT_MARKETPLACE = deployedNetwork.address;
                console.log(
                    "=== instancePhotoNFTMarketplace ===",
                    instancePhotoNFTMarketplace
                );
            }
        }

        // setPhotoNFTData(instancePhotoNFTData);

        // setWeb3(web3);
        // setAcounts(accounts);
        // setBalance(balance);
        // setNetworkId(networkId);
        // setNetworkType(networkType);
        // setPhotoNFTMarketplace(instancePhotoNFTMarketplace);

        // setPHOTO_NFT_MARKETPLACE(PHOTO_NFT_MARKETPLACE);
        return instancePhotoNFTData;
    };
    // useEffect(() => {
    //     renderallphotos();
    // }, [allPhotos]);

    function getTime(id: any) {
        let ret: Array<any> = [];
        var querytosend = `{
            allPhotoNFTs(where:{photoNft:"${id}"}){
                id
                owner
                photoNft
                nftName
                nftSymbol
                photoPrice
                ipfsHashOfPhoto
                timesTmp
                blockNumber
                status
                redevance
                seller
              }
          }`;

        console.log(allPhotos1);
        fetch(
            "https://api.thegraph.com/subgraphs/name/zouaouik/photonftfactory1",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                    query: querytosend,
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                // ret.push(data.data.allPhotoNFTs);

                // setTime(data.data.allPhotoNFTs[0].timesTmp);
                //ret.push(data.data.allPhotoNFTs);
                allPhotos1.push(data.data.allPhotoNFTs);
                setAllPhoto1([...allPhotos1]);
                console.log("ret1" + data.data.allPhotoNFTs);
                // return data;
            });
    }

    const iframeRef = useRef(null);

    function finished() {
        const iframeItem = iframeRef.current;

        $("#myIframe")
            .contents()
            .find("img")
            .append(
                $('<link rel="stylesheet" type="text/css" href="style.css">')
            );
        $("#myIframe")
            .contents()
            .find("head")
            .append(
                $(
                    '<link rel="stylesheet" type="text/css" href="/home/amal/zbriggithub/NFT-based-photo-marketplace/newversion/src/component/Activity/iframe.css">'
                )
            );
    }
    const testImage = (url: string) => {
        return new Promise(function (resolve, reject) {
            let timeout = 5000;
            let timer: any,
                img = new Image();
            img.onerror = img.onabort = function () {
                clearTimeout(timer);
                reject("error");
            };
            img.onload = function () {
                clearTimeout(timer);
                resolve("success");
            };
            timer = setTimeout(function () {
                // reset .src to invalid URL so it stops previous
                // loading, but doens't trigger new load
                img.src = "//!!!!/noexist.jpg";
                reject("timeout");
            }, timeout);
            img.src = url;
        });
    };
    const renderImageOrVideo = () => {
        testImage(
            "https://ipfs.io/ipfs/QmXWQVE4pixnmgiMzBnEgFBWG8z7Cbirqpv3KUihTtRpoU"
        ).then(
            (res) => {
                setIsImage(true);
            },
            (error) => {
                setIsImage(false);
            }
        );
    };

    function renderCard() {
        //@ts-ignore

        const { ethereum } = window;

        const web3 = new Web3(ethereum);
        let ret: Array<any> = [];
        // let i = index;

        console.log("photo1" + JSON.stringify(allPhotos1));
        if (!Array.isArray(allPhotos1) || allPhotos1.length === 0) return;
        let lengthTab = allPhotos1.length;

        console.log(lengthTab);
        if (lengthTab <= 8) {
            for (let i = 0; i < lengthTab; i++) {
                console.log("photo" + allPhotos1[i]);
                allPhotos1[i].map((photo: any) => {
                    var date = new Date(photo.timesTmp * 1000);

                    ret.push(
                        <>
                            <div className="col-12 col-lg-6">
                                <div className="activity">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            goItem(
                                                web3.utils.fromWei(
                                                    `${photo.photoPrice}`,
                                                    "ether"
                                                ),
                                                photo.ipfsHashOfPhoto,
                                                photo.photoNFT
                                            )
                                        }
                                        className="activity__cover"
                                    >
                                        {isImage ? (
                                            <img
                                                src={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}`}
                                            ></img>
                                        ) : (
                                            <video> </video>
                                        )}
                                    </button>
                                    <div className="activity__content">
                                        <h3 className="activity__title">
                                            <a
                                                onClick={() =>
                                                    goItem(
                                                        web3.utils.fromWei(
                                                            `${photo.photoPrice}`,
                                                            "ether"
                                                        ),
                                                        photo.ipfsHashOfPhoto,
                                                        photo.photoNft
                                                    )
                                                }
                                            >
                                                {photo.nftSymbol}
                                            </a>
                                        </h3>
                                        <p className="activity__text">
                                            listed by{" "}
                                            <a href="#/Author">
                                                {photo.nftName}
                                            </a>{" "}
                                            <br />
                                            for{" "}
                                            {web3.utils.fromWei(
                                                `${photo.photoPrice}`,
                                                "ether"
                                            )}{" "}
                                            ETH <b></b>{" "}
                                        </p>
                                        <span className="activity__time">
                                            <TimeAgo date={date} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                    //}
                });
            }

            return ret;
        }
    }

    function renderCardPlus() {
        console.log(allPhotos1);
        let ret: Array<any> = [];

        let i = index;
        let show = false;

        let indice = allPhotos.length - index;

        if (Math.sign(indice) === -1) {
            show = true;
        }
        if (show === false) {
            for (let i1 = indice; i1 > 0; i1--) {
                if (allPhotos[i1].status === "Open") {
                    if (i < index + 8) {
                        i++;
                        ret.push(
                            <div className="col-12 col-lg-6">
                                <div className="activity">
                                    <button
                                        onClick={() =>
                                            goItem(
                                                web3.utils.fromWei(
                                                    `${allPhotos[i1].photoPrice}`,
                                                    "ether"
                                                ),
                                                allPhotos[i1].ipfsHashOfPhoto,
                                                allPhotos[i1].photoNFT
                                            )
                                        }
                                        className="activity__cover"
                                    >
                                        <img
                                            src={`https://ipfs.io/ipfs/${allPhotos[i1].ipfsHashOfPhoto}`}
                                            alt=""
                                        />
                                    </button>
                                    <div className="activity__content">
                                        <h3 className="activity__title">
                                            <a href="#/Item">
                                                {allPhotos[i1].photoNFTSymbol}
                                            </a>
                                        </h3>
                                        <p className="activity__text">
                                            listed by{" "}
                                            <a href="#/Author">
                                                {allPhotos[i1].photoNFTName}
                                            </a>{" "}
                                            <br />
                                            for{" "}
                                            {web3.utils.fromWei(
                                                `${allPhotos[i1].photoPrice}`,
                                                "ether"
                                            )}{" "}
                                            ETH <b></b>{" "}
                                        </p>
                                        <span className="activity__time">
                                            4 minutes ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            }
            return ret;
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "il n y a pas dautres photo",
                showConfirmButton: false,
                timer: 1500,
            }).then((res) => {
                window.location.reload();
            });
        }
    }

    useEffect(() => {
        const data = connectContract().then((data: any) => {
            let allPhotos = data.methods.getAllPhotos().call();

            let tab: Array<any> = [];
            allPhotos.then((value: any) => {
                value.map((ele: any) => {
                    if (ele.status === "Open") {
                        console.log(ele.status);
                        tab.push(ele.photoNFT);
                    }
                });
                if (tab.length > 8) {
                    setShowButton(true);
                }
                console.log("lengt" + tab);
                let index = tab.length - 1;
                for (let i = index; i >= 0; i--) {
                    getTime(tab[i]);
                }
                // value.map((ele: any) => {
                //     getTime(ele.photoNFT);
                // });
                console.log("photos" + allPhotos1);

                // let tab: Array<any> = [];

                // let tab1: Array<any> = [];
                // for (var i = value.length; i >= 0; i--) {
                //     let x = value.slice(i, i + 1);

                //     tab.push(x);
                // }

                // tab.map((ele: any) => {
                //     ele.map((ele1: any) => {
                //         if (ele1.status === "Open") {
                //             // console.log(ele1);
                //             tab1.push(ele1);
                //         }
                //     });
                // });
                // let stringArr: Array<any> = [];
                // console.log();
                // tab1.map((photo: any) => {
                //     let ret = getTime(puseEffecthoto.photoNFT);
                //     console.log(ret);
                //     stringArr.push(getTime(photo.photoNFT));
                //     console.log("ret" + stringArr);
                // });
                // photo1.push(
                //     getTime("0x5b2fcbc4e4950ef8963990886eb2f965e43cc0c6")
                // );
                // console.log("photo" + photo1[0]);
                // setAllPhoto(tab1);

                // let taille = tab1.length;
                // console.log("taille" + taille);

                // setTailleTab(taille);
                // setAllPhoto(tab1);
            });
        });
    }, []);

    $(window).on("load", function () {
        $("#iframe")
            .contents()
            .find("head")
            .click(function () {
                alert("zz");
            });
        // var css =
        //     '<style type="text/css">' + "#yourCSS{display:none}; " + "</style>";
        // jQuery(head).append(css);
    });
    function goItem(price: any, photo: any, nft: any) {
        // localStorage.setItem("prix", price);
        // localStorage.setItem("photo", photo);
        // localStorage.setItem("nftPhoto", nft);
        localStorage.setItem("nftPhoto", nft);
        window.location.assign("#/Item");
    }
    function renderAllPhoto() {
        //@ts-ignore
        const { ethereum } = window;

        const web3 = new Web3(ethereum);
        let ret: Array<any> = [];
        let x = allPhotos1.length - tailleTab;
        let z = 0;
        if (x < 8) {
            z = allPhotos1.length;

            // setTailleTab(allPhotos1.length);
        } else {
            z = tailleTab + 8;
        }
        // let x = tailleTab + 8;
        if (!Array.isArray(allPhotos1)) return;

        for (let i = tailleTab; i < z; i++) {
            console.log(allPhotos1[i]);
            allPhotos1[i].map((photo: any) => {
                ret.push(
                    <>
                        <div className="col-12 col-lg-6">
                            <div className="activity">
                                <button
                                    type="button"
                                    onClick={() =>
                                        goItem(
                                            web3.utils.fromWei(
                                                `${photo.photoPrice}`,
                                                "ether"
                                            ),
                                            photo.ipfsHashOfPhoto,
                                            photo.photoNFT
                                        )
                                    }
                                    className="activity__cover"
                                >
                                    {/* <iframe
                                        src={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}`}
                                        id="iframe"
                                        name="iframe"
                                        className="iframe"
                                    /> */}
                                </button>
                                <div className="activity__content">
                                    <h3 className="activity__title">
                                        <a
                                            onClick={() =>
                                                goItem(
                                                    web3.utils.fromWei(
                                                        `${photo.photoPrice}`,
                                                        "ether"
                                                    ),
                                                    photo.ipfsHashOfPhoto,
                                                    photo.photoNFT
                                                )
                                            }
                                        >
                                            {photo.nftSymbol}
                                        </a>
                                    </h3>
                                    <p className="activity__text">
                                        listed by{" "}
                                        <a href="#/Author">{photo.nftName}</a>{" "}
                                        <br />
                                        for{" "}
                                        {web3.utils.fromWei(
                                            `${photo.photoPrice}`,
                                            "ether"
                                        )}{" "}
                                        ETH <b></b>{" "}
                                    </p>
                                    <span className="activity__time">
                                        {/* {time} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                );
                //}
            });
        }

        return ret;
    }
    const ChargerPlus = () => {
        if (allPhotos1.length - tailleTab < 8) {
            setShowButton(false);
        }

        setShowMorePhoto(true);
    };

    return (
        <div className="col-12 col-xl-9 order-xl-1">
            <div className="row row--grid">
                {/* {index < 8 ? renderCard() : renderCardPlus()} */}
                {renderCard()}
            </div>
            <div className="row row--grid">
                {showMorePhoto === true && renderAllPhoto()}
            </div>
            {showButton === true && (
                <div className="row row--grid">
                    <div className="col-12">
                        <button
                            className="main__load"
                            type="button"
                            // data-toggle="collapse"
                            // data-target="#collapsemore"
                            // aria-expanded="false"
                            // aria-controls="collapsemore"
                            onClick={ChargerPlus}
                            disabled={showModal}
                        >
                            Load more
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Activitycomponent;
