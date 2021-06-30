import React, { useEffect, useState } from "react";
import { ListGroupItem } from "reactstrap";
import { getListActivity } from "../../Api/Activity";
import { unlockAccountImpl } from "../../Ethereum/Unlockaccount";
import "./Activitycomponent.css";
import Web3 from "web3";
import { Modal } from "reactstrap";
import Swal from "sweetalert2";
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
    const [tailleTab, setTailleTab] = useState(0);
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
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

        setPhotoNFTData(instancePhotoNFTData);
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
        setPhotoNFTData(instancePhotoNFTData);

        setWeb3(web3);
        setAcounts(accounts);
        setBalance(balance);
        setNetworkId(networkId);
        setNetworkType(networkType);
        setPhotoNFTMarketplace(instancePhotoNFTMarketplace);

        setPHOTO_NFT_MARKETPLACE(PHOTO_NFT_MARKETPLACE);
        return instancePhotoNFTData;
    };
    function renderCard() {
        let ret: Array<any> = [];
        let i = index;

        console.log(allPhotos);
        allPhotos.map((photo: any) => {
            console.log(photo);
            // const IPFS = require("ipfs");

            const urlipfs = "https://ipfs.io/ipfs/" + photo.ipfsHashOfPhoto;
            // console.log(urlipfs);

            // const toStream = require("it-to-stream");
            // const FileType = require("file-type");
            // const type = FileType.fromStream(
            //     toStream(
            //         urlipfs.cat(photo.ipfsHashOfPhoto, {
            //             length: 100, // or however many bytes you need
            //         })
            //     )
            // );
            //console.log(type);
            if (i < index + 8) {
                i++;
                console.log("index" + index);
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
                                    <iframe
                                        src={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}`}
                                        className="embedfile"
                                    />
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
                                            {photo.photoNFTSymbol}
                                        </a>
                                    </h3>
                                    <p className="activity__text">
                                        listed by{" "}
                                        <a href="#/Author">
                                            {photo.photoNFTName}
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
                                        4 minutes ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                );
            }
        });
        // if (i > index + 8) {
        //     alert("zz");
        //     console.log(index);
        //     let ret: Array<any> = [];
        //     let i = index;
        //     let indice = allPhotos.length - index;
        //     console.log(indice);
        //     // fruits.forEach(function(item, index, array) {
        //     allPhotos.forEach((photo: any, indice: any) => {
        //         console.log(photo.photoNFTSymbol);
        //         indice = indice - 1;
        //         if (i < index + 8) {
        //             console.log("x");
        //             if (photo.status === "Open") {
        //                 i++;
        //                 console.log("index" + index);
        //                 ret.push(
        //                     <>
        //                         <p>amal</p>
        //                         <div className="col-12 col-lg-6">
        //                             <div className="activity">
        //                                 <button
        //                                     onClick={() =>
        //                                         goItem(
        //                                             web3.utils.fromWei(
        //                                                 `${photo.photoPrice}`,
        //                                                 "ether"
        //                                             ),
        //                                             photo.ipfsHashOfPhoto,
        //                                             photo.photoNFT
        //                                         )
        //                                     }
        //                                     className="activity__cover"
        //                                 >
        //                                     <img
        //                                         src={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}`}
        //                                         alt=""
        //                                     />
        //                                 </button>
        //                                 <div className="activity__content">
        //                                     <h3 className="activity__title">
        //                                         <a href="#/Item">
        //                                             {photo.photoNFTSymbol}
        //                                         </a>
        //                                     </h3>
        //                                     <p className="activity__text">
        //                                         listed by{" "}
        //                                         <a href="#/Author">
        //                                             {photo.photoNFTName}
        //                                         </a>{" "}
        //                                         <br />
        //                                         for{" "}
        //                                         {web3.utils.fromWei(
        //                                             `${photo.photoPrice}`,
        //                                             "ether"
        //                                         )}{" "}
        //                                         ETH <b></b>{" "}
        //                                     </p>
        //                                     <span className="activity__time">
        //                                         4 minutes ago
        //                                     </span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </>
        //                 );
        //             }
        //         }
        //     });
        // }

        return ret;
    }

    function renderCardPlus() {
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

            allPhotos.then((value: any) => {
                let stringArr: Array<any> = [];
                let tab: Array<any> = [];
                let tab1: Array<any> = [];
                for (var i = value.length; i >= 0; i--) {
                    let x = value.slice(i, i + 1);

                    tab.push(x);
                }

                tab.map((ele: any) => {
                    ele.map((ele1: any) => {
                        if (ele1.status === "Open") {
                            // console.log(ele1);
                            tab1.push(ele1);
                        }
                    });
                });
                let taille = tab1.length;
                console.log("taille" + taille);
                setTailleTab(taille);
                setAllPhoto(tab1);
            });
        });
    }, []);

    function goItem(price: any, photo: any, nft: any) {
        // localStorage.setItem("prix", price);
        // localStorage.setItem("photo", photo);
        // localStorage.setItem("nftPhoto", nft);
        localStorage.setItem("nftPhoto", nft);
        window.location.assign("#/Item");
    }
    const ChargerPlus = (e: any) => {
        e.preventDefault();
        setIndex(index + 8);
        props.onClickCharge();
    };

    return (
        <div className="col-12 col-xl-9 order-xl-1">
            <div className="row row--grid">
                {index < 8 ? renderCard() : renderCardPlus()}
            </div>
            {tailleTab > 8 && (
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
