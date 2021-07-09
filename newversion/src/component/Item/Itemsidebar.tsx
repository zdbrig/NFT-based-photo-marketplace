import React, { useState, useEffect } from "react";
import { useAsyncEffect } from "@wbe/use-async-effect";
import { getListItem } from "../../Api/Item";
import { Modal } from "reactstrap";
import Web3 from "web3";
import Moment from "react-moment";
import moment from "moment";
import TimeAgo from "react-timeago";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import "./Itemcontent.css";
import { render } from "@testing-library/react";
import { getListLiveauction } from "../../Api/Liveauctions";
import photoNft1 from "../../contract/contracts/PhotoNFT.json";
function Itemsidebar(props: any) {
    const [web, setWeb3] = useState<any>();
    const [accounts, setAcounts] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [networkId, setNetworkId] = useState<any>();
    const [networkType, setNetworkType] = useState<any>();
    const [photoNFTData, setphotoNFTData] = useState<any>();
    const [photoAuction, setPhotoAuction] = useState<any>();
    const [photoNFTMarketplace, setPhotoNFTMarketplace] = useState<any>();
    const [currentAccount, setCurrentAccount] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [sohwModal, setShowModal] = useState(false);
    const [addressPhoto, setAddressPhoto] = useState<any>();
    const [price, setPrice] = useState<any>();
    const [photo, setPhoto] = useState<any>([]);
    const [typeAchat, setTypeAchat] = useState<any>([]);
    const [showButtonBid, setShowButtonBid] = useState(false);
    const [showButtonBidBuy, setShowButtonBidBuy] = useState(true);
    const [showButtonAuction, setShowButtonAuction] = useState(false);
    const [detailsAuction, setdetailsAuction] = useState<any>([]);
    const [Bids, setBids] = useState<any>([]);
    const toggle = () => setLoading(false);
    const toggleModal = () => setShowModal(false);
    const [link, setLink] = useState("");
    const [timeEnding, setTime] = useState(0);
    //@ts-ignore
    const { ethereum } = window;
    const web3 = new Web3(ethereum);
    function onclicklink() {
        let url = window.location.href;
        setLink(url);
    }

    async function buyPhoto() {
        setLoading(true);
        let PhotoNFT = {};

        PhotoNFT = require("../../contract/contracts/PhotoNFT.json");
        console.log("=== value of buyPhotoNFT ===" + PhotoNFT);

        //@ts-ignore
        let photoNFT = new web3.eth.Contract(PhotoNFT.abi, addressPhoto);
        console.log(photoNFT);
        /// Check owner of photoId
        const photoId = 1; /// [Note]: PhotoID is always 1. Because each photoNFT is unique.

        const owner = await photoNFT.methods.ownerOf(photoId).call();
        console.log("=== owner of photoId ===", owner); /// [Expect]: Owner should be the PhotoNFTMarketplace.sol (This also called as a proxy/escrow contract)

        console.log("=== nft ===");
        //@ts-ignore
        const photo = await photoNFTData.methods
            .getPhotoByNFTAddress(addressPhoto)
            .call();
        console.log("=== owner of photo===", photo);
        //@ts-ignore
        // const buyAmount = web3.utils.toWei(photo.photoPrice, "ether");
        const buyAmount = photo.photoPrice;
        console.log(buyAmount);
        // await web3.utils.fromWei(
        //     `${props.price}`,
        //     "ether"
        // )}
        //@ts-ignore
        const txReceipt1 = await photoNFTMarketplace.methods
            .buyPhotoNFT(addressPhoto)
            .send({ from: accounts[0], value: buyAmount })
            .once("receipt", (receipt: any) => {
                console.log("=== receipt ===", receipt);
                setLoading(false);
            })
            .then((res: any) => {
                window.location.assign("#/Activity");
            });
        console.log("=== response of buyPhotoNFT ===", txReceipt1);
        setLoading(false);
    }
    function OnchangePrice(e: any) {
        setPrice(e.target.value);
    }
    async function connectSmartContractNftDare() {
        //@ts-ignore
        const { ethereum } = window;
        const web3 = new Web3(ethereum);
        const accounts = await web3.eth.getAccounts();
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();
        let PhotoNFTData = {};

        PhotoNFTData = require("../../contract/contracts/PhotoNFTData.json");
        let instancePhotoNFTData = null;

        let deployedNetwork = null;
        //@ts-ignore
        if (PhotoNFTData.networks) {
            deployedNetwork =
                //@ts-ignore
                PhotoNFTData.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoNFTData = new web3.eth.Contract(
                    //@ts-ignore
                    PhotoNFTData.abi,
                    deployedNetwork && deployedNetwork.address
                );
                console.log(
                    "=== instancePhotoNFTData ===",
                    instancePhotoNFTData
                );
                setphotoNFTData(instancePhotoNFTData);
            }
        }
        return instancePhotoNFTData;
    }
    async function connectSmartContractAuction() {
        let PhotoAuction = {};

        PhotoAuction = require("../../contract/contracts/Auction.json");
        //@ts-ignore
        const { ethereum } = window;
        const web3 = new Web3(ethereum);

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        const currentAccount = accounts[0];
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();

        let balance =
            accounts.length > 0
                ? await web3.eth.getBalance(accounts[0])
                : web3.utils.toWei("0");
        balance = web3.utils.fromWei(balance, "ether");

        let instancePhotoNFTMarketplace = null;

        let instancePhotoAuction = null;
        let deployedNetwork = null;
        // Create instance of contracts
        //@ts-ignore

        //@ts-ignore
        if (PhotoAuction.networks) {
            deployedNetwork =
                //@ts-ignore
                PhotoAuction.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoAuction = new web3.eth.Contract(
                    //@ts-ignore
                    PhotoAuction.abi,
                    deployedNetwork && deployedNetwork.address
                );
                console.log(
                    "=== instancePhotoAuction ===",
                    instancePhotoAuction
                );
            }
        }
        return instancePhotoAuction;
    }

    function getAuctions(id: any) {
        var querytosend = `{
            tauctionCreateds(where:{photoId:"${id}"})
            {id timestamp blockNumber endingPrice startedAt duration endingPrice startingPrice photoId auctionId
              }
          }`;

        fetch("https://api.thegraph.com/subgraphs/name/zouaouik/auction", {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                query: querytosend,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // ret.push(data.data.allPhotoNFTs);

                // setTime(data.data.allPhotoNFTs[0].timesTmp);
                //ret.push(data.data.allPhotoNFTs);

                if (
                    Array.isArray(data.data.tauctionCreateds) === true &&
                    data.data.tauctionCreateds.length > 0
                ) {
                    console.log(
                        "ret1" + data.data.tauctionCreateds[0].auctionId
                    );

                    getBids(data.data.tauctionCreateds[0].auctionId);
                    getUserByPublicKey(data.data.tauctionCreateds[0].auctionId);
                }
            });
    }
    function getBids(id: any) {
        var querytosend = `{
        tauctionBids(where:{auctionId:"${id}"})
        {id timestamp blockNumber amount auctionId
          }
      }`;

        fetch("https://api.thegraph.com/subgraphs/name/zouaouik/auction", {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                query: querytosend,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setBids(data.data.tauctionBids);
            });
    }

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
                    // console.log("data" + JSON.stringify(data));
                    // setUser(data);
                    // console.log("photo" + data.photo);
                    // setipfsphoto(data.photo);
                    // setLoading(false);
                    // console.log("data" + JSON.stringify(data));
                });
            })
            .catch(function (err) {
                console.log("Fetch Error :-S", err);
            });
    }
    async function connectSmartContract() {
        setAddressPhoto(localStorage.getItem("nftPhoto"));
        let PhotoNFTMarketplace = {};

        let PhotoAuction = {};

        PhotoNFTMarketplace = require("../../contract/contracts/PhotoNFTMarketplace.json");

        PhotoAuction = require("../../contract/contracts/Auction.json");

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        const currentAccount = accounts[0];
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();

        let balance =
            accounts.length > 0
                ? await web3.eth.getBalance(accounts[0])
                : web3.utils.toWei("0");
        balance = web3.utils.fromWei(balance, "ether");

        let instancePhotoNFTMarketplace = null;

        let instancePhotoAuction = null;
        let deployedNetwork = null;
        // Create instance of contracts
        //@ts-ignore
        if (PhotoNFTMarketplace.networks) {
            deployedNetwork =
                //@ts-ignore
                PhotoNFTMarketplace.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoNFTMarketplace = new web3.eth.Contract(
                    //@ts-ignore
                    PhotoNFTMarketplace.abi,
                    deployedNetwork && deployedNetwork.address
                );
                let PHOTO_NFT_MARKETPLACE = deployedNetwork.address;

                console.log(
                    "=== instancePhotoNFTMarketplace ===",
                    instancePhotoNFTMarketplace
                );
                console.log(
                    "=== instancePhotoNFTMarketplace ===",
                    instancePhotoNFTMarketplace
                );
            }
        }

        //@ts-ignore
        if (PhotoAuction.networks) {
            deployedNetwork =
                //@ts-ignore
                PhotoAuction.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoAuction = new web3.eth.Contract(
                    //@ts-ignore
                    PhotoAuction.abi,
                    deployedNetwork && deployedNetwork.address
                );
                console.log(
                    "=== instancePhotoAuction ===",
                    instancePhotoAuction
                );
            }
        }

        if (instancePhotoNFTMarketplace) {
            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            setWeb3(web3);
            setAcounts(accounts);
            setBalance(balance);
            setNetworkId(networkId);
            setNetworkType(networkType);
            setPhotoNFTMarketplace(instancePhotoNFTMarketplace);
            setCurrentAccount(currentAccount);
            setPhotoAuction(instancePhotoAuction);
        } else {
            setWeb3(web3);

            setBalance(balance);
            setNetworkId(networkId);
            setNetworkType(networkType);
        }
    }
    useEffect(() => {
        setAddressPhoto(localStorage.getItem("nftPhoto"));
    });
    useAsyncEffect(async () => {
        const accounts1 = await web3.eth.getAccounts();
        connectSmartContractNftDare()
            .then((data: any) => {
                let Photos = data.methods
                    .getPhotoByNFTAddress(localStorage.getItem("nftPhoto"))
                    .call();

                Photos.then((value: any) => {
                    let photo1 = value;

                    if (value.typeOfSale === "InstantSalePrice") {
                        setShowButtonBid(false);
                    } else {
                        setShowButtonBid(true);
                    }
                    setPhoto(photo1);
                });
            })
            .then((value: any) => {
                let auctionNFT = connectSmartContractAuction().then(
                    (auctionNFT: any) => {
                        setPhotoAuction(auctionNFT);
                        console.log("contractauction" + auctionNFT);
                        let detailsAuction = auctionNFT.methods
                            .getAuctionByPhotoId(
                                localStorage.getItem("nftPhoto")
                            )
                            .call();
                        detailsAuction.then((value1: any) => {
                            var d = new Date();
                            console.log(d);
                            const javaScriptRelease = Date.parse(d.toString());

                            console.log(javaScriptRelease);
                            // let timeout =
                            //     (Number(value1.duration) + Number(value1.startedAt)) *
                            //         1000 -
                            //     javaScriptRelease;
                            let timeout =
                                Number(value1.duration) +
                                Number(value1.startedAt);
                            console.log(timeout);
                            var temps = moment.unix(timeout);

                            console.log(temps.toString());
                            let x =
                                Date.parse(temps.toString()) -
                                Date.parse(d.toString());

                            let adressOwner = photo.ownerAddress;
                            // console.log(accounts[0]);
                            if (value1.owner === accounts1[0]) {
                                setShowButtonBidBuy(false);
                            }
                            setTimeout(() => {
                                // setShowButtonBid(false);
                                console.log("owner" + value1.owner);

                                setShowButtonBidBuy(false);

                                console.log("owner1" + accounts1[0]);
                                if (value1.owner === accounts1[0]) {
                                    setShowButtonAuction(true);

                                    // auctionNFT.methods
                                    //     .finalizeAuction(photo.photoNFT)
                                    //     .send({
                                    //         from: accounts[0],
                                    //     });
                                }
                            }, x);
                            setTime(timeout);
                        });
                    }
                );
            });
        getAuctions(localStorage.getItem("nftPhoto"));
        connectSmartContract();
    }, []);
    function finAuction() {
        // let photoNFT = new web3.eth.Contract(
        //     //@ts-ignore
        //     photoNft1.abi,
        //     addressPhoto
        // );
        // photoNFT.methods
        //     .approve("0xd54113d5FA14Ed2A8F984263cDE6053439f3a4Ce", 1)
        //     .send({ from: accounts[0] })
        //     .once("receipt", (receipt: any) => {

        return new Promise(async (resolve, reject) => {
            try {
                photoAuction.methods.finalizeAuction(photo.photoNFT).send(
                    { from: accounts[0] }
                    // (err: any, transaction: any) => {
                    //     if (!err) resolve(transaction);
                    //     reject(err);
                    // }
                );
            } catch (e) {
                reject(e);
            }
        });
        //
        // console.log(accounts[0] + photo.photoNFT);
        // let lastBid = photoAuction.methods.getCurrentBid(photo.photoNFT).call();
        // lastBid.then((res: any) => {
        //     console.log(res[1]);
        //     photoAuction.methods
        //         .approveAndTransfer(accounts[0], res[1], photo.photoNFT)
        //         .send({ from: accounts[0] })
        //         .once("receipt", (receipt: any) => {
        //             console.log("=== receipt ===", receipt);
        //         });
        //     // photoAuction.methods.finalizeAuction(photo.photoNFT).send({
        //     //     from: accounts[0],
        //     // });
        //});
    }
    function renderPhoto() {
        let ret: Array<any> = [];

        if (photo.ipfsHashOfPhoto !== undefined) {
            ret.push(
                <iframe
                    src={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}`}
                    className="imgItem"
                />
            );
        } else {
            ret.push("");
        }
        return ret;
    }

    function bidPhoto() {
        setShowModal(true);
    }
    function renderPrix() {
        //@ts-ignore
        const { ethereum } = window;
        const web3 = new Web3(ethereum);
        let ret: Array<any> = [];
        {
            photo !== undefined
                ? ret.push(
                      <>
                          {photo.photoPrice !== undefined
                              ? web3.utils.fromWei(photo.photoPrice, "ether")
                              : ""}
                      </>
                  )
                : ret.push("");
        }

        return ret;
    }
    async function createBiding() {
        let PhotoNFT = {};

        PhotoNFT = require("../../contract/contracts/PhotoNFT.json");
        console.log("=== value of buyPhotoNFT ===" + PhotoNFT);

        //@ts-ignore
        let photoNFT = new web3.eth.Contract(PhotoNFT.abi, addressPhoto);
        console.log(photoNFT);
        /// Check owner of photoId
        const photoId = 1; /// [Note]: PhotoID is always 1. Because each photoNFT is unique.

        const owner = await photoNFT.methods.ownerOf(photoId).call();
        setShowModal(false);
        setLoading(true);
        const photoPrice = web3.utils.toWei(price, "ether");
        console.log("price" + photoPrice);
        console.log("addressPhoto" + addressPhoto);
        // // const address = "0x5d8A4cadF97ae7e42C7ce894bD0dc57616A2f8fa";

        // // const gas = 4476768;

        photoAuction.methods
            .bid(addressPhoto)
            .send({ from: accounts[0], value: photoPrice })
            .once("receipt", (receipt: any) => {
                console.log("=== receipt ===", receipt);
                setLoading(false);
            });

        let res = await photoAuction.methods.getStatus(1).call();
        console.log("res" + JSON.stringify(res));
    }
    async function getAuction(photo: any) {
        let detailsAuction = await photoAuction.methods
            .getAuctionByPhotoId(photo)
            .call();
        console.log(JSON.stringify(detailsAuction));
    }
    //             (err: any, transaction: any) => {
    //                 if (!err) resolve(transaction);
    //                 reject(err);
    //             }
    //         );
    //     } catch (e) {
    //         reject(e);
    //     }
    // });
    // photoAuction.methods
    //     .approvePhotoAuction(address, addressPhoto)
    //     .send({ from: owner })
    //     .once("receipt", (receipt: any) => {
    //         console.log("=== receipt ===", receipt);
    //     });

    // photoAuction.methods
    //     .bid(addressPhoto, photoPrice)
    //     .send({ from: accounts[0] })
    //     .once("receipt", (receipt: any) => {
    //         console.log("=== receipt ===", receipt);
    //         setLoading(false);
    //         const PHOTO_NFT = receipt.events.PhotoNFTCreated.returnValues;
    //         console.log("=== PHOTO_NFT ===", PHOTO_NFT);
    //     });

    return (
        <div className="row">
            <>
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
                <Modal
                    isOpen={sohwModal}
                    toggle={toggleModal}
                    className="modalLoading"
                    wrapClassName="modalLoadingWrap"
                    modalClassName="modalLoadingModal"
                    backdropClassName="modalLoadingBackdrop"
                    contentClassName="modalLoadingContent"
                >
                    {" "}
                    <div className="row">
                        {" "}
                        <label> Price </label>{" "}
                        <input
                            className="sign__input"
                            onChange={OnchangePrice}
                        ></input>{" "}
                    </div>
                    <div className="row">
                        {" "}
                        <button onClick={createBiding} className="sign__btn">
                            Add bid{" "}
                        </button>
                    </div>
                </Modal>
            </>
            <div className="col-12 col-xl-8">
                <div className="asset__item  assetPhoto">
                    {renderPhoto()}
                    <div className="share share--asset">
                        <FacebookShareButton
                            url={"https://www.facebook.com/sqoin/"}
                        >
                            {" "}
                            <svg
                                width="9"
                                height="17"
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z" />
                            </svg>{" "}
                            <span>share</span>
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={"https://www.facebook.com/sqoin/"}
                            // media={`https://ipfs.io/ipfs/${props.photo}`}
                            className="share__link share__link--link tweet"
                        >
                            <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z" />
                            </svg>{" "}
                            <span>tweet</span>
                        </TwitterShareButton>

                        <>
                            {" "}
                            <button
                                className="share__link share__link--link"
                                onClick={() => onclicklink()}
                            >
                                <svg
                                    width="18"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z" />
                                </svg>{" "}
                                <span>copy link</span>
                            </button>
                        </>
                    </div>

                    <button className="asset__likes" type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                        </svg>
                        <span>358</span>
                    </button>
                </div>
            </div>
            <div className="col-12 col-xl-4">
                <div className="asset__desc">
                    <h2>Descriptions</h2>
                    <p>
                        {photo.photoNFTSymbol}
                        {/* There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour. */}
                    </p>
                </div>
                <ul className="asset__authors">
                    <li>
                        <span>Creator</span>
                        <div className="asset__author asset__author--verified">
                            <img src="img/avatars/avatar5.jpg" alt="" />
                            <a href="#/Author">@midinh</a>
                        </div>
                    </li>
                    <li>
                        <span>Collection</span>
                        <div className="asset__author ">
                            <img src="img/avatars/avatar9.jpg" alt="" />
                            <a href="#/Collection">The Meta Key</a>
                        </div>
                    </li>
                </ul>
                {photo.typeOfSale === "PutOnSale" ? (
                    <>
                        <ul className="nav nav-tabs asset__tabs" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    data-toggle="tab"
                                    href="#tab-1"
                                    role="tab"
                                    aria-controls="tab-1"
                                    aria-selected="true"
                                >
                                    History
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
                                    Bids
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
                                    Details
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="tab-1"
                                role="tabpanel"
                            >
                                <div
                                    className="asset__actions asset__actions--scroll"
                                    id="asset__actions--scroll"
                                >
                                    {Bids.map((ele: any) => {
                                        var date = new Date(
                                            ele.timestamp * 1000
                                        );
                                        return (
                                            <div className="asset__action asset__action--verified">
                                                <img
                                                    src="img/avatars/avatar10.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    Bid placed for{" "}
                                                    <b>
                                                        {" "}
                                                        {web3.utils.fromWei(
                                                            `${ele.amount}`,
                                                            "ether"
                                                        )}{" "}
                                                        ETH &nbsp;
                                                    </b>
                                                    <TimeAgo date={date} />{" "}
                                                    <br />
                                                    by{" "}
                                                    <a href="#/Author">
                                                        {ele.adress}
                                                    </a>
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div
                                className="tab-pane fade"
                                id="tab-2"
                                role="tabpanel"
                            >
                                <div className="asset__actions">
                                    {Bids.map((ele: any) => {
                                        var date = new Date(
                                            ele.timestamp * 1000
                                        );
                                        return (
                                            <div className="asset__action asset__action--verified">
                                                <img
                                                    src="img/avatars/avatar10.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    Bid placed for{" "}
                                                    <b>
                                                        {" "}
                                                        {web3.utils.fromWei(
                                                            `${ele.amount}`,
                                                            "ether"
                                                        )}{" "}
                                                        ETH &nbsp;
                                                    </b>{" "}
                                                    <TimeAgo date={date} />{" "}
                                                    <br />
                                                    by{" "}
                                                    <a href="#/Author">
                                                        {ele.adress}
                                                    </a>
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div
                                className="tab-pane fade"
                                id="tab-3"
                                role="tabpanel"
                            >
                                <ul className="asset__authors asset__authors--tab">
                                    <li>
                                        <span>Owner</span>
                                        <div className="asset__author asset__author--verified">
                                            <img
                                                src="img/avatars/avatar5.jpg"
                                                alt=""
                                            />
                                            <a href="#/Author">@midinh</a>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Year created</span>
                                        <p>2021</p>
                                    </li>
                                </ul>
                            </div>
                        </div>{" "}
                    </>
                ) : (
                    ""
                )}

                {props.activeItem === true ? (
                    <>
                        <div className="asset__wrap">
                            <div className="asset__timer">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.3,8.59l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91a8,8,0,0,0-9.79,0l-.91-.92A1,1,0,0,0,4.77,7.69l.92.91A7.92,7.92,0,0,0,4,13.5,8,8,0,1,0,18.3,8.59ZM12,19.5a6,6,0,1,1,6-6A6,6,0,0,1,12,19.5Zm-2-15h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3,6a1,1,0,0,0-2,0v1.89a1.5,1.5,0,1,0,2,0Z" />
                                    </svg>{" "}
                                    Auction ends in
                                </span>
                                <div className="asset__clock"></div>
                            </div>

                            <div className="asset__price">
                                <span>Minimum bid</span>
                                <span>0.2 ETH</span>
                            </div>
                        </div>

                        <div className="asset__btns">
                            <a
                                href="#modal-bid"
                                className="asset__btn asset__btn--full asset__btn--clr open-modal"
                            >
                                Place a bid
                            </a>
                        </div>
                    </>
                ) : showButtonBidBuy === true ? (
                    <div className="asset__btns">
                        <button
                            className="asset__btn asset__btn--clr"
                            type="button"
                            onClick={buyPhoto}
                        >
                            Buy - {renderPrix()}
                            ETH
                        </button>
                        {showButtonBid === true && (
                            <button
                                className="asset__btn open-modal"
                                onClick={bidPhoto}
                            >
                                Place a bid
                            </button>
                        )}
                    </div>
                ) : (
                    showButtonAuction === true && (
                        <div className="asset__btns">
                            <button
                                className="asset__btn asset__btn--clr"
                                type="button"
                                onClick={finAuction}
                            >
                                Fin Auction
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
export default Itemsidebar;
