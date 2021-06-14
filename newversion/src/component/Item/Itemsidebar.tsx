import React, { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";
import { getListItem } from "../../Api/Item";
import Web3 from "web3";

function Itemsidebar(props: any) {
    const [web3, setWeb3] = useState<any>();
    const [accounts, setAcounts] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [networkId, setNetworkId] = useState<any>();
    const [networkType, setNetworkType] = useState<any>();
    const [photoNFTData, setphotoNFTData] = useState<any>();
    const [photoNFTMarketplace, setPhotoNFTMarketplace] = useState<any>();
    const [currentAccount, setCurrentAccount] = useState<any>();

    async function buyPhoto() {
        let PhotoNFT = {};

        PhotoNFT = require("../../contract/contracts/PhotoNFT.json");
        console.log("=== value of buyPhotoNFT ===" + PhotoNFT);
        //@ts-ignore
        let photoNFT = new web3.eth.Contract(PhotoNFT.abi, props.nft);
        console.log(photoNFT);
        /// Check owner of photoId
        const photoId = 1; /// [Note]: PhotoID is always 1. Because each photoNFT is unique.

        const owner = await photoNFT.methods.ownerOf(photoId).call();
        console.log("=== owner of photoId ===", owner); /// [Expect]: Owner should be the PhotoNFTMarketplace.sol (This also called as a proxy/escrow contract)

        console.log("=== nft ===", props.nft);
        //@ts-ignore
        const photo = await photoNFTData.methods
            .getPhotoByNFTAddress(props.nft)
            .call();
        console.log("=== owner of photo===", photo);
        //@ts-ignore
        const buyAmount = web3.utils.toWei(props.price, "ether");
        console.log(buyAmount);
        // await web3.utils.fromWei(
        //     `${props.price}`,
        //     "ether"
        // )}
        //@ts-ignore
        const txReceipt1 = await photoNFTMarketplace.methods
            .buyPhotoNFT(props.nft)
            .send({ from: accounts[0], value: buyAmount });
        console.log("=== response of buyPhotoNFT ===", txReceipt1);
    }

    async function connectSmartContract() {
        let PhotoNFTMarketplace = {};
        let PhotoNFTData = {};

        PhotoNFTMarketplace = require("../../contract/contracts/PhotoNFTMarketplace.json");

        PhotoNFTData = require("../../contract/contracts/PhotoNFTData.json");

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
        let instancePhotoNFTData = null;
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
                console.log(
                    "=== instancePhotoNFTMarketplace ===",
                    instancePhotoNFTMarketplace
                );
            }
        }
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
            setphotoNFTData(instancePhotoNFTData);
            setPhotoNFTMarketplace(instancePhotoNFTMarketplace);
            setCurrentAccount(currentAccount);
        } else {
            setWeb3(web3);
            setAcounts(accounts);
            setBalance(balance);
            setNetworkId(networkId);
            setNetworkType(networkType);
        }
    }
    useEffect(() => {
        connectSmartContract();
    }, []);

    return (
        <div>
            <div className="asset__info">
                <div className="asset__desc">
                    <h2>Descriptions</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
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
                {/* <!-- tabs --> */}
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
                            {getListItem().map((ele) => {
                                return (
                                    <div className="asset__action asset__action--verified">
                                        <img
                                            src="img/avatars/avatar10.jpg"
                                            alt=""
                                        />
                                        <p>
                                            Bid placed for <b>{ele.Price}</b> 4
                                            hours ago <br />
                                            by{" "}
                                            <a href="#/Author">{ele.adress}</a>
                                        </p>
                                    </div>
                                );
                            })}

                            {/* <div className="asset__action asset__action--verified">
                <img src="img/avatars/avatar4.jpg" alt="" />
                <p>
                  Bid placed for <b>10.00 ETH</b> 5 hours ago <br />
                  by <a href="#/Author">@johndoe</a>
                </p>
              </div> */}

                            {/* <div className="asset__action asset__action--verified">
                <img src="img/avatars/avatar6.jpg" alt="" />
                <p>
                  Bid placed for <b>2.508 ETH</b> 5 hours ago <br />
                  by <a href="#/Author">@n1ckname</a>
                </p>
              </div> */}

                            {/* <div className="asset__action asset__action--verified">
                <img src="img/avatars/avatar4.jpg" alt="" />
                <p>
                  Bid placed for <b>2.2799 ETH</b> 6 hours ago <br />
                  by <a href="#/Author">@johndoe</a>
                </p>
              </div> */}

                            {/* <div className="asset__action asset__action--verified">
                <img src="img/avatars/avatar5.jpg" alt="" />
                <p>
                  Put on sale for <b>0.55 ETH</b> 1 days ago <br />
                  by <a href="#/Author">@midinh</a>
                </p>
              </div> */}
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-2" role="tabpanel">
                        <div className="asset__actions">
                            {getListItem().map((ele) => {
                                return (
                                    <div className="asset__action asset__action--verified">
                                        <img
                                            src="img/avatars/avatar10.jpg"
                                            alt=""
                                        />
                                        <p>
                                            Bid placed for <b>{ele.Price}</b> 4
                                            hours ago <br />
                                            by{" "}
                                            <a href="#/Author">{ele.adress}</a>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="tab-pane fade" id="tab-3" role="tabpanel">
                        <ul className="asset__authors asset__authors--tab">
                            <li>
                                <span>Owner</span>
                                <div className="asset__author asset__author--verified">
                                    <img src="img/avatars/avatar5.jpg" alt="" />
                                    <a href="#/Author">@midinh</a>
                                </div>
                            </li>
                            <li>
                                <span>Year created</span>
                                <p>2021</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- end tabs --> */}
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
                ) : (
                    <div className="asset__btns">
                        <button
                            className="asset__btn asset__btn--clr"
                            type="button"
                            onClick={buyPhoto}
                        >
                            Buy - {props.price} ETH
                        </button>

                        <a href="#modal-bid" className="asset__btn open-modal">
                            Place a bid
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Itemsidebar;
