import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Swal from 'sweetalert2'
import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Author from "../component/Authors/Authorcomponent";
import bg11 from "../images/bg11.jpg"
import { unlockAccountImpl } from "../Ethereum/Unlockaccount";
import photoNft1 from "../contract/contracts/PhotoNFT.json";
// import photoNft from "../../../../build/contracts/PhotoNFT.json";
import ipfs from "../component/Ipfs/ipfsApi";
import Web3 from "web3";
import ModalQRCode from "../component/Modal/modalQRCode";
import { Modal } from "reactstrap";
import "./Create.css";
import { setupMaster } from "cluster";

function Create() {
    const [photo, setPhoto] = useState<any>();
    const [namePhoto, setNamePhoto] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [web3, setWeb3] = useState<any>();
    const [accounts, setAcounts] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [networkId, setNetworkId] = useState<any>();
    const [networkType, setNetworkType] = useState<any>();
    const [accountMetamask, setAccountMetamask] = useState<any>();
    const [photoNFTFactory, setphotoNFTFactory] = useState<any>();
    const [photoNFTMarketplace, setPhotoNFTMarketplace] = useState<any>();
    const [PHOTO_NFT_MARKETPLACE, setPHOTO_NFT_MARKETPLACE] = useState<any>();
    const [buffer, setBuffer] = useState<any>();
    const [user, setUser] = useState<any>();
    const [ipfsHash, setIpfsHash] = useState<any>();
    const [buttonActive, setButtonActive] = useState(true);
    const [disabledAuction, setDisableAuction] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [activeItem, setActiveItem] = useState(false);
    const [showAuction, setShowAuction] = useState(false);
    const [showModalAuction, setShowModalAuction] = useState(false);
    const [auction, setAuction] = useState<any>();
    const [startingPrice, setStartingPrice] = useState("");
    const [endingPrice, setEndingPrice] = useState("");
    const [duration, setDuration] = useState(0);
    const [photoNft, setPhotoNft] = useState<any>();
    const [selectedOption, setSelectedOption] = useState("");
    const [networkModal, setModalNetwork] = useState(false);
    const [addressAuction, setAddressAuction] = useState(false);
    const [redevance, setRedevance] = useState(0);
    const [showModalQRCode, setShowModalQRCode] = useState(false);
    const toggleNetwork = () => setModalNetwork(false);
    const toggleQRCode = () => setShowModalQRCode(false);
    const handleClick = (active: any) => {
        setActiveItem(active);
    };
    const toggleAuction = () => {
        setShowModalAuction(false);
    };
    const toggle = () => setLoading(false);

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
        // let extension = file.name.match(/(?<=\.)\w+$/g)[0].toLowerCase(); // assuming that this file has any extension

        // if (extension === "mp4") {
        //     setPhoto("video");
        // } else {
        //     setPhoto("image");
        //     // event.target.value = "";
        //     // alert("Wrong file extension! File input is cleared.");
        // }
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

    // const createItem = async () => {
    //     ipfs.files.add(buffer, (error: any, result: any) => {
    //         // In case of fail to upload to IPFS
    //         if (error) {
    //             console.error(error);
    //             return;
    //         }
    //         const photoPrice = web3.utils.toWei(price, "ether");
    //         // In case of successful to upload to IPFS

    //         setIpfsHash(result[0].hash);
    //         setLoading(true);
    //         photoNFTFactory.methods
    //             .createNewPhotoNFT(
    //                 namePhoto,
    //                 description,
    //                 photoPrice,
    //                 result[0].hash,
    //                 selectedOption,
    //                 redevance
    //             )
    //             .send({ from: accounts[0] })
    //             .once("receipt", (receipt: any) => {
    //                 console.log("=== receipt ===", receipt);

    //                 const PHOTO_NFT =
    //                     receipt.events.PhotoNFTCreated.returnValues.photoNFT;
    //                 console.log("=== PHOTO_NFT ===", PHOTO_NFT);

    //                 // let PhotoNFT = {};

    //                 // PhotoNFT = photoNft.abi;
    //                 // console.log("=== PHOTO_NFT ===", PhotoNFT);
    //                 // let photoNFT = new web3.eth.Contract(PhotoNFT, PHOTO_NFT);
    //                 /// Get instance by using created photoNFT address
    //                 // let PhotoNFT = {};
    //                 // PhotoNFT = photoNft;
    //                 let photoNFT = new web3.eth.Contract(
    //                     //@ts-ignore
    //                     photoNft1.abi,
    //                     PHOTO_NFT
    //                 );
    //                 console.log("=== photoNFT ===", photoNFT);
    //                 const photoId = 1; /// [Note]: PhotoID is always 1. Because each photoNFT is unique.
    //                 console.log("photoId" + photoId);
    //                 photoNFT.methods
    //                     .ownerOf(photoId)
    //                     .call()
    //                     .then((owner: any) =>
    //                         console.log("=== owner of photoId 1 ===", owner)
    //                     );
    //                 photoNFT.methods
    //                     .approve(PHOTO_NFT_MARKETPLACE, photoId)
    //                     .send({ from: accounts[0] })
    //                     .once("receipt", (receipt: any) => {
    //                         /// Put on sale (by a seller who is also called as owner)
    //                         photoNFTMarketplace.methods
    //                             .openTradeWhenCreateNewPhotoNFT(
    //                                 PHOTO_NFT,
    //                                 photoId,
    //                                 photoPrice
    //                             )
    //                             .send({ from: accounts[0] })
    //                             .once("receipt", (receipt: any) => {
    //                                 setPhotoNft(PHOTO_NFT);
    //                                 console.log("xx");
    //                             })
    //                             .then((rest: any) => {
    //                                 if (selectedOption === "InstantSalePrice") {
    //                                     // localStorage.setItem(
    //                                     //     "typeAchat",
    //                                     //     selectedOption
    //                                     // );
    //                                     localStorage.setItem(
    //                                         "nftPhoto",
    //                                         PHOTO_NFT
    //                                     );
    //                                     window.location.assign("#/Activity");
    //                                 }
    //                                 if (selectedOption === "PutOnSale") {
    //                                     localStorage.setItem(
    //                                         "nftPhoto",
    //                                         PHOTO_NFT
    //                                     );
    //                                     setLoading(false);

    //                                     setShowModalAuction(true);

    //                                     // setShowAuction(true);
    //                                 } // window.location.assign("#/Activity");
    //                             });
    //                     });
    //             });
    //     });
    // };



    async function sendEmail(photoNft: any) {
        console.log("numnft" + photoNft)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: user.username,
                emailAdmin: user.email,
                imgQRCode: photoNft,
            }),
        };
        try {
            fetch("/api/sendEmail", requestOptions)
                .then((response) => response.text())

                .then((data) => {
                  //  setShowModalQRCode(true);

                });
        } catch (err) {
            alert(err);
        }
    }
    const createItem = async () => {
        setTimeout(() => setLoading(true), 50);
        setTimeout(() => setButtonActive(true), 100);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        ipfs.files.add(buffer, (error: any, result: any) => {
            // In case of fail to upload to IPFS
            if (error) {
                console.error(error);
                return;
            }
            const photoPrice = web3.utils.toWei(price, "ether");
            // In case of successful to upload to IPFS

            setIpfsHash(result[0].hash);
            console.log(photoNFTFactory)
            console.log(user.email)

            photoNFTFactory.methods.createNewPhotoNFT(
                namePhoto,
                description,
                photoPrice,
                result[0].hash,
                user.email,
                redevance
            )
                .send({ from: accounts[0] })
                .once("receipt", (receipt: any) => {

                    setLoading(false);
                    swalWithBootstrapButtons.fire({
                        title: 'Confirmation!',
                        text: "Are you sure you want to approve NFT?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, confirm it!',
                        cancelButtonText: 'No, cancel!',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            /* swalWithBootstrapButtons.fire(
                               'Deleted!',
                               'Your file has been deleted.',
                               'success'
                             )*/setLoading2(true)
                            console.log("=== receipt ===", receipt);

                            console.log("parti 1");
                            const PHOTO_NFT =
                                receipt.events.PhotoNFTCreated.returnValues.photoNFT;
                            console.log("=== PHOTO_NFT ===", PHOTO_NFT);
                            let photoNFT = new web3.eth.Contract(
                                //@ts-ignore
                                photoNft1.abi,
                                PHOTO_NFT
                            );
                            console.log("=== photoNFT ===", photoNFT);
                            const photoId = 1; /// [Note]: PhotoID is always 1. Because each photoNFT is unique.
                            console.log("photoId" + photoId);
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
                                    setLoading2(false)
                                    swalWithBootstrapButtons.fire({
                                        title: 'Confirmation!',
                                        text: "Are you sure you want to open  the trade when creating a new NFT?",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonText: 'Yes, confirm it!',
                                        cancelButtonText: 'No, cancel!',
                                        reverseButtons: true
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            setLoading3(true)
                                            console.log("parti 2")
                                            /// Put on sale (by a seller who is also called as owner)
                                            photoNFTMarketplace.methods
                                                .openTradeWhenCreateNewPhotoNFT(
                                                    PHOTO_NFT,
                                                    photoId,
                                                    photoPrice
                                                )
                                                .send({ from: accounts[0] })
                                                .once("receipt", (receipt: any) => {
                                                    setLoading3(false)
                                                    setPhotoNft(PHOTO_NFT);
                                                    console.log("xx");
                                                    console.log("parti 3")
                                                    Swal.fire({
                                                        title:'Done!',
                                                        html:'<strong>Create New NFT  Confimed!</strong>'+'</br><p>I sent a qr code and the site link please see your email</p>',
                                                        icon:'success'
                                                     } )
                                                })
                                                .then((rest: any) => {

                                                    sendEmail(PHOTO_NFT)

                                                    setModalNetwork(false)


                                                });
                                        }
                                        else if (
                                            /* Read more about handling dismissals below */
                                            result.dismiss === Swal.DismissReason.cancel
                                        ) {
                                            swalWithBootstrapButtons.fire({
                                                title:'Cancelled',
                                                icon:'error'
                                            })
                                        }
                                    })

                                }).on('error', function (error: any) {
                                    swalWithBootstrapButtons.fire({
                                       title: 'Cancelled',
                                       text: error.message,
                                        icon:'error'
                                     } )
                                    setLoading(false);
                                    setButtonActive(false)
                                })
                
                        } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            swalWithBootstrapButtons.fire({
                               title: 'Cancelled',
                                icon:'error'
                        })
                        }
                    });


                    // let PhotoNFT = {};

                    // PhotoNFT = photoNft.abi;
                    // console.log("=== PHOTO_NFT ===", PhotoNFT);
                    // let photoNFT = new web3.eth.Contract(PhotoNFT, PHOTO_NFT);
                    /// Get instance by using created photoNFT address
                    // let PhotoNFT = {};
                    // PhotoNFT = photoNft;



                })
                .on('error', function (error: any) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        error.message,
                        'error'
                    )
                    setLoading(false);
                    setButtonActive(false)
                })



        });
    };
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

        if (endingPrice && duration) {
            setDisableAuction(false);
        } else {
            setDisableAuction(true);
        }
    });

    useEffect(() => {
        if (description && price && namePhoto && selectedOption) {
            setButtonActive(false);
        } else {
            setButtonActive(true);
        }
    }, [description, price, namePhoto, selectedOption]);
    useEffect(() => {
        connect();
        connectAuction();
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
            console.log("type" + accounts);
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
    async function connectAuction() {
        //@ts-ignore
        const { ethereum } = window;
        const web3 = new Web3(ethereum);
        const networkId = await web3.eth.net.getId();
        let deployedNetwork = null;
        let instanceAuctions = null;
        let auctions = {};
        auctions = require("../contract/contracts/Auction.json");
        console.log(auctions);
        console.log(" auctions" + auctions);
        //@ts-ignore
        if (auctions.networks) {
            deployedNetwork =
                //@ts-ignore
                auctions.networks[networkId.toString()];

            if (deployedNetwork) {
                instanceAuctions = new web3.eth.Contract(
                    //@ts-ignore
                    auctions.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setAuction(instanceAuctions);
                setAddressAuction(deployedNetwork.address);
                console.log(
                    "=== instanceauctions ===",
                    deployedNetwork.address
                );
            }
        }
    }
    async function createAuction() {
        // let tokenTosell = tokenGenerate(32);
        // let tokenTosell = "1";

        // let startingPricePhoto = "";
        // let endingPricePhoto = "";
        // let durationPhoto = 0;

        let startingPricePhoto = web3.utils.toHex(
            web3.utils.toWei(price, "ether")
        );

        let endingPricePhoto = web3.utils.toHex(
            web3.utils.toWei(endingPrice, "ether")
        );

        // convert from hours to seconds
        let durationPhoto = duration * 60 * 60;

        // const account= await
        if (price > endingPrice) {
            alert("The starting price must be lower than the end price");
            throw "Error: The starting price must be lower than the end price";
        }
        setLoading(true);
        await auction.methods
            .createAuction(
                photoNft,
                startingPricePhoto,
                endingPricePhoto,
                durationPhoto
            )
            .send({ from: accounts[0] })
            .once("receipt", (receipt: any) => {
                console.log("=== receipt ===", receipt);
            })
            .then((res: any) => {
                // localStorage.setItem("typeAchat", selectedOption);
                window.location.assign("#Activity");
            });
    }
    function changeStartingPrice(e: any) {
        setStartingPrice(e.target.value);
    }
    function changeEndingPrice(e: any) {
        setEndingPrice(e.target.value);
    }
    function changeDuration(e: any) {
        setDuration(e.target.value);
    }
    function goHome() {
        window.location.assign("#/Home");
    }
    function handleOptionChange(changeEvent: any) {
        setSelectedOption(changeEvent.target.value);
    }

    function changeRedevance(e: any) {
        setRedevance(e.target.value);
    }
    function handleSelectUser(user: any) {
        setUser(user)

        console.log("user" + user)
    }
    return (
        <div>
     
            <>

               {/*  <ModalQRCode isOpen={showModalQRCode} toggleQRCode={toggleQRCode} nftPhoto={photoNft} /> */}
                <Modal
                    isOpen={loading}
                    className="class1"
                   
                    modalClassName="modalLoadingModal"
                >
                     <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    className="spinnerClass"
                />
                <p className="loadingStyle">Wait...</p>
                <p>Creating NFT in progress</p>
                </Modal>
              
                <Modal
                    isOpen={loading2}
                    className="class1"
                   
                    modalClassName="modalLoadingModal"
                >
                     <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    className="spinnerClass"
                />
                <p className="loadingStyle">Wait...</p>
                <p>Approving NFT in progress</p>
                </Modal>
                <Modal
                    isOpen={loading3}
                    className="class1"
                   
                    modalClassName="modalLoadingModal"
                >
                     <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"
                    className="spinnerClass"
                />
                <p className="loadingStyle">Wait...</p>
                <p>Opening of the trade when creating a new PhotoNFT  in progress</p>
                </Modal>
            </>
            <Modal
                isOpen={networkModal}
                toggle={toggleNetwork}
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
                isOpen={showModalAuction}
                toggle={toggleAuction}
                className="modalLoading"
                wrapClassName="modalLoadingWrap"
                modalClassName="modalLoadingModal"
                backdropClassName="modalLoadingBackdrop"
                contentClassName="modalLoadingContent"
            >
                <div className="row">
                    {" "}
                    <h5>Create Auction</h5>{" "}
                </div>
                <div className="row">
                    <label>Starting Price</label>{" "}
                    <input
                        onChange={changeStartingPrice}
                        type="text"
                        className="sign__input"
                        value={price}
                        disabled
                    ></input>
                </div>
                <div className="row">
                    {" "}
                    <label> Ending Price </label>{" "}
                    <input
                        onChange={changeEndingPrice}
                        className="sign__input"
                    ></input>{" "}
                </div>
                <div className="row ">
                    {" "}
                    <label> Duration / hour</label>{" "}
                    <input
                        onChange={changeDuration}
                        className="sign__input"
                    ></input>{" "}
                </div>
                <div className="row ajouter">
                    {" "}
                    <button
                        onClick={createAuction}
                        className={
                            disabledAuction === false ? "sign__btn" : "btnItem"
                        }
                        disabled={disabledAuction}
                    >
                        Add Auction{" "}
                    </button>
                </div>
            </Modal>
            <main className="main">
                <div className="main__author"><img  src={bg11}></img></div>
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-xl-3">
                            <Author account={accountMetamask} onSelectUser={handleSelectUser} />
                        </div>
                        <div className="col-12 col-xl-9">
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
                                        <div className="sign__group">
                                            <label
                                                id="file1"
                                                htmlFor="sign__file-upload"
                                                className="uploadFile"
                                            ></label>
                                            <input
                                                data-name="#file1"
                                                id="sign__file-upload"
                                                name="file"
                                                className="sign__file-upload filePhoto"
                                                type="file"
                                                accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg"
                                                onChange={OnchangPhoto}
                                                required
                                                placeholder="e. g. Image, Audio, Video"
                                                value={photo}
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
                                                className="sign__input"
                                                onChange={onChangePrix}
                                                required={true}
                                                type="text"
                                                width={1}
                                                placeholder="e.g) 10"
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
                                                onChange={changeRedevance}
                                            >
                                                <option value="5">5%</option>
                                                <option value="10">10%</option>
                                                <option value="20">20%</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* <div className="col-12 col-md-4">
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
                                    </div> */}

                                    {/* <div className="col-12 col-md-4">
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
                                    </div> */}

                                    <div className="col-12">
                                        <div className="sign__group sign__group--row">
                                            <ul className="sign__radio sign__radio--single">
                                                {/*} <li>
                                                    <input
                                                        id="type1"
                                                        type="radio"
                                                        name="type"
                                                        value="PutOnSale"
                                                        checked={
                                                            selectedOption ===
                                                            "PutOnSale"
                                                        }
                                                        onChange={
                                                            handleOptionChange
                                                        }
                                                    />
                                                    <label htmlFor="type1">
                                                        Put on sale
                                                    </label>
                                                </li>*/}
                                                <li>
                                                    <input
                                                        id="type2"
                                                        type="radio"
                                                        name="type"
                                                        value="InstantSalePrice"
                                                        checked={
                                                            selectedOption ===
                                                            "InstantSalePrice"
                                                        }
                                                        onChange={
                                                            handleOptionChange
                                                        }
                                                    />
                                                    <label htmlFor="type2">
                                                        Instant sale price
                                                    </label>
                                                </li>
                                                {/* <li>
                                                    <input
                                                        id="type3"
                                                        type="radio"
                                                        name="type"
                                                    />
                                                    <label htmlFor="type3">
                                                        Unlock one purchased
                                                    </label>
                                                </li> */}
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
                                            Create photo
                                        </button>
                                    </div>

                                    {/* <div className="col-12 col-xl-3">
                                        <button
                                            type="button"
                                            className={
                                                buttonActive === false
                                                    ? "sign__btn"
                                                    : "btnItem"
                                            }
                                            onClick={onClickCreateAuction}
                                        >
                                            Create auction
                                        </button>
                                    </div> */}
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
