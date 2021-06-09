import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Author from "../component/Authors/Authorcomponent";
import { unlockAccountImpl } from "../Ethereum/Unlockaccount";
import photoNft from "../contract/contracts/PhotoNFT.json";
import ipfs from "../component/Ipfs/ipfsApi";
import Web3 from "web3";
import { Modal } from "reactstrap";
import "./Create.css";
import ReactModal from "react-modal";
function Create() {
    const [photo, setPhoto] = useState();
    const [namePhoto, setNamePhoto] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [web3, setWeb3] = useState<any>();
    const [accounts, setAcounts] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [networkId, setNetworkId] = useState<any>();
    const [networkType, setNetworkType] = useState<any>();
    const [photoNFTFactory, setphotoNFTFactory] = useState<any>();
    const [photoNFTMarketplace, setPhotoNFTMarketplace] = useState<any>();
    const [PHOTO_NFT_MARKETPLACE, setPHOTO_NFT_MARKETPLACE] = useState<any>();
    const [buffer, setBuffer] = useState<any>();
    const [ipfsHash, setIpfsHash] = useState<any>();
    const [buttonActive, setButtonActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const toggle = () => setLoading(!loading);
    function OnchangPhoto(event: any) {
        event.preventDefault();
        const file = event.target.files[0];

        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file); // Read bufffered file

        // Callback

        reader.onloadend = () => {
            //@ts-ignore
            const buffer = new Buffer(reader.result);
            setBuffer(buffer);
            console.log("=== buffer ===", buffer);
        };
        // setPhoto(e.target.value);
        // console.log(photo);
    }
    function onChangeName(e: any) {
        setNamePhoto(e.target.value);
        console.log(namePhoto);
    }
    function onChangeDescription(e: any) {
        setDescription(e.target.value);
    }
    function onChangePrix(e: any) {
        setPrice(e.target.value);
    }

    const createItem = async () => {
        ipfs.files.add(buffer, (error: any, result: any) => {
            // In case of fail to upload to IPFS
            if (error) {
                console.error(error);
                return;
            }

            // In case of successful to upload to IPFS
            setIpfsHash(result[0].hash);
            setLoading(true);
            photoNFTFactory.methods
                .createNewPhotoNFT(
                    namePhoto,
                    description,
                    price,
                    result[0].hash
                )
                .send({ from: accounts[0] })
                .once("receipt", (receipt: any) => {
                    console.log("=== receipt ===", receipt);

                    const PHOTO_NFT =
                        receipt.events.PhotoNFTCreated.returnValues.photoNFT;
                    console.log("=== PHOTO_NFT ===", PHOTO_NFT);

                    let PhotoNFT = {};
                    PhotoNFT = photoNft.abi;

                    let photoNFT = new web3.eth.Contract(PhotoNFT, PHOTO_NFT);
                    const photoId = 1; /// [Note]: PhotoID is always 1. Because each photoNFT is unique.
                    photoNFT.methods
                        .ownerOf(photoId)
                        .call()
                        .then((owner: any) =>
                            console.log("=== owner of photoId 1 ===", owner)
                        );
                    photoNFT.methods
                        .approve(PHOTO_NFT_MARKETPLACE, photoId)
                        .send({ from: accounts[0] })
                        .once("receipt", (receipt: any) => {
                            /// Put on sale (by a seller who is also called as owner)
                            photoNFTMarketplace.methods
                                .openTradeWhenCreateNewPhotoNFT(
                                    PHOTO_NFT,
                                    photoId,
                                    price
                                )
                                .send({ from: accounts[0] })
                                .once("receipt", (receipt: any) => {
                                    setLoading(false);
                                });
                        });
                });
        });
    };
    useEffect(() => {
        if (description && price && namePhoto) {
            setButtonActive(false);
        } else {
            setButtonActive(true);
        }
    });
    useEffect(() => {
        connect();
    }, []);
    const connect = async () => {
        if (localStorage.getItem("wallettype") === "metamask") {
            //@ts-ignore
            const { ethereum } = window;
            const web3 = new Web3(ethereum);
            let PhotoNFTFactory = {};
            let PhotoNFTMarketplace = {};
            PhotoNFTFactory = require("../contract/contracts/PhotoNFTFactory.json");
            PhotoNFTMarketplace = require("../contract/contracts/PhotoNFTMarketplace.json");

            console.log("contract" + PhotoNFTMarketplace + PhotoNFTFactory);
            const accounts = await web3.eth.getAccounts();
            console.log("account" + accounts);
            const networkId = await web3.eth.net.getId();

            console.log("id" + networkId);
            const networkType = await web3.eth.net.getNetworkType();
            console.log("type" + networkType);
            let balance =
                accounts.length > 0
                    ? await web3.eth.getBalance(accounts[0])
                    : web3.utils.toWei("0");
            balance = web3.utils.fromWei(balance, "ether");
            console.log(" balance " + balance);
            let instancePhotoNFTFactory = null;
            let instancePhotoNFTMarketplace = null;
            let PHOTO_NFT_MARKETPLACE: any;
            let deployedNetwork = null;

            //@ts-ignore
            if (PhotoNFTFactory.networks) {
                deployedNetwork =
                    //@ts-ignore
                    PhotoNFTFactory.networks[networkId.toString()];
                if (deployedNetwork) {
                    instancePhotoNFTFactory = new web3.eth.Contract(
                        //@ts-ignore
                        PhotoNFTFactory.abi,
                        deployedNetwork && deployedNetwork.address
                    );
                    console.log(
                        "=== instancePhotoNFTFactory ===",
                        instancePhotoNFTFactory
                    );
                }
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

                        PHOTO_NFT_MARKETPLACE = deployedNetwork.address;
                        console.log(
                            "=== instancePhotoNFTMarketplace ===",
                            instancePhotoNFTMarketplace
                        );
                        console.log(
                            "=== PHOTO_NFT_MARKETPLACE ===",
                            PHOTO_NFT_MARKETPLACE
                        );
                    }
                }
            }

            setWeb3(web3);
            setAcounts(accounts);
            setBalance(balance);
            setNetworkId(networkId);
            setNetworkType(networkType);
            setPhotoNFTMarketplace(instancePhotoNFTMarketplace);
            setphotoNFTFactory(instancePhotoNFTFactory);
            setPHOTO_NFT_MARKETPLACE(PHOTO_NFT_MARKETPLACE);
        }
    };

    return (
        <div>
            <Header />
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
            </>
            <main className="main">
                <div className="main__author" data-bg="img/bg/bg.png"></div>
                <div className="container">
                    <div className="row row--grid">
                        {/* <!-- author --> */}
                        <div className="col-12 col-xl-3">
                            <Author></Author>
                        </div>
                        <div className="col-12 col-xl-9">
                            {/* <!-- title --> */}
                            <div className="main__title main__title--create">
                                <h2>Create collectible item</h2>
                            </div>
                            {/* <!-- end title -->

					<!-- create htmlForm --> */}
                            <form
                                action="#"
                                className="sign__htmlForm sign__htmlForm--create"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <h4 className="sign__title">
                                            Upload file <em>*</em>
                                        </h4>
                                    </div>

                                    <div className="col-12">
                                        <div className="sign__file">
                                            <label
                                                id="file1"
                                                htmlFor="sign__file-upload"
                                                className="uploadFile"
                                            ></label>
                                            <input
                                                data-name="#file1"
                                                id="sign__file-upload"
                                                name="file"
                                                className="sign__file-upload"
                                                type="file"
                                                accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg"
                                                onChange={OnchangPhoto}
                                                required
                                                placeholder="e. g. Image, Audio, Video"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <h4 className="sign__title">
                                            Item details
                                        </h4>
                                    </div>

                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label
                                                className="sign__label"
                                                htmlFor="itemname"
                                            >
                                                Item name <em>*</em>
                                            </label>
                                            <input
                                                id="itemname"
                                                type="text"
                                                name="itemname"
                                                className="sign__input"
                                                placeholder="e. g. 'Crypto Heart'"
                                                value={namePhoto}
                                                onChange={onChangeName}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label
                                                className="sign__label"
                                                htmlFor="itemname"
                                            >
                                                Price photo<em>*</em>
                                            </label>
                                            <input
                                                id="itemphoto"
                                                type="text"
                                                className="sign__input"
                                                onChange={onChangePrix}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="sign__group">
                                            <label
                                                className="sign__label"
                                                htmlFor="description"
                                            >
                                                Description<em>*</em>
                                            </label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                className="sign__textarea"
                                                placeholder="e. g. 'After purchasing you will able to recived...'"
                                                onChange={onChangeDescription}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="sign__group">
                                            <label
                                                className="sign__label"
                                                htmlFor="royalties"
                                            >
                                                Royalties
                                            </label>
                                            <select
                                                id="royalties"
                                                name="royalties"
                                                className="sign__select"
                                            >
                                                <option value="1">5%</option>
                                                <option value="2">10%</option>
                                                <option value="3">20%</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="sign__group">
                                            <label
                                                className="sign__label"
                                                htmlFor="size"
                                            >
                                                Size
                                            </label>
                                            <input
                                                id="size"
                                                type="text"
                                                name="size"
                                                className="sign__input"
                                                placeholder="e. g. Size"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="sign__group">
                                            <label
                                                className="sign__label"
                                                htmlFor="propertie"
                                            >
                                                Propertie
                                            </label>
                                            <input
                                                id="propertie"
                                                type="text"
                                                name="propertie"
                                                className="sign__input"
                                                placeholder="Subject"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="sign__group sign__group--row">
                                            <ul className="sign__radio sign__radio--single">
                                                <li>
                                                    <input
                                                        id="type1"
                                                        type="radio"
                                                        name="type"
                                                        checked
                                                    />
                                                    <label htmlFor="type1">
                                                        Put on sale
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        id="type2"
                                                        type="radio"
                                                        name="type"
                                                    />
                                                    <label htmlFor="type2">
                                                        Instant sale price
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        id="type3"
                                                        type="radio"
                                                        name="type"
                                                    />
                                                    <label htmlFor="type3">
                                                        Unlock one purchased
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-xl-3">
                                        <button
                                            type="button"
                                            className={
                                                buttonActive === false
                                                    ? "sign__btn"
                                                    : "btnItem"
                                            }
                                            onClick={createItem}
                                            disabled={buttonActive}
                                        >
                                            Create item
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- end create htmlForm --> */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default Create;
