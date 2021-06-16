const NFTDutchAuction = artifacts.require("./NFTDutchAuction.sol");
const PhotoNFTMarketPlace = artifacts.require("./PhotoNFTMarketplace.sol");

const _photoNFTMarketPlace = PhotoNFTMarketPlace.address;

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(NFTDutchAuction, _photoNFTMarketPlace);
};
