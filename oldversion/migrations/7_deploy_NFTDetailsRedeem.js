const NFTDetailsReedem = artifacts.require("./NFTDetailsReedem.sol");

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(NFTDetailsReedem );
};