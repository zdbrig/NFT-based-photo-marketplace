
import React, { useEffect, useState } from "react";
import { getListActivity } from "../../Api/Activity";
import { unlockAccountImpl } from "../../Ethereum/Unlockaccount";
function Activitycomponent() {
    const [photo, setPhoto] = useState();
    const [namePhoto, setNamePhoto] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [web, setWeb3] = useState<any>();
    const [accounts, setAcounts] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [networkId, setNetworkId] = useState<any>();
    const [networkType, setNetworkType] = useState<any>();
    const [photoNFTData, setPhotoNFTData] = useState<any>();
    const [photoNFTMarketplace, setPhotoNFTMarketplace] = useState<any>();
    const [PHOTO_NFT_MARKETPLACE, setPHOTO_NFT_MARKETPLACE] = useState<any>();
    const [allPhotos, setAllPhoto] = useState<any>([]);
    const connectContract = async () => {
        const web3 = await unlockAccountImpl();

        let PhotoNFTMarketplace = require("../../contract/contracts/PhotoNFTMarketplace.json");

        let PhotoNFTData = require("../../contract/contracts/PhotoNFTData.json");

        // Use web3 to get the user's accounts.
        const accounts = await web3.web3.eth.getAccounts();
        const currentAccount = accounts[0];

        // Get the contract instance.
        const networkId = await web3.web3.eth.net.getId();
        const networkType = await web3.web3.eth.net.getNetworkType();
        let balance =
            accounts.length > 0
                ? await web3.web3.eth.getBalance(accounts[0])
                : web3.web3.utils.toWei("0");
        balance = web3.web3.utils.fromWei(balance, "ether");

        let instancePhotoNFTMarketplace = null;
        let instancePhotoNFTData = null;
        let PHOTO_NFT_MARKETPLACE;
        let deployedNetwork = null;
        // Create instance of contracts
        if (PhotoNFTData.networks) {
            deployedNetwork = PhotoNFTData.networks[networkId.toString()];
            if (deployedNetwork) {
                instancePhotoNFTData = new web3.web3.eth.Contract(
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
                instancePhotoNFTMarketplace = new web3.web3.eth.Contract(
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

    useEffect(() => {
        const data = connectContract().then((data: any) => {
            let allPhotos = data.methods.getAllPhotos().call();

            allPhotos.then((value: any) => {
                let stringArr: Array<any> = [];
                let tab: Array<any> = [];
                let tab1: Array<any> = [];
                for (var i = 0; i < value.length; i++) {
                    let x = value.slice(i, i + 1);

                    tab.push(x);
                }

                tab.map((ele: any) => {
                    ele.map((ele1: any) => {
                        console.log(ele1);
                        tab1.push(ele1);
                    });
                });

                setAllPhoto(tab1);
                console.log(tab1);
            });
        });
    }, []);
    return (
        <div className="col-12 col-xl-9 order-xl-1">
            <div className="row row--grid">
                {allPhotos.map((photo: any) => {
                    return (
                        <>
                            <div className="col-12 col-lg-6">
                                <div className="activity">
                                    <a
                                        href="#/Item"
                                        className="activity__cover"
                                    >
                                        <img
                                            src={`https://ipfs.io/ipfs/${photo.ipfsHashOfPhoto}`}
                                            alt=""
                                        />
                                    </a>
                                    <div className="activity__content">
                                        <h3 className="activity__title">
                                            <a href="#/Item">
                                                {photo.photoNFTSymbol}
                                            </a>
                                        </h3>
                                        <p className="activity__text">
                                            listed by{" "}
                                            <a href="#/Author">
                                                {photo.photoNFTName}
                                            </a>{" "}
                                            <br />
                                            for {photo.photoPrice} ETH <b></b>{" "}
                                        </p>
                                        <span className="activity__time">
                                            4 minutes ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>

            <div className="row row--grid">
                <div className="col-12">
                    <button
                        className="main__load"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsemore"
                        aria-expanded="false"
                        aria-controls="collapsemore"
                    >
                        Load more
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Activitycomponent;
